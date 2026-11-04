# SwiftBite — Full-Stack Restaurant & Food Delivery Management System

A full-stack food delivery and restaurant management web application built with **React.js**, **Python (Django & Django REST Framework)**, and **PostgreSQL**.

---

## 🛠️ Languages & Technologies

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React.js (v18), HTML5, CSS3, JavaScript (ES6+), Vite |
| **Backend** | Python 3, Django 5, Django REST Framework (DRF), SimpleJWT |
| **Database** | PostgreSQL (with auto-configured SQLite development fallback) |
| **API Integration** | Axios (with JWT interceptors & token persistence) |
| **Icons & Design** | Lucide React, Google Fonts (Plus Jakarta Sans) |

---

## 📱 8 UI Modules Implemented

### 1. Module 1: Register & Login
- **Customer Registration**: Name, email, phone number, and password.
- **Email & Password Login**: Fast authentication via Django REST Framework & JWT.
- **Show/Hide Password**: Password visibility toggle button.
- **One-Click Demo Login**: Pre-configured buttons for instant Customer and Admin testing.
- **Logout**: Clears tokens and active session.

### 2. Module 2: Restaurant Homepage
- **Branding**: Restaurant name and custom logo (`SwiftBite 🍕`).
- **Interactive Food Banner**: Eye-catching promotional hero with animated badges, perks (25-min delivery, Cash on Delivery), and floating dish cards.
- **Popular Dishes**: Bestseller carousel/grid fetched dynamically from `/api/products/?popular=true`.
- **Today's Special Offers**: Chef daily specials with promotional pricing and discount badges.
- **Food Search**: Search bar to query across pizzas, burgers, biryanis, desserts, and drinks.
- **Browse Menu Button**: Direct navigation into full category views.

### 3. Module 3: Food Categories
- Filter chips and visual category cards:
  - **Pizza**
  - **Burgers**
  - **Biryani**
  - **Chinese food**
  - **Desserts**
  - **Drinks**
- Dynamically loads and filters dishes corresponding to the selected category.

### 4. Module 4: Food Details
- High-resolution food photography.
- Food name, description, unit price, preparation time, and rating.
- **Pure Veg / Non-Veg Indicator**: Classic green and red dot icons.
- **Interactive Quantity Stepper**: Increment or decrement quantities (+ / -).
- **Add to Cart**: Real-time cart calculation and animated confirmation.

### 5. Module 5: Shopping Cart
- List of selected food items with thumbnails, names, and unit prices.
- Live quantity adjustment stepper and instant item removal.
- Real-time line item total calculation.
- Order calculation breakdown:
  - **Subtotal**
  - **Estimated Taxes (5%)**
  - **Delivery Fee** ($2.99 or **FREE** on orders over $30)
  - **Total Amount**
- **Proceed to Checkout** button.

### 6. Module 6: Checkout & Place Order
- Customer recipient name & contact phone number.
- Full delivery address and rider notes/instructions.
- Order breakdown summary sidebar.
- **Cash on Delivery (COD)** payment selection.
- **Place Order Button**: Validates cart, calculates final totals, and saves records into the database.

### 7. Module 7: My Orders & Order History
- View past customer orders with unique **Order ID**.
- Displays ordered food items, quantities, and item prices.
- Order date and formatted timestamp.
- Total amount and payment method.
- **Visual Status Progression**: Multi-step live tracking timeline:
  `Pending` ➔ `Confirmed` ➔ `Preparing` ➔ `Delivered`

### 8. Module 8: Admin Food & Order Management
- Admin role-based access control (`is_staff`).
- **Operational Metrics**: Total revenue, total orders, pending orders, and kitchen preparation count.
- **Food Catalog Management**:
  - Add new food items (Name, category, price, image, description, veg/non-veg, popular, special).
  - Edit existing food details and prices.
  - Delete food items.
  - One-click Availability toggle (`Available` / `Out of Stock`).
- **Category Management**: Add, view, and delete food categories.
- **Order Management**: Real-time status updater dropdown (`Pending`, `Confirmed`, `Preparing`, `Delivered`, `Cancelled`).

---

## 🗄️ Database Tables & Schema

The application uses the 5 core tables specified:

