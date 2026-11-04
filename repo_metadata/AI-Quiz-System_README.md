# SmartLearn AI — Intelligent Study Material Analysis and Automatic Quiz Generation Platform

**SmartLearn AI** is a modern, full-stack educational platform powered by Artificial Intelligence and Machine Learning. The platform enables students to upload their own study materials (textbooks, classroom notes, assignments, presentation slides, and handwritten scans) and automatically transforms them into structured study notes, multi-perspective summaries, important definitions, formulas, interactive flashcards, RAG-grounded study chatbots, and dynamic quizzes.

Every question, summary, definition, and explanation is generated dynamically from the student's uploaded material without depending on predefined question banks or static study packs.

---

## Key Platform Features

### 1. Document Extraction & OCR Engine
- **PyMuPDF (`fitz`)**: Extracts text, page numbers, and structural layouts from PDF documents.
- **Automatic Scanned Page Detection**: Detects pages with low selectable text density (<35 chars), renders high-resolution pixmaps, and executes **Tesseract OCR** via `pytesseract` and PIL.
- **python-docx & python-pptx**: Native extraction of Word documents (.docx) and PowerPoint presentation slides (.pptx), preserving headers, tables, and speaker notes.
- **Plain Text (.txt)**: Multi-encoding fallbacks (`utf-8`, `latin-1`, `cp1252`).
- **Semantic Text Chunking**: Automatically segments extracted text into overlapping semantic passages tagged with exact source page numbers and section headers for RAG retrieval.

### 2. AI Content Understanding & NLP Module
- Tokenization, stop-word elimination, n-gram extraction, and TF-IDF keyword extraction.
- **Definition Identification Engine**: Linguistic pattern matching to extract definitions, terms, and conceptual roles.
- **Formulas & Facts Extractor**: Automatically captures equations, algorithmic time complexity expressions (e.g. $O(m \cdot n^2)$), and core principles.
- **Automatic Subject & Chapter Detection**: Classifies content across subjects including Python, Java, C++, DBMS, SQL, Operating Systems, Computer Networks, AI/ML, Mathematics, and Academic Studies.

### 3. AI Summary Generation Module
- **Detailed Comprehensive Summary**: Structured into academic sections (Overview, Mechanisms, Analysis, Conclusion).
- **Executive Short Summary**: High-impact bulleted summary for quick revision.
- **Beginner-Friendly Explanation**: Plain-English, analogy-driven explanations.
- **🎯 High-Yield Exam Summary**: Concentrated revision notes highlighting critical exam questions, facts, and definitions.
- **Voice Read Aloud (TTS)**: Built-in text-to-speech engine to listen to summaries.
- **PDF Export**: Generates printable PDF study guides styled using ReportLab.

### 4. Grounded Dynamic Quiz Generation Engine
- **No Predefined Question Banks**: All questions and distractors are constructed directly from uploaded content passages.
- **Diverse Question Formats**:
  1. Multiple Choice Questions (MCQs with 4 options: 1 correct + 3 plausible distractors)
  2. True or False Questions (with nuanced factual justification)
  3. Fill in the Blank Questions (with key terms removed and context hints)
  4. Short Answer Questions (with expected grading criteria and model answers)
  5. Assertion & Reason Questions (testing causal logical connections)
- **4 Difficulty Tiers**:
  - `Easy`: Fundamental definitions and core knowledge
  - `Medium`: Conceptual understanding and relationships
  - `Hard`: Analytical application and deductive reasoning
  - `Expert`: Complex synthesis and problem solving
- **Explanation & Grounding**: Every question provides a detailed breakdown of why the correct option is right, distractor analysis, and source page citations.

### 5. Interactive Quiz Practice & Evaluation Arena
- Live countdown timer with warning alerts and auto-submission.
- Interactive question navigation palette (Answered, Marked for Review, Unanswered).
- Mark-for-review functionality.
- Immediate scoring upon submission: percentage, accuracy, question-by-question review, and celebratory confetti animations.

