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
            self.drawRightString(letter[0] - 54, letter[1] - 36, "Confidential Portfolio Specification")
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
    
    # Custom color palette
    c_primary = colors.HexColor("#0F172A")
    c_accent = colors.HexColor("#2563EB")
    c_muted = colors.HexColor("#475569")
    c_bg_box = colors.HexColor("#F8FAFC")
    c_border = colors.HexColor("#E2E8F0")
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=c_primary,
        spaceAfter=6
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=c_accent,
        spaceAfter=14
    )
    
    meta_style = ParagraphStyle(
        'DocMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=c_muted
    )
    
    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=c_primary,
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )
    
    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=c_accent,
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=c_primary,
        spaceAfter=6
    )
    
    code_style = ParagraphStyle(
        'Code_Custom',
        parent=styles['Code'],
        fontName='Courier',
        fontSize=7.5,
        leading=10.5,
        textColor=colors.HexColor("#1E293B"),
        backColor=colors.HexColor("#F1F5F9"),
        borderPadding=5,
        spaceAfter=8
    )
    
    callout_style = ParagraphStyle(
        'Callout_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#334155")
    )
    
    story = []
    
    # Header Banner
    story.append(Paragraph(project_data["title"], title_style))
    story.append(Paragraph(f"<b>System Architecture Specification & Technical Documentation</b> — Category: {project_data['category']}", subtitle_style))
    
    # Metadata Table
    meta_info = [
        [Paragraph(f"<b>Author:</b> Rakshitha S", meta_style), Paragraph(f"<b>Role:</b> Full-Stack Developer | AI/ML Enthusiast", meta_style)],
        [Paragraph(f"<b>Institution:</b> Jnana Vikas Institute of Tech", meta_style), Paragraph(f"<b>Repository:</b> {project_data.get('repo_status', 'Verified')}", meta_style)],
        [Paragraph(f"<b>Date:</b> March 2026", meta_style), Paragraph(f"<b>Doc ID:</b> SPEC-{project_data['slug'].upper()}-V1", meta_style)]
    ]
    meta_table = Table(meta_info, colWidths=[250, 254])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_bg_box),
        ('BOX', (0, 0), (-1, -1), 0.5, c_border),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=1, color=c_accent, spaceBefore=4, spaceAfter=10))
    
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
            for row in section["table"]["rows"]:
                t_row = [Paragraph(f"<b>{cell}</b>" if i == 0 and section["table"].get("has_header", True) and r_idx == 0 else str(cell), meta_style) 
                         for i, cell in enumerate(row)]
                t_data.append(t_row)
            
            t = Table(t_data, colWidths=section["table"].get("colWidths", None))
            t.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#0F172A")),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('GRID', (0, 0), (-1, -1), 0.5, c_border),
                ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_box]),
                ('TOPPADDING', (0, 0), (-1, -1), 4),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
                ('LEFTPADDING', (0, 0), (-1, -1), 6),
                ('RIGHTPADDING', (0, 0), (-1, -1), 6),
            ]))
            story.append(t)
            story.append(Spacer(1, 6))
            
        if "callout" in section:
            c_text = Paragraph(f"<b>Note:</b> {section['callout']}", callout_style)
            c_box = Table([[c_text]], colWidths=[504])
            c_box.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor("#EFF6FF")),
                ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#93C5FD")),
                ('TOPPADDING', (0, 0), (-1, -1), 6),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
                ('LEFTPADDING', (0, 0), (-1, -1), 10),
                ('RIGHTPADDING', (0, 0), (-1, -1), 10),
            ]))
            story.append(c_box)
            story.append(Spacer(1, 6))
            
        story.append(Spacer(1, 4))
        
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Generated: {filename}")

if __name__ == "__main__":
    print("PDF Builder Engine ready.")
