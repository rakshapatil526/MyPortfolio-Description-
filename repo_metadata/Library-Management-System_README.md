# Library Management System (LiberSys)

A full-stack, enterprise-grade Library Management System built with **React.js**, **Python / Django REST Framework**, and **PostgreSQL** (with zero-config SQLite development fallback). Styled with modern Tailwind CSS and inspired by modern Dribbble and Behance dashboard designs.

---

## 🛠️ Languages and Technologies

| Layer | Technologies |
|---|---|
| **Frontend** | React.js (v18), HTML5, Tailwind CSS, JavaScript (ES6+), Vite, Lucide Icons |
| **Backend** | Python 3.13, Django 5.2, Django REST Framework (DRF), django-cors-headers |
| **Database** | PostgreSQL (supported with `psycopg2-binary`, configurable via `.env`), SQLite fallback |
| **API Integration** | Axios (with centralized client, interceptors, and error handling) |

---

## 🗄️ Database Tables & Architecture

The application strictly implements the 3 core database tables:

### 1. `Books` (`books`)
* `book_id` (Primary Key, AutoField)
* `title` (CharField, max 255)
* `author` (CharField, max 255)
* `ISBN` (CharField, max 50, Unique)
* `category` (CharField, max 100)
* `quantity` (PositiveIntegerField, total inventory copies)
* `available_quantity` (PositiveIntegerField, remaining lendable copies)

### 2. `Students` (`students`)
* `student_id` (Primary Key, CharField, e.g. `STU101`)
* `name` (CharField, max 200)
* `email` (EmailField, Unique)
* `phone` (CharField, max 25)
* `department` (CharField, max 100)

### 3. `BorrowRecords` (`borrow_records`)
* `record_id` (Primary Key, AutoField)
* `student_id` (ForeignKey to `Students`, db_column=`student_id`)
* `book_id` (ForeignKey to `Books`, db_column=`book_id`)
* `issue_date` (DateField)
* `due_date` (DateField)
* `return_date` (DateField, nullable)
* `status` (CharField: `ISSUED`, `RETURNED`, `OVERDUE`)

---

## 💻 7 UI Modules

### 🔐 Module 1: Login & Registration
* **Features:**
  * Clean administrative authentication portal with tabbed **Sign In** and **Create Account** modes.
  * Account creation for new users with full name, username, email, and password confirmation.
  * Show/hide password visibility toggle for both login and registration.
  * Secure authentication without plain-text credential leaks on the UI.
  * Form validation with error alerts for invalid credentials or duplicate accounts.
* **How it works:** Authenticates via Django REST Framework endpoints `/api/auth/login/` and `/api/auth/register/`. On success, establishes session and directs user to the Dashboard.

### 📊 Module 2: Dashboard
* **Features:**
  * **Total Books**: Distinct titles and total physical copies count.
  * **Total Students**: Total registered active student members.
  * **Currently Issued Books**: Real-time counter of active loans.
  * **Returned Books**: Historical counter of completed returns.
  * **Overdue Books**: Counter with visual pulse alert for overdue loans.
  * **Recent Borrowing Records**: Live activity table with status badges (`Returned`, `Issued`, `Overdue`).
  * **Category Distribution & Quick Action shortcuts**.
* **How it works:** React requests live summary counts from Django's `/api/dashboard/stats/` endpoint, querying PostgreSQL.

### 📚 Module 3: Book Management
* **Features:**
  * **Add New Book**: Modal dialog with title, author, ISBN, category, and quantity.
  * **View All Books**: Catalog table with availability badges (`Available`, `Out of stock`).
  * **Edit Book Details**: Update book metadata and stock quantities.
  * **Delete Book**: Confirmation modal with cascade safety warnings.
  * **Search & Filter**: Real-time search by title, author, ISBN, and category dropdown.
* **How it works:** Full RESTful CRUD endpoints (`/api/books/`) connected to the `Books` database table.

### 🎓 Module 4: Student Management
* **Features:**
  * **Add Student**: Register students with student ID, name, email, phone, and department.
  * **View Student List**: Directory table with active loans counter.
  * **Edit Student Details**: Modify contact information or academic department.
  * **Delete Student**: Delete student profiles.
  * **Search & Department Filter**.
