# 💼 JobConnect AI – Smart Job Recruitment & Career Management Platform

**JobConnect AI** is a complete, production-grade recruitment platform designed for candidates, recruiters, and platform administrators. Built with a **Django REST Framework** backend and a **React (Vite + Tailwind CSS)** frontend, JobConnect AI integrates machine learning TF-IDF matching, ATS resume scoring, ReportLab PDF generators, role-based access control (RBAC), and contextual AI assistants for each user role.

---

## 🌟 Key Features by User Role

### 👩‍💻 1. Job Seeker Module
- **Smart Dashboard**: Profile completion percentage widget, total applications, shortlisted count, interview schedule, saved jobs, recruiter profile views, and recommended AI job matches.
- **Profile Management**: Complete career history including education, work experience, technical skills with proficiency levels, certifications, and project portfolios.
- **Resume Builder & Manager**: Create, edit, and set primary resumes with instant PDF export.
- **AI Resume Analyzer**: Analyzes resumes for ATS compatibility, calculates overall resume score (0-100), extracts skills, identifies missing keywords, and provides formatting suggestions.
- **Job Search & AI Job Match**: Filter jobs by location, salary range, job type, and work mode. Automatically displays **AI Match % Badge** tailored to candidate skills.
- **Application Tracking**: Track application status (Applied → Under Review → Shortlisted → Interview Scheduled → Selected / Rejected), submit custom recruiter questions, and download official **Application Receipt PDFs**.
- **Candidate AI Assistant**: Context-aware AI assistant for interview prep, resume optimization, and cover letter generation.
- **Direct Messaging**: Communicate directly with recruiters regarding job applications.

---

### 🏢 2. Recruiter & Employer Module
- **Hiring Dashboard**: Pipeline overview including active job listings, total applicants, shortlisted count, interviews, and hired candidates.
- **Company Profile**: Manage company information, logo, website URL, headquarters, industry, and verification status.
- **Job Management**: Create and publish job openings with an integrated **AI Description Generator**, custom candidate questionnaire setup, and vacancy tracking.
- **AI Candidate Matching**: Evaluates applicant resumes against job descriptions using TF-IDF cosine similarity, ranking candidates by match percentage.
- **Interview Scheduling**: Schedule HR, Technical, Coding, Managerial, and Final interview rounds with virtual meeting links and instructions.
- **Automated Offer Letter Generator**: Create official offer letters and export downloadable **Offer Letter PDFs**.
- **Recruiter AI Assistant**: AI helper for writing job descriptions, building interview evaluation questions, and summarizing candidate profiles.

---

### 👨‍💼 3. Admin & Super Admin Module
- **Executive Governance Console**: System metrics overview including registered users, job seekers, recruiters, companies, active jobs, and flagged reports.
- **User Management**: Audit user accounts, change user roles, and activate or suspend accounts.
- **Company Verification Queue**: Approve or reject newly registered employer profiles.
- **Job Moderation**: Audit posted jobs, suppress fraudulent listings, and manage job approval queues.
- **Reports & Complaints**: Investigate user reports regarding fake jobs or inappropriate content.
- **Audit Logs**: Chronological log of administrative actions, user logins, and system events.
- **Executive Report Generator**: Export downloadable **Platform Executive Summary PDFs**.

---

## 🛠️ Technology Stack

- **Backend**: Python 3.13, Django 5.2, Django REST Framework, SimpleJWT (JWT Authentication), django-cors-headers, Scikit-learn (TF-IDF & Cosine Similarity), ReportLab (PDF Engine).
- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React Icons, Axios.
- **Database**: SQLite (default) / PostgreSQL compatible.

---

## 🚀 How to Run the Project

### Prerequisites
- **Python 3.10+**
- **Node.js v18+** & **npm**

---

### Step 1: Set Up & Run the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   - **Windows (PowerShell)**:
     ```powershell
     python -m venv venv
     .\venv\Scripts\activate
     ```
   - **Linux / macOS**:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply database migrations:
   ```bash
   python manage.py makemigrations api
   python manage.py migrate
   ```

5. Seed the database with demo accounts, jobs, resumes, applications, and interviews:
   ```bash
   python seed_data.py
   ```

6. Start the Django development server:
   ```bash
   python manage.py runserver 0.0.0.0:8000
   ```
   The backend API will run at `http://127.0.0.1:8000/api/`.

---

### Step 2: Set Up & Run the Frontend

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install Node packages:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000`.

---

## 🔑 Pre-Configured Demo Login Credentials

## 🧪 Demo Data

The project includes a seed script (`backend/seed_data.py`)
for generating sample users, jobs, resumes, and applications
for local development and testing.

Run the script only in a local development environment.

Demo accounts should use development-only passwords.
Never use default demo credentials in production.

---

## 📄 PDF Generation Engine

JobConnect AI includes ReportLab generators for:
1. **Resume PDF**: Export formatted candidate resume documents (`/api/pdf/resume/<id>/`).
2. **Offer Letter PDF**: Official employment contracts (`/api/pdf/offer/<id>/`).
3. **Application Receipt PDF**: Proof of application submission (`/api/pdf/receipt/<id>/`).
4. **Platform Summary PDF**: Executive platform summary for Admins (`/api/pdf/admin-report/`).

---

## 🤖 Role-Based AI Assistants

Click the **AI Assistant** button in the top navigation bar to open the floating AI assistant. The prompt suggestions automatically adapt to your role:
- **Job Seeker**: Resume optimizer, interview practice, cover letter generator.
- **Recruiter**: AI job description writer, interview questions generator, candidate summary.
- **Admin**: Fraud detection insights, platform growth summary.