### 6. Genuine Machine Learning Student Analytics (Scikit-Learn)
- **Predictive Performance Model (`RandomForestClassifier`)**:
  - Input Features: `topic_accuracy`, `overall_accuracy`, `difficulty_num`, `time_spent_ratio`, `question_type_code`, `attempt_number`, `study_materials_count`.
  - Target: Binary correctness prediction ($0$ or $1$).
  - Evaluated on test splits: Accuracy ($72\%$), Precision ($75\%$), Recall ($89\%$), F1-Score ($0.816$), and full Confusion Matrix.
  - Model persisted using `joblib`.
- **K-Means Clustering of Learning Personas**:
  - Automatically classifies students into learning clusters: *Analytical Master*, *Speedy Skimmer*, *Deep Contemplator*, and *Foundational Explorer*.
- **Adaptive Recommendation Engine**:
  - Continuously monitors topic accuracy.
  - Automatically generates actionable revision cards when topic accuracy dips below $60\%$ or when predicted success is low.

### 7. RAG-Based Document Study Chatbot
- Semantic vector similarity engine built on TF-IDF / Cosine Similarity and FAISS indexing.
- Students can ask any question about the uploaded document and receive immediate, grounded answers with exact page citations and section references.

### 8. Administrator Dashboard Portal
- Comprehensive platform oversight: total enrolled students, total uploaded materials, total quizzes, total attempts.
- Document processing health monitor (analyzed, extracting, pending, failed).
- Student account security manager (view accuracy, quizzes attempted, active/suspended status).
- AI & ML model diagnostic panel.

---

## Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, Vite, Tailwind CSS v4, Lucide React Icons, Canvas Confetti, Axios |
| **Backend** | Python 3.13, Django 5.1, Django REST Framework, SimpleJWT Authentication, CORS Headers |
| **Machine Learning** | Scikit-learn (`RandomForestClassifier`, `LogisticRegression`, `DecisionTreeClassifier`, `KMeans`), Joblib, NumPy, Pandas |
| **NLP & RAG** | NLTK (Punkt, Stopwords), TF-IDF Semantic Embeddings, FAISS Vector Search, Cosine Similarity |
| **Document Processing** | PyMuPDF (`fitz`), `python-docx`, `python-pptx`, `pytesseract` OCR, Pillow (`PIL`), ReportLab |
| **Database** | SQLite3 (Zero-setup default) / PostgreSQL with `psycopg2-binary` |

---

## Project Structure

```
quize/
├── backend/
│   ├── smartlearn/             # Django root configuration (settings, urls, wsgi)
│   ├── authentication/         # Student profiles, JWT authentication, user management
│   ├── documents/              # File uploads, PyMuPDF, python-docx, PPTX & Tesseract OCR
│   ├── ai_engine/              # NLP processing, multi-perspective summaries, RAG chatbot, flashcards
│   ├── quizzes/                # Dynamic quiz generator, interactive quiz arena, scoring engine
│   ├── ml_analytics/           # Scikit-learn ML models, KMeans clustering, recommendations
│   ├── admin_panel/            # Administrator platform analytics & student oversight
│   ├── seed_data.py            # Initial database seeder
│   └── test_api_suite.py       # Automated 11-step verification suite
├── frontend/
│   ├── src/
│   │   ├── api/client.js       # Axios client with JWT interceptors
│   │   ├── context/AuthContext # Authentication and user state
│   │   ├── components/         # Navbar, AuthModal, UploadModal, ProfileModal
│   │   └── views/              # Dashboard, DocumentsView, StudyHub, QuizHub, QuizArena, QuizResult, Analytics, AdminPortal
│   ├── package.json
│   └── vite.config.js
├── start_backend.bat           # One-click backend launcher
├── start_frontend.bat          # One-click frontend launcher
├── start_all.bat               # One-click full-stack launcher
└── README.md
```

---

## Quick Start Guide

### Prerequisites
- Python 3.10+ (Python 3.13 tested)
- Node.js 18+ (Node v26 tested) and npm

