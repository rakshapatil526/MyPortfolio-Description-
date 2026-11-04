export interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePdfUrl: string;
  summary: string;
  aboutBio: string[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
    currentSemester: string;
    coursework: string[];
  };
  experience: {
    role: string;
    company: string;
    period: string;
    type: string;
    highlights: string[];
  }[];
  certifications: {
    title: string;
    issuer: string;
    period: string;
    description: string;
  }[];
  achievements: {
    title: string;
    event: string;
    description: string;
  }[];
  leadership: {
    category: string;
    description: string;
  }[];
  skillCategories: {
    name: string;
    skills: { name: string; level?: string }[];
  }[];
}

export const PROFILE_DATA: ProfileInfo = {
  name: "Rakshitha S",
  title: "Full-Stack Developer | AI/ML Enthusiast",
  location: "Bengaluru, Karnataka",
  phone: "+91 7349248807",
  phoneFormatted: "+91 73492 48807",
  email: "raksharakshitha02@gmail.com",
  githubUrl: "https://github.com/rakshapatil526",
  linkedinUrl: "https://www.linkedin.com/in/rakshitha-raksha",
  resumePdfUrl: "/documents/Rakshitha_S_Resume.pdf",
  summary:
    "Computer Science and Engineering student focused on full-stack development and AI/ML, with hands-on project experience building web applications using React, Django, Python, and relational databases. Familiar with REST API development, authentication, database design, data analysis, machine learning workflows, and computer-vision tools. Interested in developing practical, user-focused software that combines reliable application engineering with useful AI capabilities.",
  aboutBio: [
    "I am a Computer Science and Engineering student at Jnana Vikas Institute of Technology (CGPA 8.7/10, 7th Semester), deeply passionate about building end-to-end full-stack applications and intelligent AI/ML systems.",
    "My hands-on experience spans designing modular RESTful APIs with Django REST Framework, building reactive web interfaces with React and Tailwind CSS, and implementing machine learning pipelines with Scikit-learn, TensorFlow, and OpenCV.",
    "I believe great software balances clean architectural patterns, robust data integrity, and thoughtful user experience. Whether developing an enterprise hospital management platform or training computer vision classifiers, I focus on writing maintainable, production-ready code that solves real-world challenges."
  ],
  education: {
    degree: "B.E. in Computer Science and Engineering",
    institution: "Jnana Vikas Institute of Technology",
    location: "Bidadi, Bengaluru, Karnataka",
    period: "October 2023 – June 2027 (Expected)",
    cgpa: "8.7 / 10.0",
    currentSemester: "7th Semester",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "SQL & Relational Schema Design",
      "Python Programming",
      "Full Stack Web Development",
      "Operating Systems",
      "RESTful API Architecture"
    ]
  },
  experience: [
    {
      role: "Artificial Intelligence Intern",
      company: "Pinnacle Labs",
      period: "August 2025",
      type: "Virtual Internship (4-Week Intensive)",
      highlights: [
        "Completed a 4-week virtual internship in Artificial Intelligence, gaining hands-on exposure to core AI concepts and practical AI workflows.",
        "Worked on AI-related tasks and project activities, applying analytical thinking and problem-solving to real-world scenarios.",
        "Built familiarity with project-based development and translating conceptual algorithms into practical, functional solutions."
      ]
    }
  ],
  certifications: [
    {
      title: "Artificial Intelligence Internship",
      issuer: "Pinnacle Labs",
      period: "August 2025",
      description: "Completed 4-week virtual internship covering core AI concepts, practical ML workflows, and problem-solving methodologies."
    }
  ],
  achievements: [
    {
      title: "24-Hour Intercollegiate Hackathon",
      event: "Intercollegiate Technical Hackathon",
      description: "Participated in an intense 24-hour sprint; strengthened rapid prototyping, algorithmic problem-solving, cross-functional teamwork, and technical implementation under strict deadlines."
    }
  ],
  leadership: [
    {
      category: "Leadership & Teamwork",
      description: "Collaborated with cross-functional peers during academic initiatives and a 24-hour intercollegiate hackathon, contributing to sprint planning, modular architecture, and project delivery."
    },
    {
      category: "Project Coordination & Management",
      description: "Coordinated project milestones, managed technical documentation and deliverables, ensuring effective team collaboration while building full-stack and AI-driven web systems."
    },
    {
      category: "Campus Event Organization",
      description: "Successfully organized and coordinated 4 major college technical events—Hackathon, Treasure Hunt, Photography, and Tech Charades—managing logistics and driving engagement for over 100+ active participants."
    },
    {
      category: "Adaptability & Communication",
      description: "Comfortable communicating complex technical architectures through diagrams and documentation, adapting rapidly to new frameworks, libraries, and engineering requirements."
    }
  ],
  skillCategories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python" },
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "SQL" }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js" },
        { name: "Vite" },
        { name: "Next.js 14" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" }
      ]
    },
    {
      name: "Backend & REST APIs",
      skills: [
        { name: "Django" },
        { name: "Django REST Framework" },
        { name: "RESTful APIs" },
        { name: "JWT Authentication (SimpleJWT / PyJWT)" },
        { name: "NextAuth.js" }
      ]
    },
    {
      name: "Databases & Storage",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "SQLite" },
        { name: "Django ORM" }
      ]
    },
    {
      name: "AI / ML & Computer Vision",
      skills: [
        { name: "Machine Learning Fundamentals" },
        { name: "Natural Language Processing (NLP)" },
        { name: "Computer Vision" },
        { name: "Scikit-learn" },
        { name: "NumPy" },
        { name: "Pandas" },
        { name: "OpenCV" },
        { name: "MediaPipe" },
        { name: "TensorFlow / CNN" },
        { name: "Streamlit" }
      ]
    },
    {
      name: "Developer Tools & Practices",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Jupyter Notebook" },
        { name: "Docker Compose" },
        { name: "OpenAI API" },
        { name: "ReportLab (PDF Engine)" }
      ]
    },
    {
      name: "Core Computer Science",
      skills: [
        { name: "Data Structures & Algorithms" },
        { name: "Object-Oriented Programming (OOP)" },
        { name: "Database Management Systems (DBMS)" },
        { name: "System Architecture Design" },
        { name: "API Integration & Security" }
      ]
    }
  ]
};