* **How it works:** Managed via `/api/students/` storing records in the `Students` table.

### 📤 Module 5: Issue Books
* **Features:**
  * **Select Student**: Dropdown of registered students.
  * **Select Available Book**: Displays real-time stock; disables out-of-stock titles.
  * **Issue Date & Due Date**: Date pickers with quick preset buttons (`+7 Days`, `+14 Days`, `+30 Days`).
  * **Live Checkout Preview**: Summary card showing student, book, and dates before confirmation.
  * **Issue Book button**: Creates the transaction.
* **How it works:** Sends `POST /api/borrow/issue/`. Inside an atomic database transaction, Django decreases `available_quantity` by 1 and creates a `BorrowRecords` entry with `status='ISSUED'`.

### 📥 Module 6: Return Books
* **Features:**
  * **View Issued Books**: Real-time list of all currently borrowed books.
  * **Search by Student or Book**: Instant query by student name/ID or book title/ISBN.
  * **Due Dates & Overdue Status**: Clear badge highlighting days past due.
  * **Return Book button**: Modal confirming return date and borrower details.
* **How it works:** Sends `POST /api/borrow/return/<id>/`. Django marks `return_date`, sets `status='RETURNED'`, and increments `available_quantity` in the `Books` table.

### 🔍 Module 7: Search Books & Due Dates
* **Features:**
  * **Multi-Criteria Search**: Query book title, author, or student name simultaneously.
  * **Filter by Category**: Quick category dropdown selection.
  * **Check Book Availability**: Toggle to view only books currently in stock.
  * **View Due Dates**: Dedicated tracker for active loans and upcoming return dates.
  * **Identify Overdue Books**: Instant filter showing overdue records and late penalty indicators.
* **How it works:** Evaluated through `/api/search/` performing database queries across `Books` and `BorrowRecords`.

---

## 🚀 Quick Start Guide

### Default Administrator Credentials
* **Username:** `admin`
* **Password:** `admin123`
*(Pre-seeded and ready to use)*

---

### Prerequisites
1. **Python 3.10+** (Tested on Python 3.13)
2. **Node.js 18+** and **npm**

---

### Option A: 1-Click Launch on Windows

1. Double-click `run_backend.bat` to launch the Django server (`http://127.0.0.1:8000`).
2. Double-click `run_frontend.bat` to launch the React development server (`http://localhost:3000`).
3. Open your browser to `http://localhost:3000`.

---

### Option B: Manual Command Line Execution

#### 1. Backend Setup (Django + DRF)
```bash
# Navigate to backend directory
cd backend

# Activate Python virtual environment
# Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# Windows (CMD):
venv\Scripts\activate.bat
# macOS / Linux:
source venv/bin/activate

# Apply migrations
python manage.py migrate

# (Optional) Seed sample books, students, and borrow records:
python manage.py seed_data

# Start the Django API server
python manage.py runserver 127.0.0.1:8000
```

#### 2. Frontend Setup (React + Vite)
```bash
# In a new terminal, navigate to frontend directory
cd frontend

# Install dependencies (already installed if cloned with repo)
npm install

# Start Vite dev server
npm run dev
```

Visit **`http://localhost:3000`** in your browser!

---

## 🐘 PostgreSQL Configuration

By default, the application runs out-of-the-box with SQLite for zero-friction setup. To connect to your **PostgreSQL** instance:

1. Open `backend/.env`.
2. Set `USE_POSTGRES=True`.
3. Fill in your PostgreSQL database credentials:
```env
USE_POSTGRES=True
DB_NAME=library_management
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
```
4. Run migrations and seed data:
```bash
python manage.py migrate
python manage.py seed_data
```

---

## 🧪 Automated Tests

The backend includes comprehensive test coverage for all 7 modules:
```bash
cd backend
python manage.py test library
```
*(All 6 automated test suites covering Auth, Dashboard stats, Book CRUD, Student CRUD, Issue/Return book inventory adjustments, and Search & Due Dates pass cleanly).*
