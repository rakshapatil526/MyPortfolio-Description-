import os
import sys
from pdf_builder import build_pdf

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "documents", "architecture")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# -------------------------------------------------------------
# 1. JobConnect AI
# -------------------------------------------------------------
jobconnect_ai = {
    "title": "JobConnect AI — Smart Job Recruitment & Career Platform",
    "slug": "jobconnect-ai",
    "category": "Full Stack & Applied AI",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/JobConnect-AI-Job-Portal",
    "sections": [
        {
            "title": "1. Executive Summary & Problem Statement",
            "content": [
                "Modern recruitment systems suffer from fragmented communications, manual resume screening bottlenecks, and lack of objective candidate-job matching. JobConnect AI addresses these challenges by delivering an integrated, enterprise-ready recruitment management platform serving three distinct user personas: Job Seekers, Recruiters/Employers, and Platform Administrators.",
                "The platform unifies job discovery, resume creation, ATS scoring, candidate algorithmic ranking using TF-IDF cosine similarity, interview scheduling across 5 rounds, and downloadable PDF document generation."
            ]
        },
        {
            "title": "2. Objectives & Scope",
            "content": [
                "• Enable job seekers to create professional profiles, analyze resume ATS compatibility (0-100 score), and receive AI match percentages for active job postings.",
                "• Provide recruiters with complete hiring pipelines, automated candidate scoring against job descriptions, and one-click offer letter generation.",
                "• Equip administrators with governance consoles, company verification workflows, job listing moderation, and platform activity audit logs."
            ]
        },
        {
            "title": "3. Technology Stack",
            "table": {
                "has_header": True,
                "colWidths": [120, 150, 234],
                "rows": [
                    ["Layer", "Technology", "Architectural Role"],
                    ["Frontend", "React 18, Vite, Tailwind CSS", "SPA client with role-based dashboard rendering & Axios interceptors"],
                    ["Backend API", "Python 3.13, Django 5.2, DRF", "RESTful API engine, SimpleJWT auth, role-based permission classes"],
                    ["AI / ML Engine", "Scikit-learn, TF-IDF, NumPy", "Vectorization of resumes and job descriptions with cosine similarity"],
                    ["Document Engine", "ReportLab 5.x", "Programmatic rendering of ATS resumes, receipts, and offer letters"],
                    ["Database", "PostgreSQL / SQLite", "Relational persistence with foreign-key integrity across users and jobs"],
                    ["Security", "SimpleJWT, django-cors-headers", "Bearer token authorization, CSRF protection, PBKDF2 hashing"]
                ]
            }
        },
        {
            "title": "4. System Architecture & Data Flow (DFD Level 0 & 1)",
            "code": """[Client: React SPA] ──(HTTPS/REST + JWT Bearer)──> [Django REST Framework]
       │                                                         │
       ├── State Management (Axios + Context)                    ├── SimpleJWT Auth Filter
       └── Dynamic Role Dashboards (Seeker / Recruiter / Admin)  ├── Business Logic Controllers
                                                                 │   ├── Resume Analyzer
                                                                 │   ├── TF-IDF Match Engine
                                                                 │   └── ReportLab PDF Generator
                                                                 ├── Django ORM
                                                                 └── [PostgreSQL / SQLite Database]"""
        },
        {
            "title": "5. Core Database Schema & Relational Models",
            "table": {
                "has_header": True,
                "colWidths": [120, 100, 284],
                "rows": [
                    ["Table Name", "Primary Key", "Core Fields & Relational Foreign Keys"],
                    ["users_customuser", "id (BigAuto)", "email (unique), role (seeker/recruiter/admin), is_verified, date_joined"],
                    ["recruiter_company", "id (BigAuto)", "user_id (FK: users), company_name, website, industry, verification_status"],
                    ["jobs_joblisting", "id (BigAuto)", "recruiter_id (FK: users), title, description, skills_required, salary, status"],
                    ["resumes_resume", "id (BigAuto)", "user_id (FK: users), file_url, parsed_skills, experience_years, ats_score"],
                    ["applications_application", "id (BigAuto)", "job_id (FK: jobs), seeker_id (FK: users), match_score, status, stage"],
                    ["interviews_schedule", "id (BigAuto)", "application_id (FK: applications), round_type, scheduled_at, meeting_link"]
                ]
            }
        },
        {
            "title": "6. API Endpoints Architecture",
            "content": [
                "• <b>POST /api/auth/register/ & /api/auth/token/</b>: User account creation and JWT token issuance.",
                "• <b>GET /api/jobs/ & POST /api/jobs/create/</b>: Job search with filtering by work mode, location, and recruiter posting.",
                "• <b>POST /api/resumes/analyze/</b>: Submits candidate resume for instant ATS lexical scoring and missing keyword analysis.",
                "• <b>POST /api/applications/match/</b>: Computes TF-IDF cosine similarity between applicant resume tokens and job requirement vectors.",
                "• <b>GET /api/documents/offer-letter/:id/pdf/</b>: Streams server-generated ReportLab PDF offer letter document."
            ]
        },
        {
            "title": "7. Security, Testing & Limitations",
            "callout": "Role-based access control (RBAC) ensures job seekers cannot inspect competitor applications, and recruiters can only manage postings associated with their verified organization.",
            "content": [
                "• <b>Security:</b> Tokens stored in client-side secure memory/storage; DRF permissions enforce `IsAuthenticated` and custom role classes.",
                "• <b>Testing:</b> Unit tests for TF-IDF tokenization sanity and API response status codes; database seeding script verified.",
                "• <b>Limitations:</b> Currently relies on local/standard SQLite for development with production switchable to PostgreSQL via environment variables; third-party email notifications require external SMTP gateway configuration."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 2. SmartCare HMS
# -------------------------------------------------------------
smartcare_hms = {
    "title": "SmartCare HMS — Integrated Enterprise Hospital Management",
    "slug": "smartcare-hms",
    "category": "Enterprise Full Stack Healthcare",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Smart-HMS-Integreted-enterprise-Hospital-Manegment-System-and-digitalcare-Administrate",
    "sections": [
        {
            "title": "1. Executive Summary & Clinical Domain Overview",
            "content": [
                "SmartCare HMS is a clinical-grade Hospital Management System engineered to automate end-to-end healthcare operations across outpatient (OPD) and inpatient (IPD) departments. Supporting 16 distinct role workflows, the system bridges clinical charting, electronic health records (EHR), diagnostic laboratory (LIS), radiology (RIS), pharmacy inventory, surgical operating theaters (OT), and billing.",
                "The platform incorporates clinical decision support (CDS) heuristics, a voice-enabled assistant, and an integrated medical knowledge RAG chatbot to reduce physician burnout and administrative latency."
            ]
        },
        {
            "title": "2. Supported User Roles & Modular Architecture",
            "table": {
                "has_header": True,
                "colWidths": [130, 140, 234],
                "rows": [
                    ["Role Category", "Role Identities", "Primary Operational Responsibilities"],
                    ["Clinical Care", "Doctor, Nurse, OT Staff", "OPD consultations, EHR charting, MAR vitals logging, surgical checklists"],
                    ["Diagnostics", "Lab Tech, Radiologist", "LIS sample collection, test verification, DICOM imaging review, PDF reports"],
                    ["Operations", "Reception, Pharmacy, Inventory", "Token queue, patient registration, IPD bed allocations, drug dispensing"],
                    ["Administration", "Admin, HR, Billing, Insurance", "User auditing, multi-department invoicing, cashless TPA claims, fleet tracking"],
                    ["Emergency", "Ambulance Driver, Operator", "Real-time dispatch, GPS telemetry, triage priority notifications"]
                ]
            }
        },
        {
            "title": "3. Technology Stack & Specifications",
            "table": {
                "has_header": True,
                "colWidths": [120, 150, 234],
                "rows": [
                    ["Subsystem", "Technology", "Function in Platform"],
                    ["Frontend Client", "React 18, TypeScript, Tailwind", "Type-safe reactive dashboard, role navigation, responsive data grids"],
                    ["Backend Framework", "Python 3, Django REST Framework", "Modular Django apps: clinical, diagnostics, billing, auth, inventory"],
                    ["Database Layer", "PostgreSQL / SQLite", "Relational health records, foreign keys, timestamps, audit histories"],
                    ["Authentication", "SimpleJWT + Google OAuth", "Multi-role JWT bearer tokens, demo quick-fill presets, password hashing"],
                    ["Document Engine", "ReportLab / Canvas PDF", "Diagnostic lab results, invoice receipts, clinical discharge summaries"]
                ]
            }
        },
        {
            "title": "4. Clinical Workflow & Data Flow Diagram (DFD Level 1)",
            "code": """[Patient] ──> [Reception: Registration & Token] ──> [OPD Doctor: Consultation & EHR]
                                                        │
                      ┌─────────────────────────────────┴──────────────────────────────┐
                      ▼                                 ▼                              ▼
             [LIS: Lab Orders]                 [RIS: Radiology Scan]           [Pharmacy: Rx Queue]
                      │                                 │                              │
                      └─────────────────┬───────────────┘                              │
                                        ▼                                              ▼
                         [Doctor: Review & AI CDS Guidance]                [Dispense & Auto-Deduct Stock]
                                        │                                              │
                                        └───────────────────────┬──────────────────────┘
                                                                ▼
                                                 [Billing & Insurance Pre-Auth]
                                                                ▼
                                                [Discharge Summary & Receipt PDF]"""
        },
        {
            "title": "5. Database Relational Architecture",
            "content": [
                "• <b>accounts_user:</b> Extended user model with role-based choices, department assignments, contact data, and active credentials.",
                "• <b>patients_patient:</b> Medical record number (MRN), date of birth, blood group, allergies, chronic conditions, and emergency contact.",
                "• <b>clinical_appointment:</b> Doctor reference, patient reference, appointment slot, token number, triage priority, and visit status.",
                "• <b>diagnostics_laborder:</b> Test type, sample collection timestamp, technician notes, verified values, reference ranges, and report PDF path.",
                "• <b>billing_invoice:</b> Aggregate charges across consultations, bed days, pharmacy items, laboratory tests, and insurance coverage deduction."
            ]
        },
        {
            "title": "6. Security, Compliance & Future Roadmap",
            "callout": "Data isolation is enforced at the API layer: patients cannot view peer records; medical staff access is scoped to assigned wards and appointments.",
            "content": [
                "• <b>Security:</b> Strict RBAC permission classes (`IsDoctor`, `IsReceptionist`, `IsLabTech`); PBKDF2 credential hashing; audit trails on EHR updates.",
                "• <b>Testing:</b> Seed script verifies 16 pre-configured demo user accounts (`Password@123`) across all medical departments.",
                "• <b>Future Scope:</b> FHIR standard interoperability, HL7 message integration, and real-time WebRTC teleconsultation streaming."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 3. Restaurant Management System (SwiftBite)
# -------------------------------------------------------------
restaurant_mgmt = {
    "title": "Restaurant Management System (SwiftBite)",
    "slug": "restaurant-management",
    "category": "Full Stack E-Commerce & Hospitality",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Restaurant-Management-System",
    "sections": [
        {
            "title": "1. Executive Summary & Problem Statement",
            "content": [
                "SwiftBite is a full-stack food delivery and restaurant operations platform engineered with React.js and Django REST Framework. The application provides an intuitive consumer-facing food discovery and checkout experience coupled with a comprehensive administrative back-office for real-time menu management, category classification, and order tracking.",
                "The system solves common restaurant operational challenges including out-of-sync menus, manual order logging, and lack of real-time sales visibility."
            ]
        },
        {
            "title": "2. Core System Features & Modules",
            "content": [
                "• <b>Authentication Module:</b> Customer signup, JWT-secured authentication, password visibility toggles, and one-click demo login presets.",
                "• <b>Interactive Menu Catalog:</b> Categorized navigation (Pizza, Burgers, Biryani, Chinese, Desserts, Drinks) with Veg/Non-Veg indicators.",
                "• <b>Cart & Checkout Pipeline:</b> Interactive item steppers, subtotal calculation, delivery charges, Cash on Delivery (COD) and Online payment mock options.",
                "• <b>Admin Kitchen Operations:</b> Real-time order state machine (Placed → Preparing → Out for Delivery → Delivered) and menu CRUD console."
            ]
        },
        {
            "title": "3. Technology Stack",
            "table": {
                "has_header": True,
                "colWidths": [120, 150, 234],
                "rows": [
                    ["Tier", "Technology", "Implementation Purpose"],
                    ["Frontend UI", "React 18, Vite, Tailwind CSS", "Component-driven user interface with responsive product grids and cart drawers"],
                    ["Backend API", "Django 5, DRF, Python 3", "RESTful endpoints for catalog filtering, cart persistence, and order placement"],
                    ["Database", "PostgreSQL / SQLite", "Relational storage for categories, menu items, orders, and order items"],
                    ["State & Network", "Axios, Context API", "Persistent cart management, auth token interceptors, dynamic error handling"]
                ]
            }
        },
        {
            "title": "4. Database Architecture & Relationships",
            "table": {
                "has_header": True,
                "colWidths": [110, 110, 284],
                "rows": [
                    ["Model", "Primary Key", "Key Attributes & Relationships"],
                    ["Category", "id (AutoField)", "name (unique), slug, image_url, is_active"],
                    ["Product", "id (AutoField)", "category_id (FK: Category), name, price, prep_time, is_veg, rating, image"],
                    ["Order", "id (AutoField)", "user_id (FK: User), order_number, total_amount, payment_mode, order_status"],
                    ["OrderItem", "id (AutoField)", "order_id (FK: Order), product_id (FK: Product), quantity, unit_price"]
                ]
            }
        },
        {
            "title": "5. API Architecture & Limitations",
            "content": [
                "• <b>Endpoints:</b> `/api/products/`, `/api/products/?category={id}`, `/api/orders/`, `/api/orders/{id}/status/`, `/api/auth/token/`.",
                "• <b>Security:</b> JWT token authentication; order placement scoped to active user credentials.",
                "• <b>Limitations & Roadmap:</b> Integrated payment gateway uses simulated confirmation callback; future enhancements include WebSocket order status push notifications."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 4. Library Management System (LiberSys)
# -------------------------------------------------------------
library_mgmt = {
    "title": "Library Management System (LiberSys)",
    "slug": "library-management",
    "category": "Enterprise Full Stack Information Systems",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Library-Management-System",
    "sections": [
        {
            "title": "1. Executive Summary & Problem Statement",
            "content": [
                "LiberSys is a full-stack academic library information system built with React, Django REST Framework, and PostgreSQL. It streamlines the lifecycle of bibliographic assets and student borrowing operations, eliminating physical ledger errors, inventory discrepancies, and overdue tracking overhead.",
                "The system enforces strict book availability tracking, student borrowing limits, and automated overdue penalty calculations."
            ]
        },
        {
            "title": "2. Database Design & Relational Tables",
            "table": {
                "has_header": True,
                "colWidths": [110, 110, 284],
                "rows": [
                    ["Table", "Primary Key", "Schema Specifications"],
                    ["books", "book_id (AutoField)", "title (varchar 255), author, ISBN (unique), category, quantity, available_quantity"],
                    ["students", "student_id (CharField)", "name, email (unique), phone, department, enrollment_date"],
                    ["borrow_records", "record_id (AutoField)", "student_id (FK: students), book_id (FK: books), issue_date, due_date, return_date, status"]
                ]
            }
        },
        {
            "title": "3. Business Rules & Transaction Workflow",
            "code": """[Borrow Request] ──> [Check Student Active Records (< Limit)]
                          │
                          ▼ (Eligible)
                    [Check Book available_quantity > 0]
                          │
                          ▼ (In Stock)
                    [Atomic DB Transaction:
                       1. Create borrow_record (status='ISSUED', due_date = today + 14 days)
                       2. Decrement available_quantity by 1]
                          │
                          ▼
                    [Return Request:
                       1. Set return_date = today
                       2. Calculate Overdue Fine if return_date > due_date
                       3. Increment available_quantity by 1
                       4. Set status='RETURNED']"""
        },
        {
            "title": "4. Technology Stack & Verification Status",
            "content": [
                "• <b>Frontend:</b> React 18, Vite, Tailwind CSS, Lucide React Icons.",
                "• <b>Backend:</b> Python 3.13, Django 5.2, Django REST Framework, django-cors-headers.",
                "• <b>Database:</b> PostgreSQL with automatic local SQLite development fallback.",
                "• <b>Status:</b> Fully verified from repository source code and database migration schemas."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 5. Student Management System (Attenda)
# -------------------------------------------------------------
student_mgmt = {
    "title": "Student Management System (Attenda)",
    "slug": "student-management",
    "category": "Full Stack Academic Administration",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Student-Management-System",
    "sections": [
        {
            "title": "1. Overview & System Purpose",
            "content": [
                "Attenda is an institutional Student Management System designed for academic colleges and universities. Built with Python Django, HTML5/CSS3/JavaScript, and SQLite, it allows department heads and administrative staff to manage enrollments, track CGPA academic performance metrics, manage departments and degree courses, and generate official student records."
            ]
        },
        {
            "title": "2. Core Administrative Modules",
            "content": [
                "• <b>Executive Dashboard:</b> Live metric counters (Total Students, Academic Departments, Degree Courses, Institutional Average CGPA) and Chart.js distribution charts.",
                "• <b>Enrollment Workflow:</b> Multi-section student registration with cascading dynamic dropdowns for departments and courses, and client-side photo previews.",
                "• <b>Directory & Filtering:</b> Paginated data grid with multi-criteria search (Name, Roll Number, Department) and one-click CSV export.",
                "• <b>Student Academic Profile:</b> Detailed scorecard view displaying semester-wise performance tier (Distinction, First Class, Second Class, Remedial)."
            ]
        },
        {
            "title": "3. Architecture & Data Integrity",
            "content": [
                "• <b>Backend:</b> Django Class-Based Views (CBVs), Django ORM queries with prefetch optimizations, and server-side form validations.",
                "• <b>Database:</b> Relational tables for Departments, Courses, Students, and Semester Records with foreign-key cascades.",
                "• <b>Distinction Note:</b> This project is a full-stack academic record management system. It is distinct from the machine learning Student Performance Prediction model."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 6. Event Management System
# -------------------------------------------------------------
event_mgmt = {
    "title": "Event Management System",
    "slug": "event-management",
    "category": "Full Stack Application Architecture",
    "status": "Pending Repository Verification",
    "repo_url": None,
    "sections": [
        {
            "title": "1. Proposed Architecture & System Overview",
            "content": [
                "The Event Management System is a proposed full-stack solution designed to streamline the lifecycle of corporate, academic, and cultural events. It encompasses event publishing, attendee ticketing and registration, speaker scheduling, venue capacity allocations, and digital check-ins.",
                "Architectural specifications are defined in anticipation of repository synchronization."
            ]
        },
        {
            "title": "2. Architectural Modules & Specifications",
            "content": [
                "• <b>Event Catalog & Discovery:</b> Categorized listings (Tech Conferences, Workshops, Cultural Festivities) with dates and venues.",
                "• <b>Registration & RSVP Engine:</b> Attendee ticketing pipeline with automated confirmation emails and QR check-in badges.",
                "• <b>Organizer Console:</b> Capacity monitoring, ticket sales tracking, and speaker session time slots.",
                "• <b>Planned Tech Stack:</b> React.js frontend, Python Django REST Framework backend, PostgreSQL relational database."
            ]
        },
        {
            "title": "3. Verification & Documentation Status",
            "callout": "Repository URL is currently pending upload/verification. Core technical modules and database schemas are defined per architectural blueprints and will be synchronized upon repository release.",
            "content": [
                "• <b>Database Schema:</b> Tables for Events, Venues, Attendees, TicketTiers, and CheckInLogs are designed and ready for deployment.",
                "• <b>API Architecture:</b> Standard REST endpoints mapped for `/api/events/`, `/api/tickets/`, and `/api/registrations/`."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 7. TaskFlow — To-Do List & Project Management
# -------------------------------------------------------------
taskflow = {
    "title": "TaskFlow — Modern Full-Stack Task Management",
    "slug": "taskflow",
    "category": "Full Stack Productivity & Workflow",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/TaskFlow-To-Do-List-",
    "sections": [
        {
            "title": "1. Executive Summary & Problem Statement",
            "content": [
                "TaskFlow is a production-grade personal task and project management web application built with React, Django REST Framework, and PostgreSQL/SQLite. It provides individual developers and teams with structured workflow organization, due date alerts, priority rankings, and completion telemetry.",
                "The system enforces strict user-level data isolation, ensuring users only access their personal project boards."
            ]
        },
        {
            "title": "2. System Features & Modules",
            "content": [
                "• <b>Authentication:</b> JWT token-based authentication with registration, login, and secure session management.",
                "• <b>Dashboard Metrics:</b> Real-time counters for Total Tasks, Pending Tasks, Completed Tasks, and Overdue Tasks.",
                "• <b>Task Lifecycle Management:</b> Full CRUD capabilities with title, description, priority (Low, Medium, High), status (To Do, In Progress, Completed), and date validation.",
                "• <b>Productivity Analytics:</b> Visual completion percentage progress indicators and priority distribution breakdowns."
            ]
        },
        {
            "title": "3. Database Schema & Architecture",
            "table": {
                "has_header": True,
                "colWidths": [120, 110, 274],
                "rows": [
                    ["Field", "Type", "Attributes & Description"],
                    ["task_id", "BigAutoField", "Primary Key, auto-incrementing"],
                    ["user_id", "ForeignKey(User)", "CASCADE delete, indexed for user-scoped queries"],
                    ["title", "CharField(255)", "Mandatory task title"],
                    ["description", "TextField", "Detailed task instructions or notes"],
                    ["priority", "CharField(10)", "Choices: LOW, MEDIUM, HIGH"],
                    ["status", "CharField(15)", "Choices: TO_DO, IN_PROGRESS, COMPLETED"],
                    ["due_date", "DateTimeField", "Deadline with overdue calculation logic"]
                ]
            }
        },
        {
            "title": "4. Tech Stack & Verification",
            "content": [
                "• <b>Frontend:</b> React 18, Vite, Modern CSS/Tailwind, Axios with JWT interceptors.",
                "• <b>Backend:</b> Python 3.13, Django 5.1, Django REST Framework, SimpleJWT.",
                "• <b>Status:</b> Fully verified against GitHub repository implementation."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 8. Expense Tracker
# -------------------------------------------------------------
expense_tracker = {
    "title": "Fullstack Personal Expense & Finance Tracker",
    "slug": "expense-tracker",
    "category": "Full Stack Financial Analytics",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Expense-Tracker-",
    "sections": [
        {
            "title": "1. Executive Summary & Financial Architecture",
            "content": [
                "The Fullstack Expense Tracker is a personal finance management platform engineered with React.js, Django REST Framework, and PostgreSQL. It delivers financial health visibility through categorized income and expense logging, automated monthly budget comparisons, and interactive Recharts data visualizations.",
                "Containerized via Docker and Docker Compose, the application demonstrates production container orchestration."
            ]
        },
        {
            "title": "2. Database Schema & Data Models",
            "table": {
                "has_header": True,
                "colWidths": [110, 110, 284],
                "rows": [
                    ["Table", "Primary Key", "Schema Columns & Foreign Keys"],
                    ["users", "user_id (BigAutoField)", "name, email (unique, indexed), password (PBKDF2 SHA-256), created_at"],
                    ["categories", "category_id (BigAuto)", "user_id (FK: users, nullable for system defaults), category_name, type (income/expense), icon, color"],
                    ["transactions", "transaction_id (BigAuto)", "user_id (FK: users), category_id (FK: categories), title, amount (decimal), transaction_date, notes"]
                ]
            }
        },
        {
            "title": "3. Analytics & Visualization Modules",
            "content": [
                "• <b>Financial Health KPIs:</b> Net balance, total monthly income, total monthly expenditure, and savings rate percentage.",
                "• <b>Spending Breakdown Donut:</b> Category-wise percentage distribution rendered dynamically using Recharts.",
                "• <b>Monthly Cash Flow Trend:</b> Interactive area chart displaying daily income versus expense trajectory.",
                "• <b>Data Export:</b> Filterable transaction history with CSV spreadsheet export capability."
            ]
        },
        {
            "title": "4. Containerization & Tech Stack",
            "content": [
                "• <b>Stack:</b> React.js (Vite), Python 3.13, Django 5.2, DRF, SimpleJWT, Recharts, Lucide Icons, Docker Compose.",
                "• <b>Verification:</b> Verified directly from repository structure and database models."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 9. Travel Agency System
# -------------------------------------------------------------
travel_agency = {
    "title": "Travel Agency & Tourism Booking System",
    "slug": "travel-agency",
    "category": "Full Stack Application Architecture",
    "status": "Pending Repository Verification",
    "repo_url": None,
    "sections": [
        {
            "title": "1. Proposed Architecture & System Scope",
            "content": [
                "The Travel Agency System is a conceptual full-stack platform designed to manage holiday tour packages, customized itineraries, transport booking coordination, and customer reservation histories.",
                "The platform addresses the need for centralized booking workflows across destinations, lodging, and guided excursions."
            ]
        },
        {
            "title": "2. System Modules & Planned Architecture",
            "content": [
                "• <b>Destination & Package Showcase:</b> Filterable travel packages with day-wise itineraries, inclusion lists, and pricing.",
                "• <b>Booking & Reservation Engine:</b> Passenger details entry, travel date selection, and reservation state tracking.",
                "• <b>Agency Management Console:</b> Package creation, capacity allotments, and customer enquiry tracking.",
                "• <b>Planned Tech Stack:</b> React frontend, Python Django REST Framework backend, PostgreSQL database."
            ]
        },
        {
            "title": "3. Documentation & Verification Notice",
            "callout": "Repository URL is pending publication. Architectural blueprints, entity relationships, and API specifications are maintained here for technical portfolio evaluation.",
            "content": [
                "• <b>Status:</b> Needs repository verification. Editable placeholder maintained in project data catalog."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 10. Infrastructure Development
# -------------------------------------------------------------
infra_dev = {
    "title": "Infrastructure Development Management System",
    "slug": "infrastructure-development",
    "category": "Full Stack Enterprise Architecture",
    "status": "Pending Repository Verification",
    "repo_url": None,
    "sections": [
        {
            "title": "1. Overview & Civil Project Lifecycle",
            "content": [
                "The Infrastructure Development Management System is designed for public works and civil engineering project tracking. It provides municipal bodies, contractors, and project managers with milestone progress monitoring, budget allocation vs. actual expenditure tracking, and contractor task assignment matrices."
            ]
        },
        {
            "title": "2. Proposed System Modules",
            "content": [
                "• <b>Project Portfolio Dashboard:</b> Overview of active infrastructure initiatives (roads, bridges, utilities) with completion percentages.",
                "• <b>Budget & Expenditure Auditing:</b> Milestone-based financial disbursements and fiscal burn-rate charts.",
                "• <b>Contractor & Resource Allocation:</b> Task assignments, material requisitions, and inspection approval workflows."
            ]
        },
        {
            "title": "3. Verification Status",
            "callout": "Repository link is currently unverified / pending upload. Technical design specifications follow standard enterprise Django/PostgreSQL architectures.",
            "content": [
                "• <b>Status:</b> Not documented in the available repository. Maintained as pending in the portfolio."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 11. Express Tracker
# -------------------------------------------------------------
express_tracker = {
    "title": "Express Tracker — Consignment & Shipment Logistics",
    "slug": "express-tracker",
    "category": "Full Stack Logistics & Tracking",
    "status": "Pending Repository Verification",
    "repo_url": None,
    "sections": [
        {
            "title": "1. Overview & Logistics Pipeline",
            "content": [
                "Express Tracker is a full-stack logistics and package tracking platform designed to provide end-to-end visibility over courier consignments. It models the journey of shipments across hub scans, sorting facilities, dispatch vehicles, and final last-mile deliveries."
            ]
        },
        {
            "title": "2. Proposed System Modules",
            "content": [
                "• <b>Public Tracking Interface:</b> Consignment lookup by AWB tracking number with real-time checkpoint timeline.",
                "• <b>Logistics Hub Scanning:</b> Operator interface for barcode scanning and package status updates (In Transit, Out for Delivery, Delivered).",
                "• <b>Fleet Management:</b> Delivery route optimization and courier agent allocation."
            ]
        },
        {
            "title": "3. Verification Status",
            "callout": "Repository URL is pending verification. Centralized data architecture is ready for system connection.",
            "content": [
                "• <b>Status:</b> Needs verification. Clearly designated as pending in portfolio UI."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 12. AI Quiz System (SmartLearn AI)
# -------------------------------------------------------------
ai_quiz_system = {
    "title": "AI Quiz System (SmartLearn AI)",
    "slug": "ai-quiz-system",
    "category": "AI / ML & EdTech Platform",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/AI-Quiz-System",
    "sections": [
        {
            "title": "1. Problem Statement & Research Objectives",
            "content": [
                "Students face immense cognitive load when digesting voluminous textbooks, research papers, and lecture slides. Traditional study tools rely on pre-existing, static question banks that fail to align with a student's specific syllabus. SmartLearn AI solves this by ingesting uncurated study materials and automatically generating structured study notes, multi-perspective summaries, interactive flashcards, RAG-grounded study chatbots, and dynamic quizzes with no dependency on static banks."
            ]
        },
        {
            "title": "2. Multi-Stage Document Ingestion & NLP Pipeline",
            "code": """[Student Document (PDF / DOCX / PPTX / TXT)]
       │
       ├── PyMuPDF (`fitz`): Direct text & layout extraction
       ├── Scanned Page Detector: Triggers Tesseract OCR via pytesseract (<35 chars/page)
       └── Semantic Text Chunking: Overlapping passages tagged with source page numbers
       │
       ▼
[NLP Linguistic Feature Extraction Engine]
       ├── Tokenization, Stop-word elimination, N-Gram analysis
       ├── Definition Identification: Pattern-matched conceptual terms
       └── Formulas & Facts Extractor: Regex capture of complexity notation & equations
       │
       ▼
[Generative Assessment Pipeline]
       ├── MCQs (4 options: 1 correct + 3 grounded distractors)
       ├── True/False, Fill in the Blanks, and Short Answer Questions
       └── 4 Difficulty Tiers: Easy, Medium, Hard, and Expert"""
        },
        {
            "title": "3. Machine Learning Analytics (Scikit-Learn)",
            "table": {
                "has_header": True,
                "colWidths": [130, 140, 234],
                "rows": [
                    ["ML Subsystem", "Algorithm & Implementation", "Features & Performance Results"],
                    ["Performance Predictor", "RandomForestClassifier (joblib serialized)", "Features: topic_accuracy, overall_accuracy, difficulty, attempt_num. Accuracy: 72%, Recall: 89%, F1: 0.816"],
                    ["Learner Clustering", "K-Means Clustering (k=4)", "Personas: Analytical Master, Speedy Skimmer, Deep Contemplator, Foundational Explorer"],
                    ["RAG Document Chatbot", "TF-IDF + Cosine Vector Matching", "Retrieves top-k context passages from document chunks with source page citations"]
                ]
            }
        },
        {
            "title": "4. Technology Stack & Architecture",
            "content": [
                "• <b>Backend Engine:</b> Python 3, Django, Django REST Framework, Scikit-learn, PyMuPDF, pytesseract, ReportLab.",
                "• <b>Frontend Client:</b> React 18, Vite, Tailwind CSS, Lucide Icons, interactive quiz timers, confetti animations.",
                "• <b>Evaluation:</b> Model evaluated on train/test split with full confusion matrix and precision/recall trade-off analysis."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 13. Fake News Detector
# -------------------------------------------------------------
fake_news_detector = {
    "title": "Fake News Detection System",
    "slug": "fake-news-detector",
    "category": "Natural Language Processing & ML",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Fake-News-Detection-System",
    "sections": [
        {
            "title": "1. Domain Problem & Disinformation Analysis",
            "content": [
                "The uncontrolled proliferation of digital disinformation and sensationalized fake news undermines public trust, skews elections, and promotes health hazards. The Fake News Detection System is an end-to-end NLP and machine learning platform that ingests news headlines and article bodies, extracts linguistic markers, and delivers real-time credibility classifications."
            ]
        },
        {
            "title": "2. NLP Preprocessing & Feature Engineering Pipeline",
            "content": [
                "• <b>Text Cleaning:</b> Conversion to lowercase, regex stripping of URLs, HTML tags, punctuation, and non-alphabetic characters.",
                "• <b>Linguistic Normalization:</b> NLTK stop-word elimination and morphological root reduction via the Porter Stemmer.",
                "• <b>Vectorization:</b> Scikit-learn `TfidfVectorizer` extracting unigram and bigram tokens with sublinear term-frequency scaling and minimum document frequency thresholds.",
                "• <b>Linguistic Metrics:</b> Real-time calculation of lexical diversity, average sentence length, and clickbait keyword trigger frequencies."
            ]
        },
        {
            "title": "3. Algorithm Selection & Dual Consensus Model",
            "table": {
                "has_header": True,
                "colWidths": [130, 150, 224],
                "rows": [
                    ["Algorithm", "Mathematical Principle", "Role in System"],
                    ["Multinomial Naive Bayes", "Bayes Theorem with conditional word independence", "Fast probabilistic baseline prioritizing vocabulary frequency"],
                    ["Logistic Regression", "Sigmoid activation over linear hyperplane weights", "Calibrated confidence score and robust feature weights"],
                    ["Dual Consensus Ensemble", "Weighted vote of Naive Bayes + Logistic Regression", "High-confidence detection minimizing false positive news flags"]
                ]
            }
        },
        {
            "title": "4. Interactive User Interface & Evaluation",
            "content": [
                "• <b>Streamlit UI:</b> Real-time verdict badge (REAL vs. FAKE), confidence percentage meter, token preview, and Plotly confusion matrix.",
                "• <b>Tech Stack:</b> Python 3.13, Streamlit 1.53, Scikit-learn, NLTK, Pandas, NumPy, Plotly, Joblib."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 14. Diabetes Risk Prediction (CareAI)
# -------------------------------------------------------------
diabetes_prediction = {
    "title": "CareAI — Diabetes Risk Prediction System",
    "slug": "diabetes-risk-prediction",
    "category": "Predictive Healthcare & Machine Learning",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Diabetes-Risk-Prediction-System",
    "sections": [
        {
            "title": "1. Clinical Background & Screening Rationale",
            "content": [
                "Type 2 diabetes mellitus often progresses asymptomatically for years before clinical diagnosis, leading to irreversible cardiovascular, renal, and retinal complications. CareAI provides an accessible, non-invasive screening platform using canonical metabolic markers to compute probabilistic risk tiers (Low, Moderate, High) and provide early lifestyle intervention guidelines."
            ]
        },
        {
            "title": "2. Dataset & Clinical Input Parameters",
            "table": {
                "has_header": True,
                "colWidths": [120, 120, 264],
                "rows": [
                    ["Feature", "Clinical Measurement", "Standard Healthy Reference Range"],
                    ["Pregnancies", "Count of pregnancies", "0 for males / null applicable"],
                    ["Glucose", "Plasma glucose (mg/dL)", "70 - 99 mg/dL (fasting normal)"],
                    ["Blood Pressure", "Diastolic BP (mm Hg)", "< 80 mm Hg (normal)"],
                    ["Skin Thickness", "Triceps fold thickness (mm)", "10 - 25 mm"],
                    ["Insulin", "2-Hour serum insulin (μU/mL)", "16 - 166 μU/mL"],
                    ["BMI", "kg / m²", "18.5 - 24.9 (normal weight)"],
                    ["DPF", "Diabetes Pedigree Function", "Genetic family hereditary risk score"],
                    ["Age", "Chronological age (years)", "Adult patient age"]
                ]
            }
        },
        {
            "title": "3. Machine Learning Architecture & Evaluation Metrics",
            "content": [
                "• <b>Preprocessing:</b> Numerical feature standardization via Scikit-learn `StandardScaler` to equalize metric variances.",
                "• <b>Classifier:</b> `RandomForestClassifier` ensemble with 100 estimators, Gini impurity splitting, and bootstrap sampling.",
                "• <b>Performance:</b> ~88% classification accuracy, 80% precision, 76.5% recall, 78.2% F1-score, and 95.3% ROC-AUC on hold-out validation splits.",
                "• <b>Feature Importance:</b> Gini importance ranking identifies Plasma Glucose, BMI, and Age as the three primary diagnostic drivers."
            ]
        },
        {
            "title": "4. Application Interface & Analytics",
            "content": [
                "• <b>Streamlit UI:</b> Patient demographic inputs, sample profile auto-fill buttons (Healthy, Prediabetic, High Risk), and color-coded risk cards.",
                "• <b>Persistent Analytics:</b> Historical screening log with CSV export, interactive Matplotlib/Seaborn donut charts, and ADA/WHO guidance notes."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 15. Email Spam Detection
# -------------------------------------------------------------
email_spam = {
    "title": "Email & SMS Spam Detection System",
    "slug": "email-spam-detection",
    "category": "Natural Language Processing & Cybersecurity",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Email-Spam-Detection-System",
    "sections": [
        {
            "title": "1. Domain Problem & Objective",
            "content": [
                "Spam communications represent a critical cybersecurity threat, delivering phishing exploits, trojans, and financial fraud. The objective of this project is to build an ultra-lightweight, explainable NLP classification engine that achieves 100% precision on legitimate messages (Ham) while catching deceptive promotional spam."
            ]
        },
        {
            "title": "2. Preprocessing & NLP Pipeline",
            "content": [
                "• <b>Text Cleaning:</b> Removal of special characters, currency symbols, and excessive punctuation.",
                "• <b>Tokenization & Lemmatization:</b> Word splitting, stop-word removal, and morphological base reduction.",
                "• <b>Vectorization:</b> TF-IDF vectorization mapping term frequency relative to inverse document frequency.",
                "• <b>Classifier:</b> Multinomial Naive Bayes model tuned with Laplace smoothing (alpha=1.0)."
            ]
        },
        {
            "title": "3. System Modules & Tech Stack",
            "content": [
                "• <b>Modules:</b> Single Message Predictor, Batch CSV Message Analyzer, and Model Performance Inspector.",
                "• <b>Technologies:</b> Python, Streamlit, Scikit-learn, NLTK, Pandas, Matplotlib.",
                "• <b>Status:</b> Fully verified from repository source code and unit tests."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 16. Handwritten Digit Recognition
# -------------------------------------------------------------
digit_recognition = {
    "title": "Handwritten Digit Recognition System",
    "slug": "handwritten-digit-recognition",
    "category": "Computer Vision & Deep Learning (CNN)",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/Handwritten-Digit-Recognition-System",
    "sections": [
        {
            "title": "1. Computer Vision Problem & MNIST Benchmark",
            "content": [
                "Recognizing handwritten numeric characters is a foundational computer vision challenge due to variations in handwriting slant, stroke thickness, and drawing speed. This application provides an interactive deep learning platform powered by a Convolutional Neural Network (CNN) trained on the 70,000-image MNIST benchmark dataset (Yann LeCun)."
            ]
        },
        {
            "title": "2. Image Standardization Pipeline",
            "code": """[Freehand Canvas Drawing (RGB)] ──> [Grayscale Conversion & Inversion]
                                          │
                                          ▼
                         [Extract Bounding Box of Drawn Digit]
                                          │
                                          ▼
                   [Resize to 20x20 maintaining aspect ratio]
                                          │
                                          ▼
                   [Pad to 28x28 and Center using Center of Mass]
                                          │
                                          ▼
                   [Normalize Pixel Values [0, 255] -> [0.0, 1.0]]
                                          │
                                          ▼
                   [Feed (1, 28, 28, 1) Tensor to CNN Model]"""
        },
        {
            "title": "3. Convolutional Neural Network Architecture",
            "table": {
                "has_header": True,
                "colWidths": [140, 140, 224],
                "rows": [
                    ["Layer Type", "Parameters / Shape", "Activation & Purpose"],
                    ["Conv2D (Block 1)", "32 filters, 3x3 kernel", "ReLU + BatchNormalization (Edge & stroke detection)"],
                    ["Conv2D (Block 1)", "32 filters, 3x3 kernel", "ReLU + BatchNormalization"],
                    ["MaxPooling2D", "Pool size 2x2, Dropout 0.25", "Spatial dimension reduction (14x14) & regularization"],
                    ["Conv2D (Block 2)", "64 filters, 3x3 kernel", "ReLU + BatchNormalization (High-level digit shapes)"],
                    ["Conv2D (Block 2)", "64 filters, 3x3 kernel", "ReLU + BatchNormalization"],
                    ["MaxPooling2D", "Pool size 2x2, Dropout 0.25", "Spatial dimension reduction (7x7)"],
                    ["Flatten & Dense", "Dense 256 units, Dropout 0.5", "ReLU fully connected feature combination"],
                    ["Output Dense", "Dense 10 units", "Softmax probability distribution over digits 0 through 9"]
                ]
            }
        },
        {
            "title": "4. Performance & Interactive Interface",
            "content": [
                "• <b>Evaluation:</b> Test set accuracy of ~99.1% on hold-out MNIST test samples; Plotly training curves show robust convergence.",
                "• <b>Frontend:</b> Streamlit with `streamlit-drawable-canvas` enabling live touch/mouse digit drawing, clear canvas buttons, and real-time probability bar charts."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 17. House Price Prediction
# -------------------------------------------------------------
house_price = {
    "title": "House Price Prediction Using Machine Learning",
    "slug": "house-price-prediction",
    "category": "Predictive Regression & Machine Learning",
    "status": "Verified Repository",
    "repo_url": "https://github.com/rakshapatil526/House-Price-Prediction",
    "sections": [
        {
            "title": "1. Real Estate Valuation & Problem Statement",
            "content": [
                "Real estate pricing is driven by complex non-linear interactions between geographic location, living area, architectural layout (bedrooms, bathrooms, floors), and property age. This machine learning application implements multi-variable regression to deliver transparent, data-driven property valuations for Bengaluru neighborhoods."
            ]
        },
        {
            "title": "2. Feature Engineering & Column Transformation",
            "table": {
                "has_header": True,
                "colWidths": [130, 130, 244],
                "rows": [
                    ["Feature Category", "Raw Inputs", "Transformation Pipeline"],
                    ["Categorical Location", "Whitefield, Indiranagar, Koramangala, etc.", "OneHotEncoder(handle_unknown='ignore')"],
                    ["Continuous Dimensions", "Area (sq.ft.), Property Age", "StandardScaler normalization"],
                    ["Discrete Structural", "Bedrooms (1-6), Bathrooms, Floors", "StandardScaler + polynomial feature checks"]
                ]
            }
        },
        {
            "title": "3. Regression Model Benchmarking",
            "content": [
                "• <b>Algorithms Benchmarked:</b> Linear Regression, Ridge/Lasso regularized regression, and Random Forest Regressor.",
                "• <b>Performance:</b> Random Forest Regressor captures non-linear location premiums effectively, minimizing Root Mean Squared Error (RMSE) and achieving high R² valuation fidelity.",
                "• <b>Persistent Log:</b> Evaluated quotes logged with timestamp, area, and predicted price (in Lakhs INR) to a persistent CSV database."
            ]
        },
        {
            "title": "4. Application Stack",
            "content": [
                "• <b>Stack:</b> Python 3.10+, Scikit-learn, Pandas, Streamlit, Matplotlib.",
                "• <b>Status:</b> Fully verified from repository source code and model evaluation scripts."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 18. Student Performance Prediction
# -------------------------------------------------------------
student_perf = {
    "title": "Student Performance Prediction System",
    "slug": "student-performance-prediction",
    "category": "Educational Data Mining & Predictive ML",
    "status": "Verified Repository (Notice: README Synchronization Required)",
    "repo_url": "https://github.com/rakshapatil526/Student-Performance-Prediction",
    "sections": [
        {
            "title": "1. Domain Overview & Academic Early-Warning Objectives",
            "content": [
                "Early identification of at-risk students allows academic institutions to deliver targeted tutoring and counseling interventions before final exams. The Student Performance Prediction initiative aims to predict student semester outcomes based on attendance patterns, internal assessment scores, study hours, and socio-academic factors."
            ]
        },
        {
            "title": "2. Repository Synchronization & Verification Notice",
            "callout": "Repository inspection confirms that the README in the GitHub repository currently mirrors the Student Management System (Attenda). Dedicated ML model training pipelines, training datasets, and evaluation metrics require repository verification and are preserved here as planned architecture.",
            "content": [
                "• <b>Repository Status:</b> Valid repository exists at `https://github.com/rakshapatil526/Student-Performance-Prediction`.",
                "• <b>Architectural Plan:</b> Features under verification include Classification algorithms (Decision Trees, Logistic Regression) predicting Grade Categories (Distinction, Pass, Remedial)."
            ]
        },
        {
            "title": "3. Planned ML Pipeline",
            "content": [
                "• <b>Inputs:</b> Prior GPA, attendance percentage, study hours per week, assignment submission rate, library visits.",
                "• <b>Target:</b> Final grade point average / pass-fail outcome.",
                "• <b>Status:</b> Clearly distinguished as pending verification to preserve technical integrity."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 19. Movie Recommendation System
# -------------------------------------------------------------
movie_rec = {
    "title": "Movie Recommendation System",
    "slug": "movie-recommendation",
    "category": "Machine Learning & Information Retrieval",
    "status": "Pending Repository Verification",
    "repo_url": None,
    "sections": [
        {
            "title": "1. Overview & Recommendation Approaches",
            "content": [
                "Recommender systems overcome digital content choice paralysis. This project specifies a content-based movie recommendation engine utilizing natural language processing, TF-IDF vectorization, and cosine similarity across movie metadata attributes (genres, directors, cast members, keywords, and plot summaries)."
            ]
        },
        {
            "title": "2. Proposed Algorithmic Architecture",
            "content": [
                "• <b>Metadata Fusion:</b> Concatenation of cleaned genres, overview tokens, director names, and top billing cast members into a unified content tag string.",
                "• <b>Vectorization:</b> `CountVectorizer` or `TfidfVectorizer` transforming textual tags into high-dimensional sparse token matrices.",
                "• <b>Similarity Metric:</b> Pairwise cosine similarity matrix computing angular distances between films.",
                "• <b>Recommendation Inference:</b> User selects a movie; system sorts similarity row and returns top-10 nearest neighbor titles."
            ]
        },
        {
            "title": "3. Verification Status",
            "callout": "Repository link is kept as an editable pending placeholder per instructions. Implementation details will be linked upon repository upload.",
            "content": [
                "• <b>Status:</b> Not documented in current active repository list. Maintained as pending."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 20. Traffic Sign Recognition
# -------------------------------------------------------------
traffic_sign = {
    "title": "Traffic Sign Recognition System",
    "slug": "traffic-sign-recognition",
    "category": "Computer Vision & Autonomous Systems",
    "status": "Pending Repository Verification",
    "repo_url": None,
    "sections": [
        {
            "title": "1. Autonomous Driving & Road Sign Classification",
            "content": [
                "Automated recognition of traffic signs is essential for Advanced Driver Assistance Systems (ADAS) and autonomous vehicles. The system specifies deep convolutional neural network classification across standard traffic sign categories (Speed limits, Stop, Yield, Danger warnings, Prohibitions) using the German Traffic Sign Recognition Benchmark (GTSRB)."
            ]
        },
        {
            "title": "2. Proposed Computer Vision Pipeline",
            "content": [
                "• <b>Image Preprocessing:</b> Histogram equalization, adaptive contrast enhancement (CLAHE), and image resizing to canonical dimensions (32x32).",
                "• <b>Data Augmentation:</b> Random rotations, zooming, and shearing to simulate varying weather and lighting conditions.",
                "• <b>CNN Architecture:</b> Multi-layer Conv2D + MaxPooling with Dropout regularization and Softmax multi-class output.",
                "• <b>Inference:</b> Streamlit dashboard supporting live image upload and video stream analysis."
            ]
        },
        {
            "title": "3. Verification Status",
            "callout": "Repository link is maintained as pending per instructions to ensure full verification integrity.",
            "content": [
                "• <b>Status:</b> Needs verification. Clearly labeled as pending in portfolio."
            ]
        }
    ]
}

# -------------------------------------------------------------
# 21. Smart Agriculture
# -------------------------------------------------------------
smart_agri = {
    "title": "Smart Agriculture Decision Support Platform",
    "slug": "smart-agriculture",
    "category": "AI / ML & IoT Decision Support",
    "status": "Pending Repository Verification",
    "repo_url": None,
    "sections": [
        {
            "title": "1. Executive Summary & Agricultural Decision Support",
            "content": [
                "The Smart Agriculture Platform combines agricultural domain science with machine learning to empower farmers with data-driven decision support. The platform models crop recommendations based on soil chemical parameters (Nitrogen, Phosphorus, Potassium - NPK), climate conditions (temperature, humidity, rainfall), and historical yield patterns.",
                "Additional capabilities include computer-vision crop leaf disease classification and automated fertilizer recommendations."
            ]
        },
        {
            "title": "2. System Modules & Proposed Architecture",
            "content": [
                "• <b>Soil & Crop Recommendation:</b> Multiclass classification predicting optimal crop varieties based on NPK, pH, and rainfall vectors.",
                "• <b>Leaf Disease Classifier:</b> Deep learning CNN model analyzing mobile leaf photographs for fungal and pest infestations.",
                "• <b>Weather Integration:</b> Real-time localized weather forecast API integration for irrigation planning.",
                "• <b>Planned Tech Stack:</b> React frontend, Django REST backend, Python, MongoDB, Scikit-learn, Weather API."
            ]
        },
        {
            "title": "3. Verification Status",
            "callout": "Repository URL is currently pending upload/verification. Architectural blueprints and agricultural models are documented from project specifications.",
            "content": [
                "• <b>Status:</b> Pending repository verification. Data catalog maintains editable URL."
            ]
        }
    ]
}

ALL_PROJECTS = [
    jobconnect_ai,
    smartcare_hms,
    restaurant_mgmt,
    library_mgmt,
    student_mgmt,
    event_mgmt,
    taskflow,
    expense_tracker,
    travel_agency,
    ai_quiz_system,
    fake_news_detector,
    diabetes_prediction,
    email_spam,
    digit_recognition,
    house_price,
    student_perf,
    movie_rec,
    traffic_sign
]

def main():
    print(f"Starting batch generation of {len(ALL_PROJECTS)} architecture PDFs...")
    for proj in ALL_PROJECTS:
        filename = os.path.join(OUTPUT_DIR, f"{proj['slug']}-architecture.pdf")
        build_pdf(filename, proj)
    print(f"All {len(ALL_PROJECTS)} Architecture PDFs successfully generated!")

if __name__ == "__main__":
    main()
