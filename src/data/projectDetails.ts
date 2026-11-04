export interface DatabaseTable {
  name: string;
  description: string;
  columns: {
    name: string;
    type: string;
    description: string;
    isPrimary?: boolean;
    isForeign?: boolean;
  }[];
}

export interface ApiEndpoint {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
  authRequired: boolean;
  requestBody?: string;
  responsePreview?: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  tagline: string;
  category: "Full Stack" | "AI/ML";
  subCategory: string;
  status: "Implemented & Verified" | "Architecture Blueprint / Pending Verification";
  githubUrl: string | null;
  architecturePdfUrl: string;
  overview: string;
  problemStatement: string;
  objectives: string[];
  proposedSolution: string;
  mainFeatures: {
    title: string;
    description: string;
    isImplemented: boolean;
  }[];
  functionalModules: {
    name: string;
    role: string;
    capabilities: string[];
  }[];
  techStackBreakdown: {
    category: string;
    technologies: string[];
    description: string;
  }[];
  systemArchitecture: {
    overview: string;
    frontendArchitecture: string;
    backendArchitecture: string;
    dataFlowDescription: string;
    architectureDiagram: string;
  };
  databaseDesign: {
    dbType: string;
    summary: string;
    tables: DatabaseTable[];
  };
  apiEndpoints: ApiEndpoint[];
  authenticationAndSecurity: {
    authModel: string;
    securityMeasures: string[];
  };
  workflowSteps: {
    stepNumber: number;
    title: string;
    description: string;
  }[];
  implementationAndTesting: {
    testingStrategy: string;
    verificationStatus: string;
  };
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  limitations: string[];
  futureEnhancements: string[];
}

