import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
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
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748B"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, letter[1] - 36, "Rakshitha S — Software Architecture & Technical Documentation")
            self.drawRightString(letter[0] - 54, letter[1] - 36, "Engineering Portfolio Specification")
            self.setStrokeColor(colors.HexColor("#CBD5E1"))
            self.setLineWidth(0.5)
            self.line(54, letter[1] - 42, letter[0] - 54, letter[1] - 42)
        
        # Footer
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawString(54, 30, "System Architecture Specification | Rakshitha S (rakshapatil526)")
        self.drawRightString(letter[0] - 54, 30, page_text)
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.5)
        self.line(54, 42, letter[0] - 54, 42)
        
        self.restoreState()

def build_pdf(filename, project_data):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )
    
    styles = getSampleStyleSheet()
    
    c_primary = colors.HexColor("#0F172A")
    c_accent = colors.HexColor("#2563EB")
    c_muted = colors.HexColor("#475569")
    c_bg_box = colors.HexColor("#F8FAFC")
    c_border = colors.HexColor("#E2E8F0")
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=c_primary,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=c_accent,
        spaceAfter=12
    )
    
    meta_style = ParagraphStyle(
        'DocMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=c_muted
    )
    
    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=c_primary,
        spaceBefore=12,
        spaceAfter=5,
        keepWithNext=True
    )
    
    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=c_accent,
        spaceBefore=7,
        spaceAfter=3,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=c_primary,
        spaceAfter=5
    )
    
    code_style = ParagraphStyle(
        'Code_Custom',
        parent=styles['Code'],
        fontName='Courier',
        fontSize=7,
        leading=9.5,
        textColor=colors.HexColor("#0F172A"),
        backColor=colors.HexColor("#F1F5F9"),
        borderPadding=5,
        spaceAfter=6
    )
    
    callout_style = ParagraphStyle(
        'Callout_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor("#334155")
    )
    
    story = []
    
    # Title & Subtitle
    story.append(Paragraph(project_data["title"], title_style))
    story.append(Paragraph(f"<b>System Architecture Specification & Technical Documentation</b> — Category: {project_data['category']}", subtitle_style))
    
    # Metadata Table
    repo_url_display = project_data.get('repo_url') or "Pending Repository Verification"
    meta_info = [
        [Paragraph(f"<b>Author:</b> Rakshitha S (Full-Stack & AI/ML)", meta_style), Paragraph(f"<b>Status:</b> {project_data.get('status', 'Verified')}", meta_style)],
        [Paragraph(f"<b>Institution:</b> Jnana Vikas Inst of Tech, Bengaluru", meta_style), Paragraph(f"<b>Doc ID:</b> SPEC-{project_data['slug'].upper()}", meta_style)],
        [Paragraph(f"<b>Repository:</b> {repo_url_display}", meta_style), Paragraph(f"<b>Date:</b> March 2026", meta_style)]
    ]
    meta_table = Table(meta_info, colWidths=[250, 254])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_bg_box),
        ('BOX', (0, 0), (-1, -1), 0.5, c_border),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1, color=c_accent, spaceBefore=2, spaceAfter=8))
    
    # Render sections
    for section in project_data["sections"]:
        story.append(Paragraph(section["title"], h1_style))
        
        if "content" in section and section["content"]:
            for p in section["content"]:
                story.append(Paragraph(p, body_style))
        
        if "subsections" in section:
            for sub in section["subsections"]:
                story.append(Paragraph(sub["title"], h2_style))
                for sp in sub["content"]:
                    story.append(Paragraph(sp, body_style))
        
        if "code" in section:
            story.append(Paragraph(section["code"].replace(" ", "&nbsp;").replace("\n", "<br/>"), code_style))
            
        if "table" in section:
            t_data = []
            for r_idx, row in enumerate(section["table"]["rows"]):
                t_row = [Paragraph(f"<b>{cell}</b>" if r_idx == 0 and section["table"].get("has_header", True) else str(cell), meta_style) 
                         for cell in row]
                t_data.append(t_row)
            
            t = Table(t_data, colWidths=section["table"].get("colWidths", None))
            t.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#0F172A")),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('GRID', (0, 0), (-1, -1), 0.5, c_border),
                ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_box]),
                ('TOPPADDING', (0, 0), (-1, -1), 3),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
                ('LEFTPADDING', (0, 0), (-1, -1), 5),
                ('RIGHTPADDING', (0, 0), (-1, -1), 5),
            ]))
            story.append(t)
            story.append(Spacer(1, 5))
            
        if "callout" in section:
            c_text = Paragraph(f"<b>Architecture Note:</b> {section['callout']}", callout_style)
            c_box = Table([[c_text]], colWidths=[504])
            c_box.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor("#EFF6FF")),
                ('BOX', (0, 0), (-1, -1), 0.75, colors.HexColor("#93C5FD")),
                ('TOPPADDING', (0, 0), (-1, -1), 5),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
                ('LEFTPADDING', (0, 0), (-1, -1), 8),
                ('RIGHTPADDING', (0, 0), (-1, -1), 8),
            ]))
            story.append(c_box)
            story.append(Spacer(1, 5))
            
        story.append(Spacer(1, 3))
        
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Generated PDF: {filename}")
