export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: "Full Stack" | "AI/ML";
  subCategory?: string;
  shortDescription: string;
  technologies: string[];
  githubUrl: string | null;
  isRepoVerified: boolean;
  architecturePdfUrl: string;
  isPdfReady: boolean;
  featured: boolean;
  accentColor: string;
  iconName: string;
}

export const ALL_PROJECTS: ProjectItem[] = [
  // ==========================================
  // FULL STACK PROJECTS (11 total)
  // ==========================================
  {
    id: "jobconnect-ai",
    slug: "jobconnect-ai",
    name: "JobConnect AI",
    category: "Full Stack",
    subCategory: "Recruitment & Applied AI",
    shortDescription:
      "Full-stack recruitment and career platform with role-based workflows for job seekers, recruiters, and admins. Features ATS resume scoring, TF-IDF candidate matching, and ReportLab PDF generators.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Scikit-learn",
      "TF-IDF",
      "SimpleJWT",
      "ReportLab"
    ],
    githubUrl: "https://github.com/rakshapatil526/JobConnect-AI-Job-Portal",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/jobconnect-ai-architecture.pdf",
    isPdfReady: true,
    featured: true,
    accentColor: "from-blue-600 to-cyan-500",
    iconName: "Briefcase"
  },
  {
    id: "smartcare-hms",
    slug: "smartcare-hms",
    name: "SmartCare HMS",
    category: "Full Stack",
    subCategory: "Enterprise Healthcare",
    shortDescription:
      "Enterprise hospital management system supporting 16 user roles, OPD/IPD workflows, electronic health records (EHR), LIS lab orders, RIS radiology, pharmacy dispensing, and AI clinical decision support.",
    technologies: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "SimpleJWT",
      "AI Clinical CDS"
    ],
    githubUrl:
      "https://github.com/rakshapatil526/Smart-HMS-Integreted-enterprise-Hospital-Manegment-System-and-digitalcare-Administrate",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/smartcare-hms-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-emerald-600 to-teal-500",
    iconName: "Activity"
  },
  {
    id: "restaurant-management",
    slug: "restaurant-management",
    name: "Restaurant Management System",
    category: "Full Stack",
    subCategory: "E-Commerce & Food Service",
    shortDescription:
      "Full-stack food delivery and restaurant operations platform with dynamic menu categories, cart and checkout flows, veg/non-veg filtering, order tracking, and sales analytics.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "SimpleJWT"
    ],
    githubUrl: "https://github.com/rakshapatil526/Restaurant-Management-System",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/restaurant-management-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-amber-600 to-orange-500",
    iconName: "Utensils"
  },
  {
    id: "library-management",
    slug: "library-management",
    name: "Library Management System",
    category: "Full Stack",
    subCategory: "Information Systems",
    shortDescription:
      "Academic library management system tracking bibliographic book inventories, student borrowing records, automated overdue fine computations, and availability states.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Axios"
    ],
    githubUrl: "https://github.com/rakshapatil526/Library-Management-System",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/library-management-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-indigo-600 to-blue-500",
    iconName: "BookOpen"
  },
  {
    id: "student-management",
    slug: "student-management",
    name: "Student Management System",
    category: "Full Stack",
    subCategory: "Academic Administration",
    shortDescription:
      "Institutional student records system featuring multi-section enrollment forms, departmental cascading dropdowns, semester CGPA scorecards, and Chart.js distribution charts.",
    technologies: [
      "Python",
      "Django",
      "HTML5",
      "CSS3",
      "JavaScript",
      "SQLite",
      "Chart.js"
    ],
    githubUrl: "https://github.com/rakshapatil526/Student-Management-System",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/student-management-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-sky-600 to-indigo-500",
    iconName: "GraduationCap"
  },
  {
    id: "event-management",
    slug: "event-management",
    name: "Event Management System",
    category: "Full Stack",
    subCategory: "Event Operations",
    shortDescription:
      "Comprehensive event planning and ticketing platform for managing conference schedules, attendee registrations, venue capacities, and ticket tier allocations.",
    technologies: [
      "React.js",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "RESTful APIs"
    ],
    githubUrl: null, // Pending repository verification
    isRepoVerified: false,
    architecturePdfUrl: "/documents/architecture/event-management-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-violet-600 to-purple-500",
    iconName: "Calendar"
  },
  {
    id: "taskflow",
    slug: "taskflow",
    name: "TaskFlow — To-Do List",
    category: "Full Stack",
    subCategory: "Productivity & Workflow",
    shortDescription:
      "Production-grade task management system with user-level data isolation, priority matrices, due date validations, and real-time dashboard progress metrics.",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "SimpleJWT"
    ],
    githubUrl: "https://github.com/rakshapatil526/TaskFlow-To-Do-List-",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/taskflow-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-cyan-600 to-blue-500",
    iconName: "CheckSquare"
  },
  {
    id: "expense-tracker",
    slug: "expense-tracker",
    name: "Expense Tracker",
    category: "Full Stack",
    subCategory: "Personal Finance",
    shortDescription:
      "Fullstack personal finance application with categorized income/expense logging, monthly budget thresholds, interactive Recharts visualizations, and Docker deployment.",
    technologies: [
      "React.js",
      "Vite",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Recharts",
      "Docker"
    ],
    githubUrl: "https://github.com/rakshapatil526/Expense-Tracker-",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/expense-tracker-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-emerald-600 to-green-500",
    iconName: "DollarSign"
  },
  {
    id: "travel-agency",
    slug: "travel-agency",
    name: "Travel Agency System",
    category: "Full Stack",
    subCategory: "Hospitality & Booking",
    shortDescription:
      "Online travel booking and itinerary coordination portal enabling holiday package discovery, date selections, passenger reservations, and destination catalogs.",
    technologies: [
      "React.js",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "RESTful APIs"
    ],
    githubUrl: null, // Pending repository verification
    isRepoVerified: false,
    architecturePdfUrl: "/documents/architecture/travel-agency-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-teal-600 to-cyan-500",
    iconName: "Compass"
  },

  // ==========================================
  // AI / ML PROJECTS (9 total)
  // ==========================================
  {
    id: "ai-quiz-system",
    slug: "ai-quiz-system",
    name: "AI Quiz System",
    category: "AI/ML",
    subCategory: "NLP & EdTech ML",
    shortDescription:
      "AI study platform extracting content from PDFs/DOCX/PPTX to automatically generate summaries, key formulas, flashcards, dynamic quizzes, and predictive student performance models.",
    technologies: [
      "Python",
      "Django",
      "React.js",
      "Vite",
      "Scikit-learn",
      "Random Forest",
      "K-Means",
      "PyMuPDF",
      "Tesseract OCR"
    ],
    githubUrl: "https://github.com/rakshapatil526/AI-Quiz-System",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/ai-quiz-system-architecture.pdf",
    isPdfReady: true,
    featured: true,
    accentColor: "from-purple-600 to-pink-500",
    iconName: "Sparkles"
  },
  {
    id: "fake-news-detector",
    slug: "fake-news-detector",
    name: "Fake News Detection",
    category: "AI/ML",
    subCategory: "NLP & Text Classification",
    shortDescription:
      "Natural language processing application analyzing news text credibility using TF-IDF feature extraction, Porter stemming, and a dual-consensus ensemble of Naive Bayes and Logistic Regression.",
    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "NLP",
      "NLTK",
      "TF-IDF",
      "MultinomialNB",
      "Logistic Regression",
      "Plotly"
    ],
    githubUrl: "https://github.com/rakshapatil526/Fake-News-Detection-System",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/fake-news-detector-architecture.pdf",
    isPdfReady: true,
    featured: true,
    accentColor: "from-rose-600 to-red-500",
    iconName: "ShieldAlert"
  },
  {
    id: "diabetes-risk-prediction",
    slug: "diabetes-risk-prediction",
    name: "Diabetes Risk Prediction",
    category: "AI/ML",
    subCategory: "Clinical ML & Healthcare",
    shortDescription:
      "Machine learning clinical screening dashboard estimating diabetes risk tiers (~88% accuracy) using canonical metabolic markers, feature standardization, and WHO/ADA clinical benchmarks.",
    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "RandomForestClassifier",
      "StandardScaler",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
    githubUrl: "https://github.com/rakshapatil526/Diabetes-Risk-Prediction-System",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/diabetes-risk-prediction-architecture.pdf",
    isPdfReady: true,
    featured: true,
    accentColor: "from-emerald-600 to-cyan-500",
    iconName: "HeartPulse"
  },
  {
    id: "email-spam-detection",
    slug: "email-spam-detection",
    name: "Email Spam Detection",
    category: "AI/ML",
    subCategory: "NLP & Cybersecurity",
    shortDescription:
      "AI text classification system that filters phishing and malicious communications from legitimate messages using TF-IDF vectorization and Multinomial Naive Bayes with 100% ham precision.",
    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "NLTK",
      "TF-IDF Vectorizer",
      "MultinomialNB",
      "Pandas"
    ],
    githubUrl: "https://github.com/rakshapatil526/Email-Spam-Detection-System",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/email-spam-detection-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-indigo-600 to-purple-500",
    iconName: "Mail"
  },
  {
    id: "handwritten-digit-recognition",
    slug: "handwritten-digit-recognition",
    name: "Handwritten Digit Recognition",
    category: "AI/ML",
    subCategory: "Deep Learning & Computer Vision",
    shortDescription:
      "Interactive deep learning canvas powered by a 4-layer Convolutional Neural Network (CNN) trained on MNIST (~99.1% test accuracy) for real-time digit recognition and probability distributions.",
    technologies: [
      "Python",
      "Streamlit",
      "TensorFlow",
      "Keras (CNN)",
      "MNIST Dataset",
      "OpenCV",
      "Streamlit Canvas",
      "Plotly"
    ],
    githubUrl: "https://github.com/rakshapatil526/Handwritten-Digit-Recognition-System",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/handwritten-digit-recognition-architecture.pdf",
    isPdfReady: true,
    featured: true,
    accentColor: "from-blue-600 to-violet-500",
    iconName: "Edit3"
  },
  {
    id: "house-price-prediction",
    slug: "house-price-prediction",
    name: "House Price Prediction",
    category: "AI/ML",
    subCategory: "Predictive Regression",
    shortDescription:
      "Real estate valuation engine utilizing multi-variable regression with Scikit-learn ColumnTransformer, OneHotEncoder, and Random Forest Regressor to estimate Bengaluru property prices.",
    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "RandomForestRegressor",
      "ColumnTransformer",
      "Pandas",
      "Matplotlib"
    ],
    githubUrl: "https://github.com/rakshapatil526/House-Price-Prediction",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/house-price-prediction-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-amber-600 to-yellow-500",
    iconName: "Home"
  },
  {
    id: "student-performance-prediction",
    slug: "student-performance-prediction",
    name: "Student Performance Prediction",
    category: "AI/ML",
    subCategory: "Educational Data Mining",
    shortDescription:
      "Predictive academic modeling designed to identify at-risk students through multi-feature analysis of attendance, internal assessments, and historical study patterns.",
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Classification",
      "Pandas"
    ],
    githubUrl: "https://github.com/rakshapatil526/Student-Performance-Prediction",
    isRepoVerified: true,
    architecturePdfUrl: "/documents/architecture/student-performance-prediction-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-blue-600 to-teal-500",
    iconName: "TrendingUp"
  },
  {
    id: "movie-recommendation",
    slug: "movie-recommendation",
    name: "Movie Recommendation System",
    category: "AI/ML",
    subCategory: "Recommender Systems & NLP",
    shortDescription:
      "Content-based movie recommendation platform utilizing TF-IDF cosine vector similarity across genre tags, director metadata, and plot synopsis keywords.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Cosine Similarity",
      "NLP",
      "Pandas",
      "Streamlit"
    ],
    githubUrl: null, // Pending repository verification
    isRepoVerified: false,
    architecturePdfUrl: "/documents/architecture/movie-recommendation-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-fuchsia-600 to-pink-500",
    iconName: "Film"
  },
  {
    id: "traffic-sign-recognition",
    slug: "traffic-sign-recognition",
    name: "Traffic Sign Recognition",
    category: "AI/ML",
    subCategory: "Autonomous Systems & CV",
    shortDescription:
      "Deep convolutional neural network for automated classification of regulatory, cautionary, and prohibitory road traffic signs using image preprocessing and augmentation.",
    technologies: [
      "Python",
      "Streamlit",
      "TensorFlow / Keras",
      "CNN",
      "OpenCV",
      "Computer Vision"
    ],
    githubUrl: null, // Pending repository verification
    isRepoVerified: false,
    architecturePdfUrl: "/documents/architecture/traffic-sign-recognition-architecture.pdf",
    isPdfReady: true,
    featured: false,
    accentColor: "from-yellow-600 to-amber-500",
    iconName: "AlertTriangle"
  }
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);
export const FULL_STACK_PROJECTS = ALL_PROJECTS.filter((p) => p.category === "Full Stack");
export const AI_ML_PROJECTS = ALL_PROJECTS.filter((p) => p.category === "AI/ML");