```
┌─────────────────────────────────┐       ┌─────────────────────────────────┐
│              Users              │       │           Categories            │
├─────────────────────────────────┤       ├─────────────────────────────────┤
│ user_id (PK, AutoField)         │       │ category_id (PK, AutoField)     │
│ name (CharField)                │       │ category_name (CharField, Unique)│
│ email (EmailField, Unique)      │       │ image (TextField)               │
│ password (CharField)            │       │ description (TextField)         │
│ phone (CharField)               │       └────────────────┬────────────────┘
│ is_staff (BooleanField)         │                        │ 1
└────────────────┬────────────────┘                        │
                 │ 1                                       │ N
                 │                                ┌────────▼────────────────────────┐
                 │                                │            Products             │
                 │                                ├─────────────────────────────────┤
                 │                                │ product_id (PK, AutoField)      │
                 │                                │ category_id (FK -> Categories)  │
                 │                                │ name (CharField)                 │
                 │                                │ description (TextField)         │
                 │                                │ price (DecimalField)            │
                 │                                │ image (TextField)               │
                 │                                │ availability (BooleanField)     │
                 │                                │ is_veg (BooleanField)           │
                 │ 1                              │ is_popular (BooleanField)       │
                 │                                │ is_special (BooleanField)       │
                 │                                └────────┬────────────────────────┘
                 │ N                                       │ 1
┌────────────────▼────────────────┐                        │
│             Orders              │                        │
├─────────────────────────────────┤                        │
│ order_id (PK, AutoField)        │                        │
│ user_id (FK -> Users)           │                        │
│ customer_name (CharField)        │                        │
│ phone (CharField)               │                        │
│ address (TextField)             │                        │
│ total_amount (DecimalField)     │                        │
│ order_date (DateTimeField)      │                        │
│ payment_method (CharField)      │                        │
│ status (CharField)              │                        │
└────────────────┬────────────────┘                        │
                 │ 1                                       │
                 │                                         │
                 │ N                                       │ N
┌────────────────▼─────────────────────────────────────────▼────────────────┐
│                                OrderItems                                 │
├───────────────────────────────────────────────────────────────────────────┤
│ item_id (PK, AutoField)                                                   │
│ order_id (FK -> Orders)                                                   │
│ product_id (FK -> Products)                                               │
│ quantity (PositiveIntegerField)                                           │
│ price (DecimalField)                                                      │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started & Execution

### 1. Prerequisites
- Python 3.10+
- Node.js v18+ & npm

### 2. Backend Setup (Django)

```bash
# Navigate to backend directory
cd backend

# (Optional) Create and activate a virtual environment
python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations api
python manage.py migrate

# Seed initial restaurant database (Categories, Products, Admin, Demo Customer)
python manage.py seed_data

# Start the Django development server
python manage.py runserver 8000
```
Backend API will run at: `http://127.0.0.1:8000/api/`

---

### 3. Frontend Setup (React + Vite)

```bash
# Open a new terminal and navigate to frontend
cd frontend

# Install dependencies (already pre-installed in workspace)
npm install

# Start Vite dev server
npm run dev
```
Frontend will run at: `http://localhost:5173/`

---

## 🔑 Demo Login Credentials

The system includes pre-seeded demo accounts:

| Role | Email | Password | Access Capabilities |
| :--- | :--- | :--- | :--- |
| **Admin / Staff** | `admin@restaurant.com` | `admin123` | Full Admin Dashboard, Manage Dishes, Categories & Update Order Status |
| **Demo Customer** | `customer@example.com` | `customer123` | Browse Menu, Add to Cart, Checkout (COD), My Orders History |

*Note: You can also register any new customer account with your own email and password.*

---

## 🐘 Configuring PostgreSQL (Optional)

The application includes built-in support for PostgreSQL. To use PostgreSQL instead of SQLite:

1. Create a PostgreSQL database (e.g. `restaurant_db`):
   ```sql
   CREATE DATABASE restaurant_db;
   ```
2. Set environment variables (or create `backend/.env` based on `.env.example`):
   ```env
   USE_POSTGRES=True
   DB_NAME=restaurant_db
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   ```
3. Run migrations and seed data:
   ```bash
   python manage.py migrate
   python manage.py seed_data
   ```

---

## 🧪 Running Automated Tests

Run the backend test suite:
```bash
cd backend
python manage.py test api
```
All 6 automated test suites (Auth, Products, Categories, Orders, Cart checkout, and Admin status updates) pass with 100% success rate.