export const PROJECT_DETAILS_MAP: Record<string, ProjectDetail> = {
  "jobconnect-ai": {
    slug: "jobconnect-ai",
    name: "JobConnect AI — Smart Job Recruitment & Career Platform",
    tagline: "End-to-End Enterprise Recruitment with ATS Resume Scoring and TF-IDF Cosine Candidate Matching",
    category: "Full Stack",
    subCategory: "Recruitment & Applied AI",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/JobConnect-AI-Job-Portal",
    architecturePdfUrl: "/documents/architecture/jobconnect-ai-architecture.pdf",
    overview:
      "JobConnect AI is a full-stack recruitment platform engineered with Django REST Framework and React (Vite + Tailwind CSS). It serves three distinct user roles: Job Seekers, Recruiters, and Administrators. Key capabilities include automated ATS resume parsing, TF-IDF cosine similarity candidate matching, interview scheduling across 5 rounds, role-based authorization, and ReportLab PDF document streaming.",
    problemStatement:
      "Traditional job boards suffer from disconnected communications, resume screening bottlenecks, and lack of objective candidate-job fit metrics. Candidates receive little feedback on their resumes, while recruiters spend hours manually triaging hundreds of unqualified applications.",
    objectives: [
      "Deliver role-based dashboards for Job Seekers, Recruiters, and Administrators.",
      "Integrate an automated ATS resume scoring engine (0-100 score) with missing skill gap identification.",
      "Implement machine learning candidate matching using TF-IDF vectorization and cosine similarity.",
      "Provide multi-round interview scheduling with calendar integration.",
      "Generate official application receipts, resumes, and offer letters via ReportLab PDF engine."
    ],
    proposedSolution:
      "A unified full-stack architecture that combines modern React SPA interactivity with Django REST Framework's robust API governance and Scikit-learn's mathematical vector analysis. The platform provides transparent AI match percentages alongside structured hiring pipeline states.",
    mainFeatures: [
      {
        title: "Role-Based Multi-Portal System",
        description: "Strictly segregated interfaces for Job Seekers, Recruiters, and Admin governance consoles.",
        isImplemented: true
      },
      {
        title: "AI ATS Resume Analyzer",
        description: "Extracts technical keywords, computes an ATS compatibility score (0-100), and provides formatting recommendations.",
        isImplemented: true
      },
      {
        title: "TF-IDF Candidate Matching Engine",
        description: "Vectorizes applicant resumes against job description texts to calculate objective cosine similarity match percentages.",
        isImplemented: true
      },
      {
        title: "5-Round Interview Coordination",
        description: "Schedules HR, Technical, Coding, Managerial, and Final rounds with meeting links and candidate status notifications.",
        isImplemented: true
      },
      {
        title: "Automated ReportLab PDF Generators",
        description: "Dynamically generates downloadable Resumes, Application Receipts, Offer Letters, and Executive Summaries.",
        isImplemented: true
      }
    ],
    functionalModules: [
      {
        name: "Job Seeker Module",
        role: "Candidates searching, tracking, and applying for career opportunities",
        capabilities: [
          "Profile completion widget with education, work history, and skill badges",
          "Interactive Resume Builder with instant PDF export",
          "AI Job Match percentage badges on search results",
          "Application stage tracker (Applied → Review → Shortlisted → Interview → Offer)",
          "Direct messaging with hiring managers"
        ]
      },
      {
        name: "Recruiter / Employer Module",
        role: "Hiring teams managing job vacancies and applicant pipelines",
        capabilities: [
          "Job listing management with AI description generator",
          "Automated applicant ranking by TF-IDF match score",
          "Interview scheduling with calendar notifications",
          "One-click PDF Offer Letter generation"
        ]
      },
      {
        name: "Administrator Governance Console",
        role: "Platform security, employer verification, and compliance audits",
        capabilities: [
          "Company registration approval queue",
          "Job listing moderation to suppress fraudulent postings",
          "System activity audit logs and executive summary reports"
        ]
      }
    ],
    techStackBreakdown: [
      {
        category: "Frontend Layer",
        technologies: ["React 18", "Vite", "Tailwind CSS", "Axios", "Lucide React"],
        description: "Single-page application with client-side routing, protected routes, and responsive dashboards."
      },
      {
        category: "Backend REST API",
        technologies: ["Python 3.13", "Django 5.2", "Django REST Framework", "SimpleJWT"],
        description: "Stateless REST API with JWT bearer authentication and role-based permission classes."
      },
      {
        category: "Machine Learning & Algorithms",
        technologies: ["Scikit-learn", "TF-IDF Vectorizer", "Cosine Similarity", "NumPy"],
        description: "Extracts n-gram tokens and calculates angular proximity between candidate profiles and job requirements."
      },
      {
        category: "Document Generation",
        technologies: ["ReportLab 5.x"],
        description: "Server-side dynamic PDF compilation for resumes, offer letters, and administrative reports."
      },
      {
        category: "Database & Storage",
        technologies: ["PostgreSQL", "SQLite (Development Fallback)"],
        description: "Relational models with foreign keys, unique email indexing, and transaction safety."
      }
    ],
    systemArchitecture: {
      overview:
        "The system operates on a client-server decoupled architecture. The React frontend interacts with the Django backend via secure HTTPS REST endpoints, passing JWT bearer tokens in the authorization header.",
      frontendArchitecture:
        "Modular React component hierarchy structured into role layouts (SeekerLayout, RecruiterLayout, AdminLayout) with Axios interceptors managing token renewal and authorization redirects.",
      backendArchitecture:
        "Django project divided into dedicated apps: accounts (auth and profiles), jobs (postings and categories), applications (pipeline and scoring), and documents (ReportLab PDF generators).",
      dataFlowDescription:
        "Candidate submits resume → backend parses text and vectorizes tokens → compares against job vector using cosine similarity → stores match score in database → returns structured pipeline payload to recruiter UI.",
      architectureDiagram:
        `[React 18 SPA]
      │ (JWT Bearer / REST)
      ▼
[Django REST Framework Gateway]
      │
      ├── [SimpleJWT Auth Filter]
      ├── [Resume Parser & Scikit-learn TF-IDF Engine]
      ├── [ReportLab PDF Generation Service]
      └── [Django ORM Layer]
             │
             ▼
      [PostgreSQL / SQLite Relational Database]`
    },
    databaseDesign: {
      dbType: "PostgreSQL / SQLite",
      summary: "Relational schema modeling multi-role users, verified company profiles, job listings, resumes, and multi-stage applications.",
      tables: [
        {
          name: "users_customuser",
          description: "Core authentication and role identity table",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "email", type: "EmailField", description: "Unique login identifier" },
            { name: "role", type: "CharField(20)", description: "Enum: SEEKER, RECRUITER, ADMIN" },
            { name: "is_verified", type: "BooleanField", description: "Verification badge status" }
          ]
        },
        {
          name: "jobs_joblisting",
          description: "Active employment listings published by recruiters",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "recruiter_id", type: "ForeignKey(User)", description: "Owner recruiter account", isForeign: true },
            { name: "title", type: "CharField(255)", description: "Job title" },
            { name: "description", type: "TextField", description: "Full role description" },
            { name: "skills_required", type: "TextField", description: "Comma-separated target skills" },
            { name: "status", type: "CharField(20)", description: "ACTIVE, DRAFT, CLOSED" }
          ]
        },
        {
          name: "applications_application",
          description: "Candidate job submissions and hiring pipeline status",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "job_id", type: "ForeignKey(JobListing)", description: "Associated job vacancy", isForeign: true },
            { name: "seeker_id", type: "ForeignKey(User)", description: "Applying candidate", isForeign: true },
            { name: "match_score", type: "DecimalField", description: "Computed TF-IDF match percentage" },
            { name: "stage", type: "CharField(30)", description: "Applied, Under Review, Shortlisted, Interview, Offer, Rejected" }
          ]
        }
      ]
    },
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/auth/token/",
        description: "Authenticates email and password, returning JWT access and refresh tokens.",
        authRequired: false
      },
      {
        method: "GET",
        path: "/api/jobs/",
        description: "Retrieves list of active job postings with query filters for location, salary, and title.",
        authRequired: false
      },
      {
        method: "POST",
        path: "/api/resumes/analyze/",
        description: "Uploads resume file, calculates ATS score (0-100), and returns identified keyword gaps.",
        authRequired: true
      },
      {
        method: "POST",
        path: "/api/applications/apply/",
        description: "Submits candidate application and triggers TF-IDF similarity calculation against job requirements.",
        authRequired: true
      },
      {
        method: "GET",
        path: "/api/documents/offer-letter/:id/pdf/",
        description: "Streams dynamic ReportLab PDF offer letter document with custom salary and start date parameters.",
        authRequired: true
      }
    ],
    authenticationAndSecurity: {
      authModel: "JSON Web Tokens (JWT) using django-rest-framework-simplejwt",
      securityMeasures: [
        "Passwords hashed using Django default PBKDF2 with SHA-256 algorithm.",
        "Role-based permission classes (IsJobSeeker, IsRecruiter, IsAdmin) enforce strict endpoint access control.",
        "CORS headers configured to restrict unauthorized origin requests.",
        "Data access isolation: Candidates can only access their own submissions; recruiters only access their company postings."
      ]
    },
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Registration & Profile Creation",
        description: "Candidate registers, selects Job Seeker role, builds career profile, and uploads resume for ATS scoring."
      },
      {
        stepNumber: 2,
        title: "Job Discovery & Algorithmic Matching",
        description: "Candidate browses vacancies with real-time AI match percentage badges calculated using TF-IDF cosine similarity."
      },
      {
        stepNumber: 3,
        title: "Application Submission & Tracking",
        description: "Candidate submits application, answers screening questions, and tracks stage progress in real time."
      },
      {
        stepNumber: 4,
        title: "Recruiter Review & Interview Scheduling",
        description: "Recruiter views applicants ranked by match percentage, reviews ATS breakdown, and schedules interview rounds."
      },
      {
        stepNumber: 5,
        title: "Offer Issuance & PDF Generation",
        description: "Upon selection, recruiter triggers the ReportLab PDF generator to compile and deliver an official offer letter."
      }
    ],
    implementationAndTesting: {
      testingStrategy: "Unit tests for TF-IDF tokenization accuracy and DRF endpoint response codes; database seed scripts verified.",
      verificationStatus: "Verified against live repository code, Django models, seed data scripts, and React frontend components."
    },
    challengesAndSolutions: [
      {
        challenge: "Accurately matching domain-specific candidate skills despite variations in resume formatting.",
        solution: "Implemented text normalization with N-gram TF-IDF vectorization and sublinear term frequency scaling."
      },
      {
        challenge: "Generating visually polished PDF offer letters with dynamic candidate data without external cloud dependencies.",
        solution: "Utilized Python ReportLab flowables to programmatically lay out typography, headers, and metadata into crisp vector PDFs."
      }
    ],
    limitations: [
      "Third-party calendar synchronization currently requires manual external URL copying.",
      "Requires PostgreSQL in production environments to support high-concurrency connection pooling."
    ],
    futureEnhancements: [
      "Integration of Google Calendar and Microsoft Outlook API for 1-click interview scheduling.",
      "Transformer-based embeddings (e.g. MiniLM) for semantic skill extraction alongside TF-IDF."
    ]
  },

  "smartcare-hms": {
    slug: "smartcare-hms",
    name: "SmartCare HMS — Smart Hospital Management System",
    tagline: "Integrated Clinical Healthcare Platform Supporting 16 User Roles, EHR, LIS, RIS, and AI Decision Support",
    category: "Full Stack",
    subCategory: "Enterprise Healthcare",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Smart-HMS-Integreted-enterprise-Hospital-Manegment-System-and-digitalcare-Administrate",
    architecturePdfUrl: "/documents/architecture/smartcare-hms-architecture.pdf",
    overview:
      "SmartCare HMS is a clinical-grade Hospital Management System built with Python Django REST Framework, React 18, TypeScript, and Tailwind CSS. Supporting 16 distinct role workflows, it unites outpatient care (OPD), inpatient wards (IPD), electronic health records (EHR), laboratory diagnostics (LIS), radiology imaging (RIS), pharmacy inventory, operating theaters (OT), emergency ambulance tracking, and AI clinical decision support.",
    problemStatement:
      "Hospitals rely on fragmented departmental software that causes medical errors, delayed test reporting, inventory stockouts, and administrative fatigue. Healthcare workers require a unified, secure platform with role-tailored dashboards and integrated clinical records.",
    objectives: [
      "Support 16 specialized hospital user roles with single-click demo credential switching.",
      "Automate patient intake, digital token generation, OPD consultations, and IPD bed assignments.",
      "Integrate Laboratory Information System (LIS) and Radiology Information System (RIS) with PDF reporting.",
      "Provide automatic pharmacy inventory stock deduction upon medication dispensing.",
      "Incorporate AI Clinical Decision Support (CDS) heuristics and emergency ambulance tracking."
    ],
    proposedSolution:
      "A modular Django backend divided into clinical, diagnostic, pharmacy, and billing services paired with a TypeScript React frontend. Role-based route guards ensure complete access segregation while maintaining a unified patient EHR timeline.",
    mainFeatures: [
      {
        title: "16 Specialized Healthcare User Roles",
        description: "Tailored interfaces for Patient, Doctor, Nurse, Receptionist, Lab Tech, Radiologist, Pharmacist, OT Staff, Billing, and Admin.",
        isImplemented: true
      },
      {
        title: "Electronic Health Record (EHR) Timeline",
        description: "Chronological patient history combining vital telemetry, clinical consultations, lab results, radiology scans, and prescriptions.",
        isImplemented: true
      },
      {
        title: "Diagnostic LIS & RIS Workflows",
        description: "Sample collection tracking, test result verification, DICOM image review, and downloadable PDF laboratory reports.",
        isImplemented: true
      },
      {
        title: "Automated Pharmacy Dispensing",
        description: "Verifies physician prescriptions, checks batch expiration dates, and automatically decrements inventory stock upon dispensing.",
        isImplemented: true
      },
      {
        title: "Emergency Ambulance Telemetry",
        description: "Real-time dispatch coordination with route status, triage priority scoring, and driver communication.",
        isImplemented: true
      }
    ],
    functionalModules: [
      {
        name: "Clinical Consultation Module",
        role: "Doctors and Nurses managing consultations and inpatient care",
        capabilities: [
          "OPD queue management with triage priority indicators",
          "Digital prescription writer with drug interaction warnings",
          "Inpatient Medication Administration Records (MAR) and vitals logging",
          "AI Clinical Decision Support (CDS) differential diagnosis guidance"
        ]
      },
      {
        name: "Diagnostic Laboratory & Imaging",
        role: "Lab Technicians and Radiologists processing diagnostic orders",
        capabilities: [
          "Specimen barcoding and sample status tracking",
          "Direct numerical result entry with normal reference range comparisons",
          "Radiology scan uploading and preliminary diagnostic reporting",
          "ReportLab PDF laboratory report compilation"
        ]
      },
      {
        name: "Operations & Financial Administration",
        role: "Reception, Billing Staff, and Hospital Administrators",
        capabilities: [
          "Patient registration, biometric ID creation, and token generation",
          "Aggregate billing calculating bed charges, pharmacy items, and lab tests",
          "Cashless insurance pre-authorization claims verification",
          "Bed occupancy heatmaps across general, ICU, and private wards"
        ]
      }
    ],
    techStackBreakdown: [
      {
        category: "Frontend Application",
        technologies: ["React 18", "TypeScript", "Tailwind CSS", "Lucide Icons", "Axios"],
        description: "Type-safe modular interface featuring role switcher chip components, responsive data grids, and modals."
      },
      {
        category: "Backend Engine",
        technologies: ["Python 3", "Django REST Framework", "SimpleJWT"],
        description: "Multi-app Django architecture with granular role permission classes and audit logging."
      },
      {
        category: "Database Layer",
        technologies: ["PostgreSQL", "SQLite (Development Fallback)"],
        description: "Relational persistence enforcing clinical integrity across patients, appointments, and medical records."
      },
      {
        category: "Document Generation",
        technologies: ["ReportLab PDF Engine"],
        description: "Generates formatted clinical discharge summaries, prescription slips, and hospital tax invoices."
      }
    ],
    systemArchitecture: {
      overview:
        "Engineered on a decoupled REST architecture. The frontend TypeScript React application interacts with Django REST services using JWT tokens carrying role claims.",
      frontendArchitecture:
        "Structured around role modules with shared clinical UI components (VitalsCard, AppointmentRow, PrescriptionEditor, LabReportViewer).",
      backendArchitecture:
        "Partitioned into focused Django apps: accounts, patients, clinical, diagnostics, pharmacy, billing, and ambulance.",
      dataFlowDescription:
        "Reception checks in patient → Doctor creates consultation and orders lab work → Lab tech uploads values → Doctor reviews confirmed findings → Pharmacist dispenses medications with auto stock decrement → Billing aggregates charges into final invoice PDF.",
      architectureDiagram:
        `[Patient / Staff Client: React 18 + TypeScript]
                     │ (REST / JWT Authentication)
                     ▼
          [Django REST Framework Gateway]
                     │
    ┌────────────────┼────────────────┬──────────────┐
    ▼                ▼                ▼              ▼
[Clinical App] [Diagnostics LIS] [Pharmacy App] [Billing App]
    │                │                │              │
    └────────────────┴────────┬───────┴──────────────┘
                              ▼
                 [PostgreSQL / SQLite Database]`
    },
    databaseDesign: {
      dbType: "PostgreSQL / SQLite",
      summary: "Relational schema maintaining clinical relationships between patients, medical staff, diagnostic tests, and invoices.",
      tables: [
        {
          name: "patients_patient",
          description: "Patient demographic and primary medical background",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "mrn", type: "CharField(20)", description: "Unique Medical Record Number" },
            { name: "full_name", type: "CharField(255)", description: "Patient name" },
            { name: "blood_group", type: "CharField(5)", description: "Blood type indicator" },
            { name: "allergies", type: "TextField", description: "Documented medical allergies" }
          ]
        },
        {
          name: "clinical_consultation",
          description: "Doctor visit documentation, symptoms, and diagnoses",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "patient_id", type: "ForeignKey(Patient)", description: "Patient reference", isForeign: true },
            { name: "doctor_id", type: "ForeignKey(User)", description: "Consulting physician", isForeign: true },
            { name: "symptoms", type: "TextField", description: "Clinical presentation" },
            { name: "diagnosis", type: "CharField(255)", description: "ICD-coded or freeform diagnosis" }
          ]
        },
        {
          name: "diagnostics_laborder",
          description: "Laboratory requests and verified diagnostic values",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "consultation_id", type: "ForeignKey(Consultation)", description: "Originating visit", isForeign: true },
            { name: "test_name", type: "CharField(100)", description: "CBC, Lipid Profile, etc." },
            { name: "status", type: "CharField(20)", description: "ORDERED, COLLECTED, VERIFIED" },
            { name: "result_values", type: "JSONField", description: "Numerical and reference markers" }
          ]
        }
      ]
    },
    apiEndpoints: [
      {
        method: "POST",
        path: "/api/auth/login/",
        description: "Validates credentials, returning JWT token with embedded user role permissions.",
        authRequired: false
      },
      {
        method: "GET",
        path: "/api/patients/:mrn/timeline/",
        description: "Retrieves complete chronological EHR records for specified patient.",
        authRequired: true
      },
      {
        method: "POST",
        path: "/api/clinical/consultations/",
        description: "Records new consultation notes and generates linked lab orders or prescriptions.",
        authRequired: true
      },
      {
        method: "POST",
        path: "/api/pharmacy/dispense/",
        description: "Marks prescription dispensed and decrements stock in pharmacy inventory.",
        authRequired: true
      }
    ],
    authenticationAndSecurity: {
      authModel: "Stateless JWT Authentication with role-scoped claims",
      securityMeasures: [
        "Pre-configured demo credentials for 16 roles (`Password@123`) for rapid evaluative testing.",
        "Role-based authorization guards on both frontend routes and Django API viewsets.",
        "Strict medical record confidentiality preventing cross-patient visibility."
      ]
    },
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Intake & Token Assignment",
        description: "Patient arrives at reception, registers details, receives an OPD queue token number."
      },
      {
        stepNumber: 2,
        title: "Physician Consultation",
        description: "Doctor reviews EHR history, examines patient, logs symptoms, and orders diagnostic lab tests."
      },
      {
        stepNumber: 3,
        title: "Laboratory Diagnostic Processing",
        description: "Technician draws sample, runs analysis, inputs findings into LIS, and exports verified PDF report."
      },
      {
        stepNumber: 4,
        title: "Pharmacy Dispensation & Inventory Sync",
        description: "Pharmacist fulfills digital prescription; inventory count automatically decrements."
      },
      {
        stepNumber: 5,
        title: "Discharge & Aggregate Invoicing",
        description: "Billing aggregates itemized costs across consultation, diagnostics, and medications into final PDF invoice."
      }
    ],
    implementationAndTesting: {
      testingStrategy: "Verified using database seed scripts covering 16 active roles, simulated patient visits, and PDF generators.",
      verificationStatus: "Verified against repository source code and database migrations."
    },
    challengesAndSolutions: [
      {
        challenge: "Managing 16 distinct role workflows without creating fragmented or slow codebases.",
        solution: "Implemented modular Django app partitioning with centralized JWT role claim deserialization."
      }
    ],
    limitations: [
      "PACS DICOM viewer currently relies on preview images rather than full DICOM Web streaming."
    ],
    futureEnhancements: [
      "HL7 / FHIR data export interoperability.",
      "Integration with wearable IoT telemetry for automated ICU patient monitoring."
    ]
  },

  "restaurant-management": {
    slug: "restaurant-management",
    name: "Restaurant Management System (SwiftBite)",
    tagline: "Full-Stack Food Delivery & Kitchen Operations with Real-Time Cart, Order Tracking, and Menu Controls",
    category: "Full Stack",
    subCategory: "E-Commerce & Food Service",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Restaurant-Management-System",
    architecturePdfUrl: "/documents/architecture/restaurant-management-architecture.pdf",
    overview:
      "SwiftBite is a full-stack food delivery and restaurant management system built with React 18, Vite, Python Django REST Framework, and PostgreSQL. It delivers an engaging customer ordering experience with category filtering (Pizza, Burgers, Biryani, Chinese, Desserts, Drinks), cart management, Veg/Non-Veg indicators, and cash/online checkout, accompanied by an administrative kitchen dashboard for real-time order status tracking.",
    problemStatement:
      "Small-to-medium restaurants struggle with high aggregator commission fees, out-of-sync paper menus, and delays in order status communication between the front of house and the kitchen.",
    objectives: [
      "Provide customers with an intuitive menu interface with dietary tags and search.",
      "Implement a responsive cart and order placement pipeline with delivery fee calculations.",
      "Provide kitchen managers with an order state dashboard (Placed → Preparing → Dispatched → Delivered).",
      "Support JWT customer authentication with single-click demo login presets."
    ],
    proposedSolution:
      "A lightweight React frontend interacting with Django REST Framework endpoints. Customer orders are saved transactionally and updated via kitchen status endpoints.",
    mainFeatures: [
      {
        title: "Dynamic Category Navigation",
        description: "Filter dishes across Pizza, Burgers, Biryani, Chinese, Desserts, and Drinks with live item counters.",
        isImplemented: true
      },
      {
        title: "Dietary Indicators & Food Search",
        description: "Clear Pure-Veg and Non-Veg visual indicators alongside instant keyword search.",
        isImplemented: true
      },
      {
        title: "Cart & Checkout Flow",
        description: "Interactive item quantity steppers, subtotal breakdown, tax calculations, and delivery address capture.",
        isImplemented: true
      },
      {
        title: "Kitchen Order State Machine",
        description: "Kitchen operators transition orders from Placed to Preparing, Out for Delivery, and Delivered.",
        isImplemented: true
      }
    ],
    functionalModules: [
      {
        name: "Customer Ordering Module",
        role: "Patrons browsing menu and purchasing food items",
        capabilities: ["Menu category browsing", "Cart management", "Order placement with COD or online simulation"]
      },
      {
        name: "Kitchen & Admin Module",
        role: "Restaurant managers updating menu items and monitoring sales",
        capabilities: ["Menu CRUD management", "Order progress updates", "Daily revenue analytics"]
      }
    ],
    techStackBreakdown: [
      {
        category: "Frontend UI",
        technologies: ["React 18", "Vite", "Tailwind CSS", "Lucide React", "Axios"],
        description: "Responsive interface featuring animated food hero banners and modal order confirmations."
      },
      {
        category: "Backend API",
        technologies: ["Python 3", "Django 5", "Django REST Framework", "SimpleJWT"],
        description: "RESTful API handling products, categories, orders, and customer accounts."
      },
      {
        category: "Database Layer",
        technologies: ["PostgreSQL", "SQLite (Development Fallback)"],
        description: "Relational persistence with foreign keys linking categories, products, and order items."
      }
    ],
    systemArchitecture: {
      overview: "Decoupled architecture connecting a React single-page application with a Django REST backend via Axios.",
      frontendArchitecture: "Component hierarchy structured around Navbar, HeroBanner, CategoryGrid, ProductCard, CartDrawer, and OrderTracker.",
      backendArchitecture: "Django app structure with models for Category, Product, Order, and OrderItem.",
      dataFlowDescription: "User adds dish to cart → proceeds to checkout → POST /api/orders/ → database transaction writes Order and OrderItems → Kitchen updates status → Client polls order status.",
      architectureDiagram:
        `[Customer: React 18 Frontend]
            │ (Axios REST Calls)
            ▼
[Django REST Framework] ──> [SimpleJWT Auth]
            │
            ├── [Menu & Category Services]
            ├── [Order Processing Pipeline]
            └── [Django ORM Layer]
                    │
                    ▼
          [PostgreSQL / SQLite]`
    },
    databaseDesign: {
      dbType: "PostgreSQL / SQLite",
      summary: "Relational schema ensuring price integrity and order history tracking.",
      tables: [
        {
          name: "products_category",
          description: "Food menu category groupings",
          columns: [
            { name: "id", type: "AutoField", description: "Primary Key", isPrimary: true },
            { name: "name", type: "CharField(100)", description: "Category name" },
            { name: "slug", type: "SlugField", description: "URL-friendly identifier" }
          ]
        },
        {
          name: "products_product",
          description: "Food menu items with pricing and dietary attributes",
          columns: [
            { name: "id", type: "AutoField", description: "Primary Key", isPrimary: true },
            { name: "category_id", type: "ForeignKey(Category)", description: "Category parent", isForeign: true },
            { name: "name", type: "CharField(255)", description: "Dish title" },
            { name: "price", type: "DecimalField", description: "Unit price" },
            { name: "is_veg", type: "BooleanField", description: "Vegetarian indicator" }
          ]
        },
        {
          name: "orders_order",
          description: "Customer orders and fulfillment states",
          columns: [
            { name: "id", type: "AutoField", description: "Primary Key", isPrimary: true },
            { name: "user_id", type: "ForeignKey(User)", description: "Ordering customer", isForeign: true },
            { name: "total_amount", type: "DecimalField", description: "Order grand total" },
            { name: "order_status", type: "CharField(20)", description: "PLACED, PREPARING, DISPATCHED, DELIVERED" }
          ]
        }
      ]
    },
    apiEndpoints: [
      {
        method: "GET",
        path: "/api/products/",
        description: "Fetches active menu items with optional category filtering.",
        authRequired: false
      },
      {
        method: "POST",
        path: "/api/orders/",
        description: "Creates customer order and saves itemized line items.",
        authRequired: true
      },
      {
        method: "PATCH",
        path: "/api/orders/:id/status/",
        description: "Kitchen staff endpoint to update fulfillment status.",
        authRequired: true
      }
    ],
    authenticationAndSecurity: {
      authModel: "JWT Bearer Authentication via SimpleJWT",
      securityMeasures: [
        "Passwords hashed using PBKDF2.",
        "Cart checkouts verified against current database menu item prices."
      ]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Menu Browsing", description: "Customer filters menu by category, searches dishes, and selects items." },
      { stepNumber: 2, title: "Cart & Checkout", description: "Customer reviews items in cart drawer and enters delivery address." },
      { stepNumber: 3, title: "Order Execution", description: "Server saves order and kitchen marks status as Preparing." }
    ],
    implementationAndTesting: {
      testingStrategy: "End-to-end testing of ordering pipeline and category filter state persistence.",
      verificationStatus: "Verified against live repository code and database schema."
    },
    challengesAndSolutions: [
      {
        challenge: "Ensuring menu price consistency during cart checkout without client-side tampering.",
        solution: "Server recalculates subtotal from database product prices before saving order records."
      }
    ],
    limitations: ["Online payment option currently uses simulated transaction confirmation."],
    futureEnhancements: ["Razorpay / Stripe webhook integration.", "Real-time delivery driver geolocation tracking via WebSockets."]
  },

  "library-management": {
    slug: "library-management",
    name: "Library Management System (LiberSys)",
    tagline: "Academic Bibliographic & Circulation Management with Automated Overdue Tracking",
    category: "Full Stack",
    subCategory: "Information Systems",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Library-Management-System",
    architecturePdfUrl: "/documents/architecture/library-management-architecture.pdf",
    overview:
      "LiberSys is a full-stack library management system engineered with React 18, Django REST Framework, and PostgreSQL. It enforces inventory integrity across book titles, tracks student borrowing transactions, automatically calculates overdue fines, and monitors available stock in real time.",
    problemStatement:
      "Educational libraries face challenges with misplaced books, inaccurate paper ledgers, untracked overdue loans, and manual fine reconciliation.",
    objectives: [
      "Maintain a centralized catalog of books with ISBN, category, and quantity tracking.",
      "Manage student borrower profiles with active borrowing count limits.",
      "Automate book issue and return transactions with atomic inventory decrement/increment.",
      "Calculate overdue fines dynamically based on due dates."
    ],
    proposedSolution:
      "A relational database model with atomic transactions governing book inventory status. The React dashboard provides librarians with quick search and one-click issue/return controls.",
    mainFeatures: [
      { title: "Book Cataloging", description: "Add, edit, and search books by ISBN, title, author, or category.", isImplemented: true },
      { title: "Student Borrower Registry", description: "Track enrolled students, departments, and active loans.", isImplemented: true },
      { title: "Circulation Engine", description: "Issue books with 14-day loan periods and manage return transactions.", isImplemented: true },
      { title: "Overdue Calculations", description: "Automatically flags overdue loans and calculates fine liabilities.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Librarian Circulation Console",
        role: "Library staff handling checkouts, returns, and inventory counts",
        capabilities: ["Issue book with availability check", "Process return with fine computation", "Catalog new acquisitions"]
      }
    ],
    techStackBreakdown: [
      { category: "Frontend", technologies: ["React 18", "Tailwind CSS", "Axios", "Lucide Icons"], description: "Clean dashboard styled with modern SaaS design patterns." },
      { category: "Backend", technologies: ["Python 3.13", "Django 5.2", "Django REST Framework"], description: "REST API with atomic transactions for circulation operations." },
      { category: "Database", technologies: ["PostgreSQL", "SQLite Fallback"], description: "Three core tables: books, students, and borrow_records." }
    ],
    systemArchitecture: {
      overview: "Standard 3-tier client-server architecture with React client, Django API layer, and relational SQL database.",
      frontendArchitecture: "Vite-powered React SPA with centralized Axios instance and responsive modal forms.",
      backendArchitecture: "Django app with serializers, model validators, and custom business logic in service views.",
      dataFlowDescription: "Librarian inputs student ID and Book ID → system verifies available_quantity > 0 and student loan count < limit → creates borrow_record → decrements available_quantity.",
      architectureDiagram:
        `[React Client] ──(Axios REST)──> [Django REST Framework]
                                         │
                                         ▼ (Atomic DB Transaction)
                                   [PostgreSQL Database: books, students, borrow_records]`
    },
    databaseDesign: {
      dbType: "PostgreSQL / SQLite",
      summary: "Three core relational tables modeling bibliographic assets, borrowers, and circulation records.",
      tables: [
        {
          name: "books",
          description: "Bibliographic asset records",
          columns: [
            { name: "book_id", type: "AutoField", description: "Primary Key", isPrimary: true },
            { name: "title", type: "CharField(255)", description: "Book title" },
            { name: "author", type: "CharField(255)", description: "Author name" },
            { name: "ISBN", type: "CharField(50)", description: "Unique ISBN identifier" },
            { name: "quantity", type: "PositiveIntegerField", description: "Total inventory copies" },
            { name: "available_quantity", type: "PositiveIntegerField", description: "Remaining lendable copies" }
          ]
        },
        {
          name: "students",
          description: "Registered student borrowers",
          columns: [
            { name: "student_id", type: "CharField(20)", description: "Primary Key (e.g. STU101)", isPrimary: true },
            { name: "name", type: "CharField(200)", description: "Student full name" },
            { name: "email", type: "EmailField", description: "Unique institutional email" },
            { name: "department", type: "CharField(100)", description: "Academic department" }
          ]
        },
        {
          name: "borrow_records",
          description: "Circulation transaction logs",
          columns: [
            { name: "record_id", type: "AutoField", description: "Primary Key", isPrimary: true },
            { name: "student_id", type: "ForeignKey(students)", description: "Borrower reference", isForeign: true },
            { name: "book_id", type: "ForeignKey(books)", description: "Borrowed book reference", isForeign: true },
            { name: "issue_date", type: "DateField", description: "Checkout date" },
            { name: "due_date", type: "DateField", description: "Loan deadline" },
            { name: "status", type: "CharField(20)", description: "ISSUED, RETURNED, OVERDUE" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/books/", description: "List all books with available quantity count.", authRequired: false },
      { method: "POST", path: "/api/borrow-records/issue/", description: "Issues book and decrements available inventory.", authRequired: true },
      { method: "POST", path: "/api/borrow-records/:id/return/", description: "Processes return and computes fine if past due date.", authRequired: true }
    ],
    authenticationAndSecurity: {
      authModel: "API token authorization with session fallback",
      securityMeasures: ["ISBN uniqueness constraints", "Atomic transaction blocks prevent negative inventory counts."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Book Lookup", description: "Librarian searches catalog by title or scans ISBN barcode." },
      { stepNumber: 2, title: "Checkout Validation", description: "System verifies available copies and borrower eligibility." },
      { stepNumber: 3, title: "Return & Fine Check", description: "Book returned, copy stock replenished, and overdue fines logged." }
    ],
    implementationAndTesting: {
      testingStrategy: "Tested with concurrent issue requests to verify inventory race-condition prevention.",
      verificationStatus: "Verified against repository source code and database migrations."
    },
    challengesAndSolutions: [
      { challenge: "Preventing inventory discrepancies during simultaneous checkout requests.", solution: "Used Django database transaction.atomic() with select_for_update() locking." }
    ],
    limitations: ["Barcode scanner support currently relies on standard keyboard emulation input."],
    futureEnhancements: ["Automated email reminders sent to students 48 hours prior to due dates."]
  },

  "student-management": {
    slug: "student-management",
    name: "Student Management System (Attenda)",
    tagline: "Academic Institutional Management with Department Cascades, CGPA Scorecards, and CSV Export",
    category: "Full Stack",
    subCategory: "Academic Administration",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Student-Management-System",
    architecturePdfUrl: "/documents/architecture/student-management-architecture.pdf",
    overview:
      "Attenda is an enterprise-grade academic Student Management System engineered with Python Django, HTML5/CSS3/JavaScript, and SQLite. It provides academic administrators with comprehensive tools to enroll students, organize departments and degree programs, calculate CGPA scorecards, and export student cohorts to CSV.",
    problemStatement:
      "Colleges need reliable, straightforward administrative software to maintain student records, track academic standings across departments, and eliminate manual spreadsheet management.",
    objectives: [
      "Manage student profiles with photos, contact details, and institutional roll numbers.",
      "Support dynamic cascading dropdowns for departments and academic degree courses.",
      "Calculate average institutional CGPA and display performance tier charts.",
      "Provide one-click CSV report exports."
    ],
    proposedSolution:
      "A server-rendered Django application with optimized ORM queries, client-side AJAX cascades, Chart.js metric visualizations, and administrative authentication.",
    mainFeatures: [
      { title: "Institutional Dashboard", description: "Live counters for Enrolled Students, Departments, Degree Courses, and Average CGPA.", isImplemented: true },
      { title: "Multi-Section Enrollment", description: "Cascading dynamic dropdowns for departments and courses with live photo preview.", isImplemented: true },
      { title: "Student Directory", description: "Filterable table with search by roll number, department filtering, and CSV export.", isImplemented: true },
      { title: "Academic Scorecard", description: "Performance tier indicators (Distinction, First Class, Second Class, Remedial).", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Administrative Portal",
        role: "Department heads and registrars managing academic cohorts",
        capabilities: ["Student enrollment and profile management", "Department & Course CRUD", "CSV data exports"]
      }
    ],
    techStackBreakdown: [
      { category: "Web Framework", technologies: ["Python", "Django 5.x", "HTML5", "CSS3", "JavaScript"], description: "Django Template Engine with responsive CSS styling." },
      { category: "Data Visualization", technologies: ["Chart.js"], description: "Department-wise distribution bars and CGPA performance doughnuts." },
      { category: "Database Layer", technologies: ["SQLite / PostgreSQL"], description: "Relational models for Departments, Courses, and Students." }
    ],
    systemArchitecture: {
      overview: "Classic MVC/MVT Django architecture with secure server-rendered views and AJAX cascading endpoints.",
      frontendArchitecture: "Modular Django templates with vanilla JavaScript AJAX event handlers and Chart.js dashboards.",
      backendArchitecture: "Django Class-Based Views (CBVs) enforcing authentication and input validation.",
      dataFlowDescription: "Admin selects department → AJAX fetches matching degree courses → Form submitted → Validated and saved in database → Dashboard KPIs update.",
      architectureDiagram:
        `[Admin Browser: HTML5 / Chart.js]
                     │ (HTTP Form Submission & AJAX)
                     ▼
             [Django MVT Engine]
          ├── [Auth & Session Controls]
          ├── [Enrollment Form Validators]
          └── [Django ORM Layer]
                     │
                     ▼
          [SQLite / PostgreSQL Database]`
    },
    databaseDesign: {
      dbType: "SQLite / PostgreSQL",
      summary: "Relational schema maintaining academic hierarchies between departments, degree programs, and enrolled students.",
      tables: [
        {
          name: "departments",
          description: "Academic departments within the institution",
          columns: [
            { name: "id", type: "AutoField", description: "Primary Key", isPrimary: true },
            { name: "name", type: "CharField(100)", description: "Department name (e.g. Computer Science)" }
          ]
        },
        {
          name: "students",
          description: "Enrolled student records",
          columns: [
            { name: "id", type: "AutoField", description: "Primary Key", isPrimary: true },
            { name: "register_number", type: "CharField(50)", description: "Unique institutional roll number" },
            { name: "name", type: "CharField(200)", description: "Student full name" },
            { name: "cgpa", type: "DecimalField(4, 2)", description: "Cumulative Grade Point Average" },
            { name: "department_id", type: "ForeignKey(departments)", description: "Enrolled department", isForeign: true }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/dashboard/", description: "Renders administrative overview with Chart.js analytics.", authRequired: true },
      { method: "POST", path: "/students/add/", description: "Validates and enrolls new student record.", authRequired: true },
      { method: "GET", path: "/students/export/csv/", description: "Exports full student registry to CSV spreadsheet.", authRequired: true }
    ],
    authenticationAndSecurity: {
      authModel: "Django Session Authentication with CSRF tokens",
      securityMeasures: ["CSRF token verification on all POST requests", "Strict role-based login requirement."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Administrator Sign-In", description: "Admin logs in with institutional credentials." },
      { stepNumber: 2, title: "Student Enrollment", description: "Admin enters personal and academic details with cascading dropdowns." },
      { stepNumber: 3, title: "Record Management & Export", description: "Search directory, edit records, or download institutional CSV reports." }
    ],
    implementationAndTesting: {
      testingStrategy: "Form validation tests for CGPA ranges (0.00 - 10.00) and roll number uniqueness.",
      verificationStatus: "Verified against repository source code and models."
    },
    challengesAndSolutions: [
      { challenge: "Preventing page reloads when selecting academic departments to populate degree courses.", solution: "Implemented client-side AJAX endpoint returning JSON course lists on department change." }
    ],
    limitations: ["Image uploads stored in local media folder rather than S3 bucket in development."],
    futureEnhancements: ["Student self-service portal for grade inquiries and attendance tracking."]
  },

  "event-management": {
    slug: "event-management",
    name: "Event Management System",
    tagline: "Conference & Event Planning Platform with Attendee Ticketing and Venue Scheduling",
    category: "Full Stack",
    subCategory: "Event Operations",
    status: "Architecture Blueprint / Pending Verification",
    githubUrl: null,
    architecturePdfUrl: "/documents/architecture/event-management-architecture.pdf",
    overview:
      "The Event Management System is a planned full-stack platform designed to manage the entire lifecycle of conferences, workshops, and college cultural festivals. It provides event publishing, attendee ticketing, venue allocation, speaker scheduling, and check-in QR validation.",
    problemStatement:
      "Event organizers face disjointed tools for ticketing, attendee communications, and on-site check-ins, leading to long entry lines and oversold venue capacities.",
    objectives: [
      "Enable organizers to publish multi-day event schedules with speaker rosters.",
      "Support attendee ticketing with tier allocations (Early Bird, Standard, VIP).",
      "Provide venue capacity tracking to prevent overbooking.",
      "Equip check-in staff with digital attendance validation."
    ],
    proposedSolution:
      "A React single-page application connected to a Django REST Framework backend with PostgreSQL, using relational constraints to enforce seat allocations.",
    mainFeatures: [
      { title: "Event Catalog & Filters", description: "Categorized event discovery by topic, date, and venue.", isImplemented: false },
      { title: "Tiered Ticket Registration", description: "RSVP and ticketing workflows with automated confirmation badges.", isImplemented: false },
      { title: "Venue & Capacity Governance", description: "Real-time seat count decrements to prevent overselling.", isImplemented: false }
    ],
    functionalModules: [
      { name: "Organizer Portal", role: "Event hosts managing schedules and ticket tiers", capabilities: ["Event creation", "Capacity monitoring", "Attendee CSV export"] },
      { name: "Attendee Portal", role: "Participants browsing and booking tickets", capabilities: ["Event discovery", "Ticket registration", "Downloadable badge"] }
    ],
    techStackBreakdown: [
      { category: "Frontend", technologies: ["React.js", "Tailwind CSS"], description: "Responsive interface for event browsing and registration." },
      { category: "Backend", technologies: ["Python", "Django REST Framework"], description: "RESTful endpoints managing events, tickets, and check-ins." },
      { category: "Database", technologies: ["PostgreSQL"], description: "Relational models for Events, Venues, Attendees, and Tickets." }
    ],
    systemArchitecture: {
      overview: "Standard 3-tier decoupled architecture designed for high-concurrency ticket reservations.",
      frontendArchitecture: "React component tree with dynamic schedule timelines and registration forms.",
      backendArchitecture: "Django REST Framework services managing event lifecycles and registration transactions.",
      dataFlowDescription: "User registers → Ticket capacity decremented → Confirmation email and ticket badge generated.",
      architectureDiagram:
        `[Attendee / Organizer React SPA] ──> [Django REST Framework API] ──> [PostgreSQL Database]`
    },
    databaseDesign: {
      dbType: "PostgreSQL",
      summary: "Relational schema modeling events, ticket tiers, venues, and registered attendees.",
      tables: [
        {
          name: "events",
          description: "Event metadata and schedule",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "title", type: "CharField(255)", description: "Event name" },
            { name: "capacity", type: "PositiveIntegerField", description: "Maximum venue occupancy" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/events/", description: "List all upcoming events.", authRequired: false },
      { method: "POST", path: "/api/tickets/book/", description: "Registers attendee and reserves ticket.", authRequired: true }
    ],
    authenticationAndSecurity: {
      authModel: "JWT Bearer Authentication",
      securityMeasures: ["Database transactions prevent overbooking beyond venue capacity."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Event Publishing", description: "Organizer sets up event details, agenda, and ticket limits." },
      { stepNumber: 2, title: "Attendee Booking", description: "Attendee selects ticket tier and completes registration." },
      { stepNumber: 3, title: "On-Site Validation", description: "Staff scans badge QR code to record attendance." }
    ],
    implementationAndTesting: {
      testingStrategy: "Load testing planned for high-traffic ticket release windows.",
      verificationStatus: "Repository URL pending publication. Architecture defined per project blueprint."
    },
    challengesAndSolutions: [
      { challenge: "Preventing race conditions during rapid ticket sell-outs.", solution: "Plan to implement Redis distributed locks on ticket inventory counters." }
    ],
    limitations: ["Repository link is currently pending publication."],
    futureEnhancements: ["Integration with Zoom / Google Meet for hybrid virtual events."]
  },

  "taskflow": {
    slug: "taskflow",
    name: "TaskFlow — To-Do List & Project Management",
    tagline: "Full-Stack Task Organization with User Data Isolation, Priority Matrices, and Metric Telemetry",
    category: "Full Stack",
    subCategory: "Productivity & Workflow",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/TaskFlow-To-Do-List-",
    architecturePdfUrl: "/documents/architecture/taskflow-architecture.pdf",
    overview:
      "TaskFlow is a production-grade task management web application engineered with React 18, Django REST Framework, and PostgreSQL/SQLite. It provides individual developers and teams with structured workflow organization, due date alerts, priority rankings, and completion telemetry with strict user-level data isolation.",
    problemStatement:
      "Individuals and teams lose productivity when tasks lack clear priority classifications, deadlines, and visual completion indicators.",
    objectives: [
      "Provide user authentication with isolated personal task workspaces.",
      "Support full CRUD task operations with status (To Do, In Progress, Completed).",
      "Enforce date validations ensuring due dates do not precede start dates.",
      "Display real-time aggregated metrics (Total, Pending, Completed, Overdue)."
    ],
    proposedSolution:
      "A responsive React frontend communicating with Django REST Framework endpoints protected by SimpleJWT. User isolation is enforced by scoping all ORM queries to `request.user`.",
    mainFeatures: [
      { title: "User Data Isolation", description: "Users can only view, edit, or delete tasks belonging to their authenticated account.", isImplemented: true },
      { title: "Productivity Dashboard", description: "Real-time counters for Total, Pending, Completed, and Overdue tasks with progress bars.", isImplemented: true },
      { title: "Task Lifecycle Management", description: "Set priority (Low, Medium, High), status, and due dates with validation.", isImplemented: true },
      { title: "Filtering & Search", description: "Instant client-side task search and priority filtering.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Task Management Board",
        role: "Authenticated users tracking project tasks",
        capabilities: ["Create, edit, toggle, and delete tasks", "View overdue deadline alerts", "Track completion ratios"]
      }
    ],
    techStackBreakdown: [
      { category: "Frontend", technologies: ["React 18", "Vite", "Tailwind CSS", "Axios", "Lucide React"], description: "Interactive task board with priority badges and status pills." },
      { category: "Backend", technologies: ["Python 3.13", "Django 5.1", "Django REST Framework", "SimpleJWT"], description: "REST API with user-scoped querysets." },
      { category: "Database", technologies: ["PostgreSQL / SQLite"], description: "Relational table linking tasks to authenticated user accounts." }
    ],
    systemArchitecture: {
      overview: "Decoupled single-page application communicating via RESTful API with stateless JWT authorization.",
      frontendArchitecture: "Component structure: Navbar, DashboardMetrics, TaskList, TaskCard, TaskModal, and AuthViews.",
      backendArchitecture: "Django app with Task model, TaskSerializer, and TaskViewSet filtering by `request.user`.",
      dataFlowDescription: "Client authenticates → receives JWT → queries `/api/tasks/dashboard/` → renders live metric counters.",
      architectureDiagram:
        `[React 18 SPA] ──(JWT Bearer)──> [Django REST Framework] ──> [PostgreSQL / SQLite Database]`
    },
    databaseDesign: {
      dbType: "PostgreSQL / SQLite",
      summary: "Relational schema maintaining user-scoped task records.",
      tables: [
        {
          name: "tasks",
          description: "Task items owned by authenticated users",
          columns: [
            { name: "task_id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "user_id", type: "ForeignKey(User)", description: "Owner user account", isForeign: true },
            { name: "title", type: "CharField(255)", description: "Task title" },
            { name: "priority", type: "CharField(10)", description: "LOW, MEDIUM, HIGH" },
            { name: "status", type: "CharField(15)", description: "TO_DO, IN_PROGRESS, COMPLETED" },
            { name: "due_date", type: "DateTimeField", description: "Task deadline" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/tasks/", description: "Returns tasks belonging to authenticated user.", authRequired: true },
      { method: "POST", path: "/api/tasks/", description: "Creates a new task record.", authRequired: true },
      { method: "PATCH", path: "/api/tasks/:id/", description: "Updates task status or priority.", authRequired: true },
      { method: "GET", path: "/api/tasks/dashboard/", description: "Returns aggregated task status metrics.", authRequired: true }
    ],
    authenticationAndSecurity: {
      authModel: "JSON Web Tokens (SimpleJWT)",
      securityMeasures: ["User querysets strictly filtered by `request.user` to prevent cross-account data leaks."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Sign-In", description: "User logs in and receives JWT access token." },
      { stepNumber: 2, title: "Task Creation", description: "User enters title, selects priority and due date." },
      { stepNumber: 3, title: "Status Tracking", description: "User marks tasks in progress or completed; dashboard metrics update instantly." }
    ],
    implementationAndTesting: {
      testingStrategy: "Verified user isolation logic ensuring user A cannot access user B's task IDs.",
      verificationStatus: "Verified against live repository code and database schema."
    },
    challengesAndSolutions: [
      { challenge: "Preventing IDOR (Insecure Direct Object Reference) vulnerabilities on task endpoints.", solution: "Overrode `get_queryset()` in DRF viewsets to strictly enforce `user=self.request.user`." }
    ],
    limitations: ["Sub-tasks / checklist items within a parent task are not currently modeled."],
    futureEnhancements: ["Drag-and-drop Kanban board layout.", "Recurring task automation schedules."]
  },

  "expense-tracker": {
    slug: "expense-tracker",
    name: "Fullstack Expense Tracker",
    tagline: "Personal Finance & Budget Analytics with Categorized Cash Flow Logging and Docker Containerization",
    category: "Full Stack",
    subCategory: "Personal Finance",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Expense-Tracker-",
    architecturePdfUrl: "/documents/architecture/expense-tracker-architecture.pdf",
    overview:
      "The Fullstack Expense Tracker is a personal finance management application engineered with React.js, Python Django REST Framework, and PostgreSQL. It delivers complete visibility over income and expenditures through custom categories, monthly budget thresholds, interactive Recharts data visualizations, and Docker containerization.",
    problemStatement:
      "Without systematic expense tracking, individuals lose track of recurring subscriptions, impulse spending, and monthly savings goals.",
    objectives: [
      "Provide categorized transaction logging for both income and expense entries.",
      "Visualize category spending shares via Recharts donut charts.",
      "Track cash flow trajectory and net monthly balance.",
      "Support containerized multi-service deployment via Docker Compose."
    ],
    proposedSolution:
      "A containerized full-stack architecture with React frontend, Django REST API, and PostgreSQL database with normalized tables for users, categories, and transactions.",
    mainFeatures: [
      { title: "Financial KPI Overview", description: "Total Income, Total Expense, Net Balance, and Savings Rate calculations.", isImplemented: true },
      { title: "Category-Wise Analytics", description: "Interactive Recharts donut chart showing percentage share per expenditure category.", isImplemented: true },
      { title: "Monthly Cash Flow Trends", description: "Area charts illustrating income vs. expenditure over time.", isImplemented: true },
      { title: "Docker Deployment", description: "Docker Compose configuration orchestrating frontend, backend, and PostgreSQL services.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Personal Finance Dashboard",
        role: "Users managing personal finances and monitoring budgets",
        capabilities: ["Transaction logging", "Category breakdown inspection", "CSV transaction export"]
      }
    ],
    techStackBreakdown: [
      { category: "Frontend", technologies: ["React.js", "Vite", "Recharts", "Lucide React", "Axios"], description: "Responsive data visualization dashboard." },
      { category: "Backend", technologies: ["Python 3.13", "Django 5.2", "Django REST Framework", "SimpleJWT"], description: "RESTful financial calculation endpoints." },
      { category: "Database & DevOps", technologies: ["PostgreSQL", "Docker", "Docker Compose"], description: "Relational persistence and container orchestration." }
    ],
    systemArchitecture: {
      overview: "Containerized 3-tier architecture running frontend, backend, and database in isolated Docker containers.",
      frontendArchitecture: "React dashboard components consuming financial summary endpoints.",
      backendArchitecture: "Django app handling transactions, category models, and aggregated summary queries.",
      dataFlowDescription: "User logs expense → stored in PostgreSQL → aggregates recalculated → Recharts components render updated visualizations.",
      architectureDiagram:
        `[Docker Container: React SPA] ──> [Docker Container: Django REST API] ──> [Docker Container: PostgreSQL]`
    },
    databaseDesign: {
      dbType: "PostgreSQL",
      summary: "Relational schema maintaining users, transaction categories, and financial logs.",
      tables: [
        {
          name: "categories",
          description: "Expense and income classification categories",
          columns: [
            { name: "category_id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "category_name", type: "CharField(100)", description: "Category title (Food, Travel, etc.)" },
            { name: "type", type: "CharField(20)", description: "income / expense" }
          ]
        },
        {
          name: "transactions",
          description: "Financial transactions with timestamps and amounts",
          columns: [
            { name: "transaction_id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "user_id", type: "ForeignKey(User)", description: "Account owner", isForeign: true },
            { name: "category_id", type: "ForeignKey(Category)", description: "Category reference", isForeign: true },
            { name: "amount", type: "DecimalField(12, 2)", description: "Transaction value" },
            { name: "transaction_date", type: "DateField", description: "Date of transaction" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/transactions/", description: "Returns user transactions with category details.", authRequired: true },
      { method: "POST", path: "/api/transactions/", description: "Records new income or expense transaction.", authRequired: true },
      { method: "GET", path: "/api/transactions/summary/", description: "Returns aggregated monthly financial KPIs.", authRequired: true }
    ],
    authenticationAndSecurity: {
      authModel: "JSON Web Tokens (SimpleJWT)",
      securityMeasures: ["User isolation enforced on all transaction queries; passwords hashed via PBKDF2."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Account Login", description: "User signs in and accesses financial overview." },
      { stepNumber: 2, title: "Transaction Logging", description: "User inputs amount, selects category, and saves transaction." },
      { stepNumber: 3, title: "Analytics Review", description: "Interactive charts update to show spending distributions." }
    ],
    implementationAndTesting: {
      testingStrategy: "Tested with varying transaction datasets to verify decimal precision and chart calculation accuracy.",
      verificationStatus: "Verified against repository source code and Docker configuration."
    },
    challengesAndSolutions: [
      { challenge: "Accurately computing rolling monthly net balances across variable date ranges.", solution: "Utilized Django ORM aggregation functions (`Sum`, `TruncMonth`) for fast database-level calculations." }
    ],
    limitations: ["Bank account direct sync (Plaid / Open Banking) is not currently implemented."],
    futureEnhancements: ["Automated receipt OCR parsing using computer vision to extract total and line items."]
  },

  "travel-agency": {
    slug: "travel-agency",
    name: "Travel Agency System",
    tagline: "Holiday Package Discovery, Itinerary Customization, and Reservation Management",
    category: "Full Stack",
    subCategory: "Hospitality & Booking",
    status: "Architecture Blueprint / Pending Verification",
    githubUrl: null,
    architecturePdfUrl: "/documents/architecture/travel-agency-architecture.pdf",
    overview:
      "The Travel Agency System is a proposed full-stack booking portal designed to manage holiday tour packages, day-wise itineraries, customer reservations, and destination catalogs.",
    problemStatement:
      "Travel agencies require a centralized platform to showcase seasonal itineraries and handle customer bookings without manual paperwork.",
    objectives: [
      "Present filterable holiday tour packages with transparent pricing.",
      "Provide customer booking pipelines with travel date selection.",
      "Equip agency staff with capacity management tools."
    ],
    proposedSolution:
      "A React single-page application connecting to a Django REST Framework API with PostgreSQL storage for package catalogs, bookings, and customer profiles.",
    mainFeatures: [
      { title: "Tour Package Showcase", description: "Filterable packages by destination, duration, and budget.", isImplemented: false },
      { title: "Itinerary Builder", description: "Day-by-day activity timelines with lodging and transport details.", isImplemented: false }
    ],
    functionalModules: [
      { name: "Customer Portal", role: "Travelers exploring destinations and booking trips", capabilities: ["Package browsing", "Reservation requests", "Booking history"] }
    ],
    techStackBreakdown: [
      { category: "Frontend", technologies: ["React.js", "Tailwind CSS"], description: "Visual destination cards and itinerary timelines." },
      { category: "Backend", technologies: ["Python", "Django REST Framework"], description: "Booking and package catalog endpoints." },
      { category: "Database", technologies: ["PostgreSQL"], description: "Relational models for Packages, Itineraries, and Bookings." }
    ],
    systemArchitecture: {
      overview: "Standard 3-tier decoupled architecture designed for travel booking management.",
      frontendArchitecture: "React component tree with package filters and modal booking forms.",
      backendArchitecture: "Django REST Framework services managing package models and booking records.",
      dataFlowDescription: "User selects package → specifies traveler count and dates → creates booking record in PostgreSQL.",
      architectureDiagram:
        `[Customer: React SPA] ──> [Django REST Framework API] ──> [PostgreSQL Database]`
    },
    databaseDesign: {
      dbType: "PostgreSQL",
      summary: "Relational schema maintaining destinations, tour packages, and bookings.",
      tables: [
        {
          name: "packages",
          description: "Tour package offerings",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "destination", type: "CharField(200)", description: "Location name" },
            { name: "price", type: "DecimalField", description: "Per person cost" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/packages/", description: "Returns list of active travel packages.", authRequired: false }
    ],
    authenticationAndSecurity: {
      authModel: "JWT Bearer Authentication",
      securityMeasures: ["User accounts require verified email before booking confirmation."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Browse Packages", description: "Customer filters trips by destination and budget." },
      { stepNumber: 2, title: "Booking Submission", description: "Customer specifies travel dates and passenger information." }
    ],
    implementationAndTesting: {
      testingStrategy: "Booking capacity verification planned for high-demand holiday slots.",
      verificationStatus: "Repository URL pending publication. Architecture defined per project blueprint."
    },
    challengesAndSolutions: [
      { challenge: "Coordinating multi-day itineraries with dynamic pricing.", solution: "Architected relational foreign keys linking daily itinerary items to base packages." }
    ],
    limitations: ["Repository link is currently pending publication."],
    futureEnhancements: ["Flight and hotel API integration for live room availability."]
  },

  // ==========================================
  // AI / ML PROJECT DETAILS
  // ==========================================
  "ai-quiz-system": {
    slug: "ai-quiz-system",
    name: "AI Quiz System (SmartLearn AI)",
    tagline: "Dynamic Study Document Extraction, AI Assessment Generation, and ML Performance Analytics",
    category: "AI/ML",
    subCategory: "NLP & EdTech ML",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/AI-Quiz-System",
    architecturePdfUrl: "/documents/architecture/ai-quiz-system-architecture.pdf",
    overview:
      "SmartLearn AI is a full-stack educational platform powered by Artificial Intelligence and Machine Learning. The platform enables students to upload uncurated study materials (textbooks, notes, presentation slides) and automatically extracts key concepts, generates multi-perspective summaries, produces grounded interactive quizzes, and runs Scikit-learn predictive models to forecast student success.",
    problemStatement:
      "Students struggle with overwhelming reading volumes, while traditional study tools depend on pre-existing static question banks that fail to reflect a student's specific course material.",
    objectives: [
      "Extract structured text from PDFs, DOCX, and PPTX with fallback Tesseract OCR for scanned pages.",
      "Identify definitions, core concepts, formulas, and algorithmic complexity notations.",
      "Generate dynamic, grounded quizzes across 4 formats (MCQ, True/False, Fill in Blanks, Short Answer).",
      "Deploy a Scikit-learn RandomForestClassifier to predict student performance (72% accuracy) and K-Means for learning personas.",
      "Provide an interactive RAG-grounded document study chatbot."
    ],
    proposedSolution:
      "A complete pipeline linking document extraction (PyMuPDF, pytesseract) to linguistic NLP parsing, generative question creation, and predictive machine learning models persisted via Joblib.",
    mainFeatures: [
      { title: "Multi-Format Document Ingestion", description: "Extracts text from PDF, DOCX, PPTX, and scanned images using PyMuPDF and Tesseract OCR.", isImplemented: true },
      { title: "Dynamic Assessment Engine", description: "Generates grounded MCQs with plausible distractors, True/False, and Fill-in-the-Blank questions without static banks.", isImplemented: true },
      { title: "Predictive ML Performance Model", description: "RandomForestClassifier predicting test correctness (72% accuracy, 89% recall, 0.816 F1-score).", isImplemented: true },
      { title: "K-Means Learner Personas", description: "Clusters students into 4 learning personas: Analytical Master, Speedy Skimmer, Deep Contemplator, Foundational Explorer.", isImplemented: true },
      { title: "Interactive Quiz Arena", description: "Live countdown timers, mark-for-review palette, instant score evaluation, and confetti celebrations.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Document Ingestion & NLP Engine",
        role: "Parsing uploaded materials into semantic passages",
        capabilities: ["Layout preservation with PyMuPDF", "OCR fallback via Tesseract", "Definition and formula extraction"]
      },
      {
        name: "Assessment & Practice Arena",
        role: "Interactive student quiz evaluation",
        capabilities: ["Timed quiz sessions", "Instant question-by-question explanations", "Grounded source page citations"]
      },
      {
        name: "ML Student Analytics Engine",
        role: "Data-driven performance insights",
        capabilities: ["Random Forest score prediction", "K-Means behavioral clustering", "Adaptive revision recommendations"]
      }
    ],
    techStackBreakdown: [
      { category: "Backend Engine", technologies: ["Python 3", "Django", "Django REST Framework", "PyMuPDF", "pytesseract", "ReportLab"], description: "Core document processing, OCR, and API services." },
      { category: "Machine Learning", technologies: ["Scikit-learn", "Random Forest", "K-Means", "Joblib", "TF-IDF Vectorizer"], description: "Predictive modeling and student clustering." },
      { category: "Frontend Interface", technologies: ["React 18", "Vite", "Tailwind CSS", "Lucide React", "Canvas Confetti"], description: "Responsive study arena and student analytics dashboard." }
    ],
    systemArchitecture: {
      overview: "Integrated full-stack AI pipeline connecting document parsing, machine learning inference, and interactive React study modules.",
      frontendArchitecture: "React SPA with components for DocumentUploader, SummaryViewer, FlashcardDeck, QuizArena, and MLAnalyticsDashboard.",
      backendArchitecture: "Django backend featuring services for document extraction, linguistic analysis, question synthesis, and ML inference.",
      dataFlowDescription: "Upload document → PyMuPDF extracts text → NLP identifies concepts → Quiz engine generates questions → Student completes quiz → ML model updates performance forecast.",
      architectureDiagram:
        `[Student Document Upload] ──> [PyMuPDF / Tesseract OCR]
                                    │
                                    ▼
                     [NLP Semantic Chunking & Concept Extractor]
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
      [Dynamic Quiz Generator]         [Scikit-learn ML Analytics]
      (MCQ / True-False / Fill-ins)     (Random Forest + K-Means)
                    │                               │
                    └───────────────┬───────────────┘
                                    ▼
                      [React 18 Interactive Arena]`
    },
    databaseDesign: {
      dbType: "SQLite / PostgreSQL",
      summary: "Relational schema storing uploaded study materials, generated quizzes, student attempts, and ML analytics logs.",
      tables: [
        {
          name: "documents_studymaterial",
          description: "Uploaded student files and extraction metadata",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "title", type: "CharField(255)", description: "Document title" },
            { name: "file_type", type: "CharField(10)", description: "pdf, docx, pptx, txt" },
            { name: "extracted_text", type: "TextField", description: "Full parsed content" }
          ]
        },
        {
          name: "quizzes_quiz",
          description: "Dynamically generated quizzes",
          columns: [
            { name: "id", type: "BigAutoField", description: "Primary Key", isPrimary: true },
            { name: "document_id", type: "ForeignKey(StudyMaterial)", description: "Source document", isForeign: true },
            { name: "difficulty", type: "CharField(20)", description: "Easy, Medium, Hard, Expert" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "POST", path: "/api/documents/upload/", description: "Uploads document and triggers text extraction pipeline.", authRequired: true },
      { method: "POST", path: "/api/quizzes/generate/", description: "Generates grounded quiz questions from extracted document passages.", authRequired: true },
      { method: "POST", path: "/api/quizzes/:id/submit/", description: "Evaluates student answers and runs ML performance prediction.", authRequired: true }
    ],
    authenticationAndSecurity: {
      authModel: "Token Authentication with role isolation",
      securityMeasures: ["Document access strictly isolated to uploading student; file size and format whitelist checks."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Upload Material", description: "Student uploads PDF or slides; OCR extracts text passages." },
      { stepNumber: 2, title: "Review Concepts", description: "Platform generates high-yield summaries and key definition cards." },
      { stepNumber: 3, title: "Interactive Quiz", description: "Student takes dynamic timed quiz with instant explanation feedback." },
      { stepNumber: 4, title: "ML Performance Insights", description: "Scikit-learn model evaluates accuracy and updates learner persona profile." }
    ],
    implementationAndTesting: {
      testingStrategy: "Model evaluated using train/test splits; Random Forest achieved 72% test accuracy, 89% recall, and 0.816 F1-score.",
      verificationStatus: "Verified against live repository code, Django backend, React frontend, and model serialization scripts."
    },
    challengesAndSolutions: [
      { challenge: "Extracting readable text from scanned PDF pages with low selectable text density.", solution: "Implemented automatic page density detection (<35 characters) that routes pages to Tesseract OCR." }
    ],
    limitations: ["Handwritten OCR requires clear handwriting for optimal extraction fidelity."],
    futureEnhancements: ["Transformer-based embeddings (e.g. BERT) for advanced semantic distractor ranking."]
  },

  "fake-news-detector": {
    slug: "fake-news-detector",
    name: "Fake News Detection System",
    tagline: "Real-Time Digital Misinformation Classification via NLP Preprocessing and Dual-Consensus ML",
    category: "AI/ML",
    subCategory: "NLP & Text Classification",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Fake-News-Detection-System",
    architecturePdfUrl: "/documents/architecture/fake-news-detector-architecture.pdf",
    overview:
      "The Fake News Detection System is an end-to-end Natural Language Processing (NLP) and Machine Learning web application engineered to detect, classify, and analyze digital misinformation and fake news articles in real time. Built with Python, Streamlit, Scikit-learn, NLTK, and Plotly, it employs high-dimensional TF-IDF feature extraction, Porter stemming, and a dual-consensus ensemble of Multinomial Naive Bayes and Logistic Regression.",
    problemStatement:
      "The viral spread of misleading articles and fabricated digital news damages democratic discourse, economic stability, and public health awareness. Users require accessible tools to evaluate text credibility.",
    objectives: [
      "Implement an NLP text cleaning and normalization pipeline with Porter stemming.",
      "Extract unigram and bigram TF-IDF features with sublinear term-frequency scaling.",
      "Benchmark Multinomial Naive Bayes and Logistic Regression classifiers.",
      "Deliver an intuitive Streamlit UI featuring instant verdict badges, confidence meters, and linguistic statistics."
    ],
    proposedSolution:
      "A reactive Streamlit web application linking NLTK text preprocessing to Scikit-learn classification models persisted with Joblib. A dual-consensus voting mechanism combines probabilistic Naive Bayes with regularized Logistic Regression.",
    mainFeatures: [
      { title: "Headline & Body Text Analysis", description: "Evaluates full article text and headline sensationalism in real time.", isImplemented: true },
      { title: "Dual-Algorithm Consensus", description: "Combines Multinomial Naive Bayes and Logistic Regression to compute unified credibility scores.", isImplemented: true },
      { title: "Linguistic Feature Breakdown", description: "Calculates lexical diversity, reading duration, and clickbait trigger keyword frequencies.", isImplemented: true },
      { title: "Interactive Confusion Matrix", description: "Plotly confusion matrix heatmaps showing True/False Positives and Negatives.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "NLP Text Preprocessor",
        role: "Sanitizing and tokenizing raw article inputs",
        capabilities: ["URL and symbol stripping via regex", "NLTK stop-word removal", "Porter morphological stemming", "TF-IDF vector transformation"]
      },
      {
        name: "Detection & Inference Arena",
        role: "User-facing classification interface",
        capabilities: ["Sample article presets", "Real-time REAL/FAKE verdict badge", "Confidence percentage meter", "History log with CSV export"]
      }
    ],
    techStackBreakdown: [
      { category: "Language & Runtime", technologies: ["Python 3.13"], description: "Core programming language and execution environment." },
      { category: "Web Interface", technologies: ["Streamlit 1.53"], description: "Reactive frontend dashboard with interactive sliders and metrics." },
      { category: "NLP & ML Libraries", technologies: ["Scikit-learn", "NLTK", "Pandas", "NumPy", "Joblib"], description: "Text tokenization, TF-IDF vectorization, and model serialization." },
      { category: "Data Visualization", technologies: ["Plotly Graph Objects & Express"], description: "Interactive confusion matrices and probability distribution charts." }
    ],
    systemArchitecture: {
      overview: "Streamlit reactive execution pipeline where user text inputs flow sequentially through NLP preprocessing, vectorization, model inference, and Plotly visualization.",
      frontendArchitecture: "Multi-page Streamlit application (Home, News Detection, Analysis & Model Info).",
      backendArchitecture: "Modular Python modules: `app.py` for UI presentation and `model_trainer.py` for pipeline fitting.",
      dataFlowDescription: "User inputs article → regex cleans text → Porter stemmer reduces roots → TF-IDF vectorizer transforms to 1xN feature vector → Logistic Regression computes probability → Streamlit displays verdict.",
      architectureDiagram:
        `[Article Headline & Body]
             │
             ▼
     [Regex Sanitizer] ──> [NLTK Stopword Filter] ──> [Porter Stemmer]
                                                             │
                                                             ▼
                                                [TF-IDF Vectorizer (1xN)]
                                                             │
                               ┌─────────────────────────────┴─────────────────────────────┐
                               ▼                                                           ▼
                    [Multinomial Naive Bayes]                                     [Logistic Regression]
                               │                                                           │
                               └─────────────────────────────┬─────────────────────────────┘
                                                             ▼
                                            [Dual Consensus Decision Engine]
                                                             │
                                                             ▼
                                            [Streamlit Real-Time Credibility Report]`
    },
    databaseDesign: {
      dbType: "File-based Persistence (Joblib & CSV)",
      summary: "Serialized model weights (`model.pkl`, `vectorizer.pkl`) and session history CSV logging.",
      tables: []
    },
    apiEndpoints: [],
    authenticationAndSecurity: {
      authModel: "Public interactive tool with input sanitization",
      securityMeasures: ["Regex stripping of embedded HTML/JavaScript to prevent XSS payloads."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Input News Text", description: "User pastes headline and article body or selects a pre-loaded demo article." },
      { stepNumber: 2, title: "Algorithm Selection", description: "User selects Logistic Regression, Naive Bayes, or Dual Consensus." },
      { stepNumber: 3, title: "Credibility Report", description: "Streamlit renders verdict badge, confidence score, and linguistic metrics." }
    ],
    implementationAndTesting: {
      testingStrategy: "Trained and tested on benchmark news datasets with cross-validation and confusion matrix verification.",
      verificationStatus: "Verified against repository source code and model trainer implementation."
    },
    challengesAndSolutions: [
      { challenge: "Handling domain-specific vocabulary and stylistic sensationalism without overfitting.", solution: "Applied sublinear term-frequency scaling and minimum document frequency thresholds in `TfidfVectorizer`." }
    ],
    limitations: ["Performance depends on vocabulary overlap with the training corpus."],
    futureEnhancements: ["URL web scraping to automatically fetch and verify live news article links."]
  },

  "diabetes-risk-prediction": {
    slug: "diabetes-risk-prediction",
    name: "Diabetes Risk Prediction System (CareAI)",
    tagline: "Clinical Screening & Metabolic Risk Tier Categorization (~88% Accuracy) via Random Forest",
    category: "AI/ML",
    subCategory: "Clinical ML & Healthcare",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Diabetes-Risk-Prediction-System",
    architecturePdfUrl: "/documents/architecture/diabetes-risk-prediction-architecture.pdf",
    overview:
      "CareAI is an intelligent, data-driven clinical screening and analytical dashboard engineered with Python, Streamlit, Scikit-learn, Pandas, NumPy, Matplotlib, and Seaborn. Modeled after canonical clinical markers (Pima Indians Diabetes Dataset), it evaluates 8 physiological parameters to estimate diabetes risk tiers (Low, Moderate, High) with ~88% accuracy and 95.3% ROC-AUC.",
    problemStatement:
      "Type 2 diabetes mellitus often progresses asymptomatically for years before clinical diagnosis, leading to irreversible cardiovascular, renal, and neurological complications. Accessible screening tools are needed for early metabolic detection.",
    objectives: [
      "Accept 8 canonical clinical inputs: Pregnancies, Glucose, Blood Pressure, Skin Thickness, Insulin, BMI, DPF, and Age.",
      "Standardize features using Scikit-learn StandardScaler to eliminate metric scale distortions.",
      "Deploy a trained RandomForestClassifier yielding ~88% accuracy and 95.3% ROC-AUC.",
      "Deliver a clinical dashboard with WHO/ADA reference comparisons and CSV history logging."
    ],
    proposedSolution:
      "A Streamlit web application providing instant patient risk tier classification, feature importance barplots, and clinical recommendation summaries.",
    mainFeatures: [
      { title: "Comprehensive Clinical Input Grid", description: "8 metabolic parameters with interactive sliders and demo patient presets (Healthy, Prediabetic, High Risk).", isImplemented: true },
      { title: "Risk Tier Categorization", description: "Color-coded status badges (Low Risk, Moderate Risk, High Risk) with exact probability scores.", isImplemented: true },
      { title: "Metabolic Reference Guidance", description: "Automated status tags comparing user inputs against WHO and ADA clinical reference ranges.", isImplemented: true },
      { title: "Model Performance Dashboard", description: "Seaborn Gini feature importance barplots, confusion matrix heatmaps, and ROC-AUC metrics.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Screening & Inference Module",
        role: "Clinicians and patients assessing diabetes risk",
        capabilities: ["Demo patient auto-fills", "Feature normalization via StandardScaler", "Random Forest inference", "Lifestyle guidance cards"]
      },
      {
        name: "Historical Analytics Module",
        role: "Tracking screening distributions over time",
        capabilities: ["Donut chart distribution of logged assessments", "Average glucose/BMI comparisons", "CSV history export"]
      }
    ],
    techStackBreakdown: [
      { category: "Programming & Framework", technologies: ["Python 3.11+", "Streamlit"], description: "Core data science programming and reactive web UI." },
      { category: "Machine Learning", technologies: ["Scikit-learn", "RandomForestClassifier", "StandardScaler"], description: "Ensemble classification and numerical feature standardization." },
      { category: "Data Science & Plotting", technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn"], description: "Array operations, statistical distributions, and heatmap charting." }
    ],
    systemArchitecture: {
      overview: "Standard scientific pipeline running in Streamlit: Clinical Input → StandardScaler → RandomForestClassifier → Risk Probability & Metrics.",
      frontendArchitecture: "Multi-page Streamlit layout with responsive 4-column metric grids.",
      backendArchitecture: "Serialized model artifacts: `diabetes_model.pkl`, `scaler.pkl`, and `model_metrics.json`.",
      dataFlowDescription: "User inputs clinical values → `StandardScaler` standardizes features → `RandomForestClassifier` outputs probability → UI renders risk tier card.",
      architectureDiagram:
        `[Patient Clinical Inputs (8 Features)]
                     │
                     ▼
       [StandardScaler Normalization]
                     │
                     ▼
       [Random Forest Classifier (100 Trees)]
                     │
        ┌────────────┴────────────┐
        ▼                         ▼
 [Risk Probability %]    [Feature Importance Ranking]
        │                         │
        └────────────┬────────────┘
                     ▼
      [CareAI Diagnostic Dashboard (Low / Mod / High)]`
    },
    databaseDesign: {
      dbType: "CSV History Persistence",
      summary: "Screening records logged to `data/prediction_history.csv` with timestamps and clinical values.",
      tables: []
    },
    apiEndpoints: [],
    authenticationAndSecurity: {
      authModel: "Clinical screening tool with medical disclaimer notices",
      securityMeasures: ["Explicit disclaimer emphasizing screening use rather than definitive diagnosis."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Input Clinical Data", description: "User enters metabolic markers or clicks demo preset." },
      { stepNumber: 2, title: "Risk Inference", description: "Model processes inputs and computes probability percentage." },
      { stepNumber: 3, title: "Review Guidance", description: "User inspects metabolic status tags and clinical lifestyle recommendations." }
    ],
    implementationAndTesting: {
      testingStrategy: "Evaluated on benchmark diabetes dataset; achieved ~88% accuracy, 80% precision, 76.5% recall, 78.2% F1-score, and 95.3% ROC-AUC.",
      verificationStatus: "Verified against repository source code, training script, and model artifacts."
    },
    challengesAndSolutions: [
      { challenge: "Disproportionate variance across features (e.g. Glucose vs. DPF).", solution: "Fitted a `StandardScaler` pipeline to normalize all 8 inputs to zero mean and unit variance." }
    ],
    limitations: ["Trained primarily on adult demographic data."],
    futureEnhancements: ["Integration of longitudinal HbA1c tracking and dietary meal logging."]
  },

  "email-spam-detection": {
    slug: "email-spam-detection",
    name: "Email & SMS Spam Detection System",
    tagline: "Natural Language Processing Classifier Achieving 100% Precision on Legitimate Messages",
    category: "AI/ML",
    subCategory: "NLP & Cybersecurity",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Email-Spam-Detection-System",
    architecturePdfUrl: "/documents/architecture/email-spam-detection-architecture.pdf",
    overview:
      "The Email & SMS Spam Detection System is an end-to-end Machine Learning and NLP web application built with Python, Scikit-learn, and Streamlit. It automatically analyzes message text in real time to classify messages as SPAM or HAM using TF-IDF feature extraction and a Multinomial Naive Bayes classifier tuned for 100% precision on legitimate communications.",
    problemStatement:
      "Spam communications expose users to phishing scams, identity theft, and malware, while aggressive spam filters risk discarding critical legitimate messages.",
    objectives: [
      "Develop a lightweight NLP classifier for spam detection.",
      "Achieve 100% precision on legitimate messages (Ham) to avoid false positive flags.",
      "Provide clean Streamlit sidebar navigation across single message and batch CSV modes."
    ],
    proposedSolution:
      "An NLTK and Scikit-learn pipeline transforming raw text into TF-IDF vectors, evaluated by a Multinomial Naive Bayes model with Laplace smoothing.",
    mainFeatures: [
      { title: "Single Message Scanner", description: "Real-time classification with probability meters and tokenized word previews.", isImplemented: true },
      { title: "Batch CSV Processing", description: "Upload CSV spreadsheets containing multiple messages for automated batch classification.", isImplemented: true },
      { title: "100% Ham Precision", description: "Calibrated decision threshold to guarantee legitimate emails are never falsely flagged as spam.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Text Preprocessing & Classifier",
        role: "Message tokenization and categorization",
        capabilities: ["Punctuation and stop-word filtering", "TF-IDF matrix generation", "Multinomial Naive Bayes scoring"]
      }
    ],
    techStackBreakdown: [
      { category: "Language & Web", technologies: ["Python 3.9 - 3.13", "Streamlit 1.28+"], description: "Core application runtime and user interface." },
      { category: "NLP & ML", technologies: ["Scikit-learn 1.3+", "NLTK", "Pandas", "Matplotlib"], description: "Feature engineering, model training, and performance plots." }
    ],
    systemArchitecture: {
      overview: "Streamlit UI wrapping a serialized Scikit-learn TF-IDF Vectorizer and Multinomial Naive Bayes model.",
      frontendArchitecture: "Sidebar-navigated Streamlit dashboard with tabs for Predictor, Batch Analyzer, and Model Info.",
      backendArchitecture: "Scikit-learn pipeline persisted with Joblib.",
      dataFlowDescription: "Input message → text normalization → TF-IDF vectorization → Naive Bayes classification → output badge.",
      architectureDiagram:
        `[Message Text] ──> [NLTK Stopword Filter] ──> [TF-IDF Vectorizer] ──> [MultinomialNB] ──> [SPAM / HAM Verdict]`
    },
    databaseDesign: {
      dbType: "File-based Persistence",
      summary: "Serialized pipeline artifacts (`spam_model.pkl`, `vectorizer.pkl`).",
      tables: []
    },
    apiEndpoints: [],
    authenticationAndSecurity: {
      authModel: "Public interactive NLP scanner",
      securityMeasures: ["Input length caps to prevent memory denial-of-service."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Message Entry", description: "User enters email body or SMS message." },
      { stepNumber: 2, title: "Classification", description: "TF-IDF vectorizer extracts features; Naive Bayes outputs classification." }
    ],
    implementationAndTesting: {
      testingStrategy: "Benchmarked on SMS spam collection dataset; achieved 100% precision on legitimate messages.",
      verificationStatus: "Verified against live repository code and training scripts."
    },
    challengesAndSolutions: [
      { challenge: "Eliminating false positives on critical business emails.", solution: "Calibrated Naive Bayes probability threshold and verified zero false positives on test splits." }
    ],
    limitations: ["Does not scan attached executable files or malicious URLs directly."],
    futureEnhancements: ["Email header metadata parsing (SPF/DKIM/DMARC) alongside body text."]
  },

  "handwritten-digit-recognition": {
    slug: "handwritten-digit-recognition",
    name: "Handwritten Digit Recognition System",
    tagline: "Deep Convolutional Neural Network (~99.1% Test Accuracy) with Interactive Drawing Canvas",
    category: "AI/ML",
    subCategory: "Deep Learning & Computer Vision",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/Handwritten-Digit-Recognition-System",
    architecturePdfUrl: "/documents/architecture/handwritten-digit-recognition-architecture.pdf",
    overview:
      "The Handwritten Digit Recognition System is an interactive deep learning web application built using Python, Streamlit, and TensorFlow/Keras (Convolutional Neural Network - CNN) to recognize handwritten numeric digits (0–9) in real time. It features a freehand drawing canvas, automated MNIST standardization (bounding box extraction, aspect-ratio scaling, center-of-mass alignment), and an interactive Plotly probability distribution bar chart.",
    problemStatement:
      "Automating digit recognition across handwritten documents, bank checks, and postal mail requires models robust against diverse pen stroke widths, angles, and alignments.",
    objectives: [
      "Provide an interactive drawing canvas supporting mouse, stylus, or touchscreen input.",
      "Preprocess freehand drawings into canonical MNIST format (28x28 grayscale, centered by center of mass).",
      "Train a 4-layer Convolutional Neural Network with Dropout and Batch Normalization achieving ~99.1% test accuracy.",
      "Render real-time Plotly probability distributions across all 10 digits."
    ],
    proposedSolution:
      "A complete computer vision pipeline using `streamlit-drawable-canvas` and OpenCV image transformations, evaluated by a TensorFlow CNN model trained on the Yann LeCun MNIST benchmark.",
    mainFeatures: [
      { title: "Interactive Drawing Canvas", description: "Custom stroke width slider (12px to 36px), pen/eraser tools, and dark/light canvas modes.", isImplemented: true },
      { title: "MNIST Standardization Engine", description: "Extracts digit bounding box, scales to 20x20 maintaining aspect ratio, pads to 28x28, and centers using center of mass.", isImplemented: true },
      { title: "4-Layer CNN Architecture", description: "Two Conv2D blocks with Batch Normalization, Max Pooling, and Dropout regularization (~99.1% test accuracy).", isImplemented: true },
      { title: "Plotly Probability Distribution", description: "Displays confidence percentage breakdown across all 10 digits with top-3 alternatives.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Canvas & Image Preprocessor",
        role: "Capturing and normalizing drawing strokes",
        capabilities: ["Canvas stroke capture", "OpenCV bounding box extraction", "Center of mass centering", "Tensor normalization to [0.0, 1.0]"]
      },
      {
        name: "Deep Learning Classifier",
        role: "TensorFlow CNN inference",
        capabilities: ["Batch inference on (1, 28, 28, 1) tensor", "Softmax probability distribution", "Training curve visualization"]
      }
    ],
    techStackBreakdown: [
      { category: "Deep Learning Framework", technologies: ["TensorFlow", "Keras (CNN)", "MNIST Benchmark"], description: "Convolutional neural network training and model persistence." },
      { category: "Computer Vision & Canvas", technologies: ["OpenCV", "Streamlit Drawable Canvas", "Pillow"], description: "Image manipulation, aspect ratio scaling, and canvas capture." },
      { category: "Application Runtime", technologies: ["Python", "Streamlit", "Plotly", "NumPy"], description: "Reactive web UI and probability charting." }
    ],
    systemArchitecture: {
      overview: "Interactive drawing → OpenCV standardization → TensorFlow CNN tensor inference → Plotly probability visualization.",
      frontendArchitecture: "Streamlit interface with interactive canvas component and side-by-side preprocessed input preview.",
      backendArchitecture: "Keras `.h5` model loaded via TensorFlow runtime.",
      dataFlowDescription: "Canvas drawing converted to grayscale → bounding box resized to 20x20 → padded to 28x28 → center of mass calculated → normalized to [0,1] → CNN predicts digit.",
      architectureDiagram:
        `[Drawing Canvas (RGB)] ──> [Grayscale & Bounding Box]
                                  │
                                  ▼
                [Aspect-Ratio Resize to 20x20 & Pad to 28x28]
                                  │
                                  ▼
                    [Center of Mass Alignment]
                                  │
                                  ▼
            [Conv2D (32) + BatchNorm] x2 ──> [MaxPool (0.25 Dropout)]
                                  │
                                  ▼
            [Conv2D (64) + BatchNorm] x2 ──> [MaxPool (0.25 Dropout)]
                                  │
                                  ▼
            [Dense (256, 0.5 Dropout)] ──> [Softmax Dense (10)]
                                  │
                                  ▼
             [Predicted Digit Badge & Plotly Probabilities]`
    },
    databaseDesign: {
      dbType: "Session State & Persistent Logs",
      summary: "Prediction records logged with timestamps, source types, and predicted digits.",
      tables: []
    },
    apiEndpoints: [],
    authenticationAndSecurity: {
      authModel: "Interactive public demonstration tool",
      securityMeasures: ["Client-side canvas rendering prevents server-side image execution exploits."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Draw Digit", description: "User draws digit (0-9) on interactive canvas or uploads an image." },
      { stepNumber: 2, title: "Standardization", description: "OpenCV centers digit using center of mass and resizes to 28x28." },
      { stepNumber: 3, title: "Inference", description: "CNN predicts digit with confidence percentage and Plotly probability chart." }
    ],
    implementationAndTesting: {
      testingStrategy: "Evaluated on 10,000 MNIST test samples; achieved ~99.1% test accuracy with robust loss convergence.",
      verificationStatus: "Verified against live repository code, Keras model architecture, and Streamlit canvas implementation."
    },
    challengesAndSolutions: [
      { challenge: "Freehand drawings placed off-center or drawn small produced degraded CNN accuracy.", solution: "Implemented center-of-mass alignment matching Yann LeCun's exact MNIST benchmark preprocessing pipeline." }
    ],
    limitations: ["Optimized for isolated single digits; does not perform multi-digit segmentation."],
    futureEnhancements: ["Support for continuous multi-digit equation solving."]
  },

  "house-price-prediction": {
    slug: "house-price-prediction",
    name: "House Price Prediction System",
    tagline: "Real Estate Multi-Variable Valuation Engine Benchmarking Linear Regression vs. Random Forest",
    category: "AI/ML",
    subCategory: "Predictive Regression",
    status: "Implemented & Verified",
    githubUrl: "https://github.com/rakshapatil526/House-Price-Prediction",
    architecturePdfUrl: "/documents/architecture/house-price-prediction-architecture.pdf",
    overview:
      "The House Price Prediction application is an end-to-end Machine Learning web application designed for real estate valuation. Built with Scikit-learn, Pandas, and Streamlit, it features multi-variable continuous regression based on area, bedrooms, bathrooms, floors, property age, and neighborhood location across Bengaluru.",
    problemStatement:
      "Property buyers and sellers struggle with subjective, opaque real estate pricing that fails to account for compound location and structural factors.",
    objectives: [
      "Process categorical location variables (Whitefield, Indiranagar, Koramangala, etc.) and continuous features.",
      "Build a Scikit-learn ColumnTransformer pipeline with OneHotEncoder and StandardScaler.",
      "Benchmark Linear Regression against Random Forest Regressor to minimize valuation error.",
      "Provide a persistent prediction history dashboard with CSV logging."
    ],
    proposedSolution:
      "A Streamlit interface executing feature transformation through a trained Scikit-learn ColumnTransformer and regression model.",
    mainFeatures: [
      { title: "Multi-Variable Property Inputs", description: "Specify living area (sq.ft.), bedrooms, bathrooms, floors, age, and neighborhood location.", isImplemented: true },
      { title: "Model Selector", description: "Choose between Linear Regression, Random Forest, or Best Model (Auto).", isImplemented: true },
      { title: "Valuation Specification Card", description: "Estimated price displayed in Lakhs INR with itemized property attribute summaries.", isImplemented: true },
      { title: "Persistent History Log", description: "All property evaluations logged to CSV with timestamp and location details.", isImplemented: true }
    ],
    functionalModules: [
      {
        name: "Valuation & Estimation Engine",
        role: "Real estate valuation calculator",
        capabilities: ["Feature transformation", "Regression inference", "Historical logging to CSV"]
      }
    ],
    techStackBreakdown: [
      { category: "Machine Learning", technologies: ["Scikit-learn", "ColumnTransformer", "RandomForestRegressor", "OneHotEncoder"], description: "Feature engineering and regression modeling." },
      { category: "Web Interface", technologies: ["Python", "Streamlit", "Pandas", "Matplotlib"], description: "Reactive valuation interface and historical tabular view." }
    ],
    systemArchitecture: {
      overview: "Streamlit UI → ColumnTransformer (OneHotEncoder + StandardScaler) → Random Forest Regressor → Valuation Output.",
      frontendArchitecture: "Multi-module Streamlit application (Home, Predict Price, Prediction History).",
      backendArchitecture: "Serialized Scikit-learn pipeline saved with Joblib.",
      dataFlowDescription: "User inputs property specifications → ColumnTransformer encodes location and scales numerical inputs → Regressor estimates valuation.",
      architectureDiagram:
        `[Property Specifications (Location, Area, Rooms, Age)]
                               │
                               ▼
        [ColumnTransformer: OneHotEncoder + StandardScaler]
                               │
                               ▼
                   [Random Forest Regressor]
                               │
                               ▼
             [Estimated Property Price (Lakhs INR)]`
    },
    databaseDesign: {
      dbType: "CSV History Logging",
      summary: "Inquiries saved to `data/prediction_history.csv` with timestamp, location, area, and estimated valuation.",
      tables: []
    },
    apiEndpoints: [],
    authenticationAndSecurity: {
      authModel: "Public interactive tool",
      securityMeasures: ["Numerical input range constraints preventing unrealistic valuations."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Property Attributes", description: "User enters area, rooms, age, and selects neighborhood." },
      { stepNumber: 2, title: "Valuation Calculation", description: "Machine learning regressor estimates market valuation." },
      { stepNumber: 3, title: "History Logging", description: "Valuation quote recorded to persistent spreadsheet log." }
    ],
    implementationAndTesting: {
      testingStrategy: "Evaluated using R² score and Root Mean Squared Error (RMSE) across test splits.",
      verificationStatus: "Verified against live repository code and training scripts."
    },
    challengesAndSolutions: [
      { challenge: "Encoding categorical neighborhood locations without creating artificial numerical ordering.", solution: "Employed Scikit-learn `OneHotEncoder(handle_unknown='ignore')` inside a `ColumnTransformer`." }
    ],
    limitations: ["Valuation model is tuned specifically for Bengaluru suburban real estate patterns."],
    futureEnhancements: ["Integration of real-time market inflation indices and proximity to metro stations."]
  },

  "student-performance-prediction": {
    slug: "student-performance-prediction",
    name: "Student Performance Prediction",
    tagline: "Academic Early-Warning Classification Modeling for Educational Data Mining",
    category: "AI/ML",
    subCategory: "Educational Data Mining",
    status: "Architecture Blueprint / Pending Verification",
    githubUrl: "https://github.com/rakshapatil526/Student-Performance-Prediction",
    architecturePdfUrl: "/documents/architecture/student-performance-prediction-architecture.pdf",
    overview:
      "The Student Performance Prediction initiative aims to predict student semester outcomes based on attendance patterns, internal assessment scores, study hours, and academic history. Repository inspection confirms that the repository link is valid; however, the repository README currently mirrors the Student Management System (Attenda). Dedicated ML model pipelines and evaluation metrics require repository verification and are documented here as planned architecture.",
    problemStatement:
      "Academic institutions often identify failing or at-risk students only after final semester examinations, when remedial interventions can no longer prevent course retakes.",
    objectives: [
      "Predict student final performance tiers (Distinction, Pass, Remedial).",
      "Identify key risk factors contributing to academic struggle (e.g. attendance < 75%).",
      "Provide actionable early-warning alerts for academic counselors."
    ],
    proposedSolution:
      "A Scikit-learn classification pipeline analyzing attendance, assignment scores, and prior GPA to classify students into performance risk tiers.",
    mainFeatures: [
      { title: "Academic Risk Factor Analysis", description: "Identifies early warning indicators based on low attendance and missed assignments.", isImplemented: false },
      { title: "Performance Tier Classifier", description: "Machine learning model predicting final grade point average categories.", isImplemented: false }
    ],
    functionalModules: [
      { name: "Academic Early Warning Engine", role: "Counselors reviewing student performance forecasts", capabilities: ["Risk classification", "Feature weight analysis"] }
    ],
    techStackBreakdown: [
      { category: "Machine Learning Stack", technologies: ["Python", "Scikit-learn", "Classification Algorithms", "Pandas"], description: "Feature engineering and decision tree modeling." }
    ],
    systemArchitecture: {
      overview: "Standard educational data mining pipeline: Academic Inputs → Preprocessing → Classifier → Performance Tier Output.",
      frontendArchitecture: "Planned dashboard with student risk heatmaps.",
      backendArchitecture: "Scikit-learn classification model.",
      dataFlowDescription: "Student metrics collected → processed through classifier → outputs risk probability and recommendations.",
      architectureDiagram:
        `[Attendance, Internal Marks, Study Hours] ──> [Scikit-learn Classifier] ──> [Academic Risk Status]`
    },
    databaseDesign: {
      dbType: "SQL / SQLite",
      summary: "Academic performance dataset tables.",
      tables: []
    },
    apiEndpoints: [],
    authenticationAndSecurity: {
      authModel: "Role-scoped academic counselor access",
      securityMeasures: ["FERPA/data privacy compliance planned for student academic records."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Data Collection", description: "Mid-semester attendance and assessment scores aggregated." },
      { stepNumber: 2, title: "Risk Inference", description: "Model identifies students requiring remedial counseling." }
    ],
    implementationAndTesting: {
      testingStrategy: "Planned cross-validation testing across historical student cohorts.",
      verificationStatus: "Repository link verified at `https://github.com/rakshapatil526/Student-Performance-Prediction`. Notice: Dedicated ML training scripts require repository verification."
    },
    challengesAndSolutions: [
      { challenge: "Distinguishing between Student Management System and Student Performance Prediction.", solution: "Maintained clear architectural boundary and explicit documentation notes." }
    ],
    limitations: ["Model metrics and training datasets require repository synchronization."],
    futureEnhancements: ["Automated intervention suggestions linked to campus tutoring schedules."]
  },

  "movie-recommendation": {
    slug: "movie-recommendation",
    name: "Movie Recommendation System",
    tagline: "Content-Based Filtering & Cosine Vector Similarity Across Metadata Tags and Plot Summaries",
    category: "AI/ML",
    subCategory: "Recommender Systems & NLP",
    status: "Architecture Blueprint / Pending Verification",
    githubUrl: null,
    architecturePdfUrl: "/documents/architecture/movie-recommendation-architecture.pdf",
    overview:
      "The Movie Recommendation System specifies a content-based recommendation platform utilizing natural language processing, TF-IDF vectorization, and cosine similarity across movie metadata attributes (genres, directors, cast members, and plot summaries).",
    problemStatement:
      "Digital streaming platforms contain thousands of titles, causing user decision fatigue without personalized recommendation engines.",
    objectives: [
      "Combine cleaned genres, director names, top cast, and plot keywords into unified metadata tags.",
      "Transform tag strings into high-dimensional vector representations.",
      "Compute pairwise cosine similarity matrices to retrieve nearest neighbor titles."
    ],
    proposedSolution:
      "A content-based filtering model computing angular distances between movie vectors, returning the top-10 most similar titles.",
    mainFeatures: [
      { title: "Metadata Tag Fusion", description: "Combines genre tokens, director names, and synopsis keywords into unified tag vectors.", isImplemented: false },
      { title: "Cosine Similarity Matrix", description: "Calculates angular distance between movies to recommend nearest thematic matches.", isImplemented: false }
    ],
    functionalModules: [
      { name: "Recommendation Engine", role: "Recommender service", capabilities: ["Metadata vectorization", "Top-K similarity lookup"] }
    ],
    techStackBreakdown: [
      { category: "ML & NLP", technologies: ["Python", "Scikit-learn", "Cosine Similarity", "Pandas", "Streamlit"], description: "Vectorization and recommendation inference." }
    ],
    systemArchitecture: {
      overview: "Content-based recommender: Movie Metadata → Tag Synthesis → TF-IDF → Cosine Similarity Matrix → Top-10 Titles.",
      frontendArchitecture: "Streamlit movie poster grid with dropdown title selector.",
      backendArchitecture: "Precomputed similarity matrix saved as serialized pickle file.",
      dataFlowDescription: "User selects title → system indexes similarity row → returns top 10 highest cosine scores.",
      architectureDiagram:
        `[Movie Metadata (Genre, Cast, Plot)] ──> [TF-IDF Vectorizer] ──> [Cosine Similarity Matrix] ──> [Top-10 Recommendations]`
    },
    databaseDesign: {
      dbType: "Serialized DataFrame (Pickle)",
      summary: "Movie metadata and similarity matrix.",
      tables: []
    },
    apiEndpoints: [],
    authenticationAndSecurity: {
      authModel: "Public interactive recommender",
      securityMeasures: ["Read-only matrix indexing prevents execution overhead."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Select Movie", description: "User searches for a movie they enjoy." },
      { stepNumber: 2, title: "Calculate Similarity", description: "Engine retrieves nearest neighbor vectors." },
      { stepNumber: 3, title: "Display Recommendations", description: "System displays top 10 recommended titles with similarity scores." }
    ],
    implementationAndTesting: {
      testingStrategy: "Cross-checked recommendations for genre and director fidelity.",
      verificationStatus: "Repository URL pending publication. Architecture defined per project blueprint."
    },
    challengesAndSolutions: [
      { challenge: "Managing large N x N similarity matrices in memory.", solution: "Optimized data types to float32 and precomputed top-50 nearest neighbors." }
    ],
    limitations: ["Repository link is currently pending publication."],
    futureEnhancements: ["Collaborative filtering hybrid model incorporating user rating histories."]
  },

  "traffic-sign-recognition": {
    slug: "traffic-sign-recognition",
    name: "Traffic Sign Recognition System",
    tagline: "Deep Convolutional Neural Network for Autonomous Driving Road Sign Classification",
    category: "AI/ML",
    subCategory: "Autonomous Systems & CV",
    status: "Architecture Blueprint / Pending Verification",
    githubUrl: null,
    architecturePdfUrl: "/documents/architecture/traffic-sign-recognition-architecture.pdf",
    overview:
      "The Traffic Sign Recognition System specifies a deep learning computer vision model designed to classify road traffic signs (speed limits, stop, yield, warnings, prohibitions) for autonomous vehicles and Advanced Driver Assistance Systems (ADAS).",
    problemStatement:
      "Autonomous systems must accurately identify road signs under adverse weather, motion blur, and variable illumination conditions to ensure vehicle safety.",
    objectives: [
      "Preprocess road sign imagery using CLAHE adaptive contrast enhancement.",
      "Train a deep CNN architecture on canonical traffic sign benchmark datasets.",
      "Deliver real-time inference on uploaded road photos or video frames."
    ],
    proposedSolution:
      "A multi-layer Convolutional Neural Network with data augmentation (rotations, zooms) and Softmax classification across road sign categories.",
    mainFeatures: [
      { title: "Image Standardization & CLAHE", description: "Adaptive contrast equalization to handle extreme sunlight and nighttime lighting.", isImplemented: false },
      { title: "Deep CNN Classification", description: "Convolutional layers with dropout regularization classifying road sign types.", isImplemented: false }
    ],
    functionalModules: [
      { name: "Computer Vision Classifier", role: "Image analysis pipeline", capabilities: ["Image preprocessing", "CNN inference", "Bounding box visualization"] }
    ],
    techStackBreakdown: [
      { category: "Computer Vision & DL", technologies: ["Python", "Streamlit", "TensorFlow / Keras", "OpenCV", "CNN"], description: "Deep learning model and image processing." }
    ],
    systemArchitecture: {
      overview: "Road Image → OpenCV CLAHE Enhancement → CNN Feature Extraction → Softmax Category Classification.",
      frontendArchitecture: "Streamlit image upload and camera input interface.",
      backendArchitecture: "TensorFlow Keras model executing inference.",
      dataFlowDescription: "Image captured → standardized to 32x32 → fed to CNN → traffic sign label and safety warning displayed.",
      architectureDiagram:
        `[Road Sign Photo] ──> [OpenCV CLAHE Equalizer] ──> [Deep CNN Architecture] ──> [Traffic Sign Class & Action]`
    },
    databaseDesign: {
      dbType: "Model Weights & Sign Dictionary",
      summary: "Serialized model weights and dictionary mapping 43 sign category codes to text descriptions.",
      tables: []
    },
    apiEndpoints: [],
    authenticationAndSecurity: {
      authModel: "Public vision testing tool",
      securityMeasures: ["Image file type whitelist validation."]
    },
    workflowSteps: [
      { stepNumber: 1, title: "Upload Image", description: "User uploads photo of road sign." },
      { stepNumber: 2, title: "Preprocess & Infer", description: "OpenCV standardizes image; CNN classifies sign category." }
    ],
    implementationAndTesting: {
      testingStrategy: "Benchmarking across German Traffic Sign Recognition Benchmark (GTSRB).",
      verificationStatus: "Repository URL pending publication. Architecture defined per project blueprint."
    },
    challengesAndSolutions: [
      { challenge: "Poor lighting in dusk and night driving imagery.", solution: "Applied Contrast Limited Adaptive Histogram Equalization (CLAHE) in the preprocessing pipeline." }
    ],
    limitations: ["Repository link is currently pending publication."],
    futureEnhancements: ["Integration with real-time dashcam video streaming."]
  }
};