### 1. Launching Full Application
Double-click `start_all.bat` or run:
```bash
# Terminal 1: Backend
cd backend
python manage.py runserver 127.0.0.1:8000

# Terminal 2: Frontend
cd frontend
npm run dev
```

Open your browser at **`http://localhost:5173`**.

---

## Default Demo Accounts

| Role | Username | Password | Notes |
|---|---|---|---|
| **Student** | `alex_student` | `student123` | Pre-seeded with Operating Systems notes, quizzes, and ML stats |
| **Administrator** | `admin` | `admin123` | Full access to Admin Portal, student accounts, and ML metrics |

*(You can also click the quick one-click demo buttons on the Sign In modal to log in instantly)*

---

## Verification & Automated Test Suite

A complete test suite is included in `backend/test_api_suite.py` that verifies all 11 core subsystems:
```bash
cd backend
python test_api_suite.py
```

### Verified Subsystems:
1. Student Authentication & JWT token issuance
2. Document extraction and metadata persistence
3. AI Summaries generation (Detailed, Short, Beginner, Exam-Oriented)
4. Key points, formulas, and definitions extraction
5. Active recall flashcards & mastery toggling
6. RAG Document Q&A Chatbot with citations
7. Dynamic AI Quiz generation (MCQ, True/False, Fill-in-the-blank, Short Answer, Assertion-Reason)
8. Quiz evaluation, score calculation, and answer explanation verification
9. Machine Learning topic mastery and success probability predictions
10. Personalized adaptive recommendations generation
11. Administrator platform metrics and user management

---

## API Endpoints Reference

### Authentication
- `POST /api/auth/register/` — Register student account with academic profile
- `POST /api/auth/login/` — JWT token generation with profile details
- `POST /api/auth/token/refresh/` — Refresh access token
- `GET/PATCH /api/auth/profile/` — View and edit student academic details

### Documents
- `GET /api/documents/` — List uploaded study materials
- `POST /api/documents/` — Upload PDF/DOCX/PPTX/TXT/Images (triggers extraction & AI pipeline)
- `GET/DELETE /api/documents/<id>/` — Get or delete study material
- `POST /api/documents/<id>/reprocess/` — Re-run AI extraction and analysis
- `GET /api/documents/<id>/chunks/` — Retrieve RAG semantic chunks

### AI Study Engine
- `GET /api/ai/documents/<id>/summaries/` — Get generated summaries by type
- `GET /api/ai/documents/<id>/key-points/` — Get key definitions, formulas, comparisons
- `GET/PATCH /api/ai/documents/<id>/flashcards/` — Get and toggle flashcard mastery
- `GET /api/ai/documents/<id>/chat/` — Get RAG chat history
- `POST /api/ai/documents/<id>/chat/` — Ask question about document (returns citations)
- `GET /api/ai/documents/<id>/summaries/<summary_id>/pdf/` — Download summary as PDF

### Quizzes
- `POST /api/quizzes/generate/` — Dynamically generate AI quiz from material
- `GET /api/quizzes/` — List quizzes
- `GET /api/quizzes/<id>/` — Get quiz details with questions
- `POST /api/quizzes/<id>/submit/` — Submit quiz attempt, auto-grade, update ML stats
- `GET /api/quizzes/history/` — List past quiz attempts

### ML Analytics & Recommendations
- `GET /api/analytics/dashboard/` — Student analytics, topic mastery, and ML predictions
- `GET /api/analytics/recommendations/` — Active personalized recommendations
- `PATCH /api/analytics/recommendations/<id>/` — Mark recommendation complete
- `GET /api/analytics/model-metrics/` — View ML validation accuracy, F1, confusion matrix
- `POST /api/analytics/model-metrics/` — Trigger Scikit-learn model retraining

### Admin Portal
- `GET /api/admin-portal/analytics/` — Platform-wide metrics and processing health
- `GET /api/admin-portal/users/` — Student account roster
- `PATCH /api/admin-portal/users/<id>/` — Toggle active/suspended student access
