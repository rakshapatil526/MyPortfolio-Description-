import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class ResumeNumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 7)
        self.setFillColor(colors.HexColor("#64748B"))
        
        # Bottom footer
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawString(32, 16, "Rakshitha S — Curriculum Vitae | +91 7349248807 | raksharakshitha02@gmail.com")
        self.drawRightString(letter[0] - 32, 16, page_str)
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.4)
        self.line(32, 24, letter[0] - 32, 24)
        
        self.restoreState()

def generate_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=26,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    c_primary = colors.HexColor("#0F172A")    # Deep slate
    c_blue = colors.HexColor("#1D4ED8")       # Classic royal blue
    c_dark = colors.HexColor("#1E293B")       # Text dark
    c_muted = colors.HexColor("#475569")      # Secondary text
    c_divider = colors.HexColor("#2563EB")    # Line divider

    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        textColor=c_primary,
        alignment=1,
        spaceAfter=1
    )

    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=c_blue,
        alignment=1,
        spaceAfter=3
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=c_muted,
        alignment=1,
        spaceAfter=4
    )

    sec_heading_style = ParagraphStyle(
        'ResumeSecHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=c_primary,
        spaceBefore=5,
        spaceAfter=1,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=c_dark,
        spaceAfter=1
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.3,
        textColor=c_dark,
        leftIndent=10,
        spaceAfter=1
    )

    proj_title_style = ParagraphStyle(
        'ResumeProjTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.3,
        leading=11,
        textColor=c_primary,
        spaceBefore=2.5,
        spaceAfter=1,
        keepWithNext=True
    )

    tech_style = ParagraphStyle(
        'ResumeTech',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=c_blue,
        leftIndent=10,
        spaceAfter=2
    )

    def section_divider(title):
        elements = []
        elements.append(Paragraph(title.upper(), sec_heading_style))
        elements.append(HRFlowable(width="100%", thickness=0.8, color=c_divider, spaceBefore=1, spaceAfter=2.5))
        return elements

    story = []

    # Header
    story.append(Paragraph("RAKSHITHA S", name_style))
    story.append(Paragraph("FULL-STACK DEVELOPER &nbsp;|&nbsp; AI/ML ENTHUSIAST", title_style))
    contact_text = (
        '<font color="#1D4ED8"><b>+91 7349248807</b></font> &nbsp;|&nbsp; '
        'Bengaluru, Karnataka &nbsp;|&nbsp; '
        '<a href="mailto:raksharakshitha02@gmail.com"><font color="#1D4ED8"><u>raksharakshitha02@gmail.com</u></font></a> &nbsp;|&nbsp; '
        '<a href="https://github.com/rakshapatil526"><font color="#1D4ED8"><u>GitHub</u></font></a> &nbsp;|&nbsp; '
        '<a href="https://www.linkedin.com/in/rakshitha-raksha"><font color="#1D4ED8"><u>LinkedIn</u></font></a>'
    )
    story.append(Paragraph(contact_text, contact_style))

    # Professional Summary
    story.extend(section_divider("Professional Summary"))
    story.append(Paragraph(
        "Computer Science and Engineering student focused on full-stack development and AI/ML, with hands-on project "
        "experience building web applications using React, Django, Python, and relational databases. Familiar with REST "
        "API development, authentication, database design, data analysis, machine learning workflows, and computer-vision "
        "tools. Interested in developing practical, user-focused software that combines reliable application engineering with "
        "useful AI capabilities.",
        body_style
    ))

    # Technical Skills
    story.extend(section_divider("Technical Skills"))
    skills_data = [
        [Paragraph("<b>Programming:</b>", body_style), Paragraph("Python, JavaScript, TypeScript, SQL", body_style)],
        [Paragraph("<b>Frontend:</b>", body_style), Paragraph("React.js, Vite, HTML5, CSS3, Tailwind CSS, Bootstrap", body_style)],
        [Paragraph("<b>Backend &amp; APIs:</b>", body_style), Paragraph("Django, Django REST Framework, RESTful APIs, JWT Authentication", body_style)],
        [Paragraph("<b>Databases:</b>", body_style), Paragraph("PostgreSQL, MySQL, MongoDB", body_style)],
        [Paragraph("<b>AI / ML &amp; Data:</b>", body_style), Paragraph("Machine Learning fundamentals, NLP, Computer Vision, NumPy, Pandas, Scikit-learn, OpenCV, MediaPipe", body_style)],
        [Paragraph("<b>Tools:</b>", body_style), Paragraph("Git, GitHub, VS Code, Postman, Jupyter Notebook", body_style)],
        [Paragraph("<b>Core Concepts:</b>", body_style), Paragraph("Data Structures &amp; Algorithms, OOP, DBMS, API Integration", body_style)],
    ]
    skills_table = Table(skills_data, colWidths=[105, 443])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 0.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    story.append(skills_table)

    # Professional Experience
    story.extend(section_divider("Professional Experience"))
    exp_header = Table([
        [Paragraph("<b>Artificial Intelligence Intern</b> — Pinnacle Labs", ParagraphStyle('ExpH', parent=body_style, fontName='Helvetica-Bold', fontSize=8.3)),
         Paragraph("<b>Aug 2025</b>", ParagraphStyle('ExpDate', parent=body_style, fontName='Helvetica-Bold', fontSize=8, alignment=2))]
    ], colWidths=[420, 128])
    exp_header.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 0.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    story.append(exp_header)
    story.append(Paragraph("• Completed a 4-week virtual internship covering core AI concepts and practical AI workflows.", bullet_style))
    story.append(Paragraph("• Worked on AI-related tasks and project activities, applying analytical thinking and problem-solving.", bullet_style))
    story.append(Paragraph("• Built familiarity with project-based development and translating concepts into practical solutions.", bullet_style))

    # Projects
    story.extend(section_divider("Projects"))
    
    # Project 1
    story.append(Paragraph("<b>1. JobConnect AI – Smart Job Recruitment &amp; Career Management Platform</b>", proj_title_style))
    story.append(Paragraph("• Developed a recruitment platform with separate workflows for job seekers, recruiters, and administrators, supporting job discovery, applications, hiring, and platform management.", bullet_style))
    story.append(Paragraph("• Implemented job search and application tracking, resume management and ATS analysis, recruiter job posting, candidate matching using TF-IDF and cosine similarity, and interview scheduling.", bullet_style))
    story.append(Paragraph("• Added role-based access, JWT authentication, AI-assisted resume and job-description tools, and PDF generation for resumes, application receipts, offer letters, and reports.", bullet_style))
    story.append(Paragraph("<b>Tech Stack:</b> React.js, Vite, Tailwind CSS, Python, Django REST Framework, SQLite/PostgreSQL, Scikit-learn, TF-IDF, JWT, ReportLab", tech_style))

    # Project 2
    story.append(Paragraph("<b>2. AI Quiz – AI-Based Study and Assessment Platform</b>", proj_title_style))
    story.append(Paragraph("• Built an AI-focused learning application that processes study documents and turns learning content into structured study resources such as summaries, key concepts, MCQs, flashcards, and quizzes.", bullet_style))
    story.append(Paragraph("• Designed a learning flow covering document text extraction, AI-generated learning material, quiz attempts, scoring, and performance insights to help learners identify weaker topics.", bullet_style))
    story.append(Paragraph("• Repository includes separate Django backend and React/Vite frontend areas, with dedicated AI engine, quiz, document, authentication, and ML analytics components.", bullet_style))
    story.append(Paragraph("<b>Tech Stack:</b> Python, Django, React.js, Vite, AI/ML components, Random Forest, K-means", tech_style))

    # Project 3
    story.append(Paragraph("<b>3. Fake News Detector – Machine Learning-Based News Classification</b>", proj_title_style))
    story.append(Paragraph("• Developed a machine learning application to analyze news text and classify articles as fake or real.", bullet_style))
    story.append(Paragraph("• Applied text preprocessing and NLP-based feature extraction to prepare news content for classification.", bullet_style))
    story.append(Paragraph("• Built a prediction workflow that accepts news text and returns a classification result to help users assess information credibility.", bullet_style))
    story.append(Paragraph("<b>Tech Stack:</b> Python, Machine Learning, NLP, Scikit-learn", tech_style))

    # Education
    story.extend(section_divider("Education"))
    edu_header = Table([
        [Paragraph("<b>B.E. – Computer Science and Engineering</b> | Jnana Vikas Institute of Technology, Bidadi, Bengaluru", ParagraphStyle('EduH', parent=body_style, fontName='Helvetica-Bold', fontSize=8.2)),
         Paragraph("<b>CGPA: 8.7/10</b>", ParagraphStyle('EduCGPA', parent=body_style, fontName='Helvetica-Bold', fontSize=8.2, alignment=2, textColor=c_blue))]
    ], colWidths=[440, 108])
    edu_header.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 0.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    story.append(edu_header)
    story.append(Paragraph("Oct 2023 – Jun 2027 (Expected) &nbsp;|&nbsp; <b>7th Semester</b>", ParagraphStyle('EduSub', parent=body_style, fontSize=7.6, textColor=c_muted)))
    story.append(Paragraph("<b>Relevant Coursework:</b> Data Structures &amp; Algorithms, OOP, DBMS, SQL, Python Programming, Web Development, Operating Systems", ParagraphStyle('EduCW', parent=body_style, fontSize=7.6, spaceBefore=1)))

    # Certifications & Achievements
    story.extend(section_divider("Certifications &amp; Achievements"))
    story.append(Paragraph("• <b>Artificial Intelligence Internship, Pinnacle Labs</b> – completed a 4-week virtual internship in Aug 2025.", bullet_style))
    story.append(Paragraph("• <b>24-Hour Intercollegiate Hackathon</b> – participated in an intercollegiate hackathon, strengthening rapid prototyping, teamwork, and technical problem-solving.", bullet_style))

    # Leadership & Soft Skills
    story.extend(section_divider("Leadership &amp; Soft Skills"))
    story.append(Paragraph("<b>Teamwork, Communication, Problem-Solving, Project Coordination, Time Management, Adaptability, Event Coordination</b> (Hackathon, Treasure Hunt, Photography, and Tech Charades; 100+ participants).", body_style))

    doc.build(story, canvasmaker=ResumeNumberedCanvas)
    print(f"Generated official resume: {output_path}")

if __name__ == "__main__":
    target_public = os.path.join(os.path.dirname(__file__), "..", "public", "documents", "Rakshitha_S_Resume.pdf")
    target_root = os.path.join(os.path.dirname(__file__), "..", "Rakshitha_S_Resume.pdf")
    generate_resume(target_public)
    generate_resume(target_root)
    print("Resume updated successfully in both locations.")
