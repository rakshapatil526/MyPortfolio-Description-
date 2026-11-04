# 🚀 Rakshitha S — Official Developer Portfolio Website

A complete, premium, responsive developer portfolio engineered with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **ReportLab**. The platform links three connected portfolio experiences—**Main Personal Portfolio**, **Full Stack Portfolio**, and **AI/ML Portfolio**—with verified GitHub project repositories, individual technical architecture PDF documents, and an integrated official resume viewer.

---

## 🌟 Key Portfolio Highlights

- **Three Connected Portfolios:**
  - **Main Personal Portfolio (`/`)**: Executive hero section, professional summary, technical skills overview, 5 flagship featured projects, academic standing, Pinnacle Labs internship experience, hackathon achievements, and contact information.
  - **Full Stack Development Portfolio (`/full-stack`)**: Showcase of all 9 full-stack web applications and architectures with search and subcategory filters.
  - **AI/ML Portfolio (`/ai-ml`)**: Showcase of all 9 artificial intelligence and machine learning systems spanning NLP, Computer Vision, Deep Learning (CNNs), and Clinical Predictive Modeling.
- **18 Individual Project Architecture PDFs:** Programmatically compiled using Python's `reportlab` engine and served from `public/documents/architecture/`.
- **Verified GitHub Project Links:** Every verified project card features a direct GitHub icon opening its exact repository in a new tab. Missing repositories are clearly distinguished with pending indicators—no dummy links or profile redirects.
- **Official Resume Integration:** Rakshitha's verified resume PDF is hosted at `public/documents/Rakshitha_S_Resume.pdf`, with direct download buttons, navigation links, and an embedded modal preview.
- **Strict Requirement Adherence:** Zero decorative "Live Demo" buttons anywhere on the platform.

---

## 🛠️ Technology Stack

- **Frontend Core:** React 18, TypeScript, Vite, React Router v6
- **Styling & Design System:** Tailwind CSS, PostCSS, Lucide React Icons
- **Document Generation Engine:** Python 3, ReportLab 5.x
- **Build & Bundler:** Vite 6.x, TypeScript 5.7

---

## 📂 Project Folder Structure

```plaintext
MyPortfolio/
├── public/
│   ├── documents/
│   │   ├── Rakshitha_S_Resume.pdf       # Verified Official Resume
│   │   └── architecture/                # 21 Project Architecture PDFs
│   │       ├── jobconnect-ai-architecture.pdf
│   │       ├── smartcare-hms-architecture.pdf
│   │       ├── restaurant-management-architecture.pdf
│   │       ├── library-management-architecture.pdf
│   │       ├── student-management-architecture.pdf
│   │       ├── event-management-architecture.pdf
│   │       ├── taskflow-architecture.pdf
│   │       ├── expense-tracker-architecture.pdf
│   │       ├── travel-agency-architecture.pdf
│   │       ├── ai-quiz-system-architecture.pdf
│   │       ├── fake-news-detector-architecture.pdf
│   │       ├── diabetes-risk-prediction-architecture.pdf
│   │       ├── email-spam-detection-architecture.pdf
│   │       ├── handwritten-digit-recognition-architecture.pdf
│   │       ├── house-price-prediction-architecture.pdf
│   │       ├── student-performance-prediction-architecture.pdf
│   │       ├── movie-recommendation-architecture.pdf
│   │       └── traffic-sign-recognition-architecture.pdf
├── scripts/
│   ├── pdf_builder.py                   # ReportLab styling & canvas template
│   └── generate_all_21_pdfs.py          # Batch generator for all 21 project specs
├── src/
│   ├── components/
│   │   ├── Badge.tsx                    # Reusable category & status pill badges
│   │   ├── Footer.tsx                   # Comprehensive dark footer with social links
│   │   ├── Navbar.tsx                   # Sticky glassmorphic navbar with mobile drawer
│   │   ├── ProjectCard.tsx              # Standardized project card with verified links
│   │   ├── ResumeModal.tsx              # Interactive embedded PDF resume viewer
│   │   └── SectionHeader.tsx            # Standardized section headings
│   ├── data/
│   │   ├── profile.ts                   # Centralized personal, academic & career data
│   │   ├── projects.ts                  # Centralized catalog of all 21 projects
│   │   └── projectDetails.ts            # In-depth architectural specifications & models
│   ├── pages/
│   │   ├── HomePage.tsx                 # Main developer portfolio (Route: /)
│   │   ├── FullStackPage.tsx            # Full-stack portfolio (Route: /full-stack)
│   │   ├── AiMlPage.tsx                 # AI/ML portfolio (Route: /ai-ml)
│   │   ├── ProjectDetailPage.tsx        # Deep-dive architecture page (Route: /projects/:slug)
│   │   ├── ResumePage.tsx               # Dedicated resume viewer (Route: /resume)
│   │   └── NotFoundPage.tsx             # 404 recovery page (Route: *)
│   ├── sections/
│   │   ├── HeroSection.tsx              # Hero with metrics and quick actions
│   │   ├── PortfolioExploreCards.tsx    # Prominent navigation cards for Full Stack & AI/ML
│   │   ├── FeaturedProjectsSection.tsx  # 5 Flagship projects on home page
│   │   ├── SkillsSection.tsx            # Categorized skills grid & filter tabs
│   │   ├── ExperienceSection.tsx        # Pinnacle Labs AI internship timeline
│   │   ├── EducationSection.tsx         # Jnana Vikas Institute of Tech (8.4 CGPA)
│   │   ├── AchievementsSection.tsx      # Hackathons, certifications & event leadership
│   │   └── ContactSection.tsx           # Contact details with active mailto/tel protocols
│   ├── App.tsx                          # App routing & scroll restoration
│   ├── index.css                        # Tailwind directives & glow effects
│   └── main.tsx                         # React 18 DOM mount point
├── package.json                         # Dependencies & scripts
├── tsconfig.json                        # TypeScript configuration
├── tailwind.config.js                   # Tailwind color & theme extension
├── vite.config.ts                       # Vite bundler setup
└── vercel.json                          # Vercel SPA client rewrite configuration
```

---

## 💻 Instructions to Run Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Python**: 3.10+ (only required if regenerating architecture PDFs)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Vite Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### Step 3: Build for Production
To typecheck with TypeScript and build an optimized production bundle:
```bash
npm run build
```

### Step 4: Preview Production Build
```bash
npm run preview
```

---

## ☁️ Instructions to Deploy on Vercel

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete professional portfolio with 21 architecture PDFs"
   git branch -M main
   git remote add origin https://github.com/rakshapatil526/personal-portfolio-website.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New...** → **Project**.
   - Select your repository (`personal-portfolio-website`).
   - Configure project settings:
     - **Framework Preset**: `Vite`
     - **Root Directory**: `./`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click **Deploy**.

3. **Client-Side Routing on Vercel:**
   The included `vercel.json` automatically rewrites all routes to `/index.html`, ensuring clean URL routing for `/full-stack`, `/ai-ml`, `/resume`, and `/projects/:slug`.

---

## 📄 License & Attribution

Designed and engineered for **Rakshitha S** — Full-Stack Developer & AI/ML Enthusiast.
All verified projects link directly to their respective repositories under `github.com/rakshapatil526`.
