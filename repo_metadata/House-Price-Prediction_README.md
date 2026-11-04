# 🏡 House Price Prediction Using Machine Learning

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![Scikit-Learn](https://img.shields.io/badge/scikit--learn-1.3%2B-orange.svg)](https://scikit-learn.org/)
[![Streamlit](https://img.shields.io/badge/Streamlit-1.30%2B-FF4B4B.svg)](https://streamlit.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An end-to-end Machine Learning web application designed for real estate valuation. Built with **Scikit-Learn**, **Pandas**, and **Streamlit**, featuring three core user modules: an engaging **Home Page**, an interactive **House Price Predictor**, and a persistent **Prediction History & Model Information** dashboard.

---

## 📌 Three Core Modules

### 1. 🏠 Module 1: Home Page
- **Project Title:** House Price Prediction.
- **Welcome Message & Description:** Introduces the AI valuation engine and real estate data science workflow.
- **Property Visuals:** High-resolution architectural banner.
- **Three Feature Cards:**
  1. *Smart Price Prediction:* Multi-variable continuous regression based on area, rooms, floors, age, and location.
  2. *Property Analysis:* Exploratory market distributions and depreciation patterns.
  3. *ML-Based Estimation:* Benchmarking Linear Regression against Random Forest Regressors.
- **Start Prediction CTA:** Instantly navigates the user directly to the prediction form.

### 2. 🔮 Module 2: Predict House Price (Main Module)
- **User Inputs:**
  - **Location:** Bengaluru neighborhoods (*Whitefield, Indiranagar, Koramangala, HSR Layout, Electronic City, Yelahanka*).
  - **Area:** Living space in square feet (e.g. 1,200 sq. ft.).
  - **Bedrooms:** 1 to 6 bedrooms.
  - **Bathrooms:** 1 to 5 bathrooms.
  - **Floors:** 1 to 4 levels.
  - **Property Age:** 0 to 60 years.
  - **Algorithm Selector:** Choose between **Linear Regression**, **Random Forest**, or **Best Model (Auto)**.
- **User Action:** Click **Predict Price**.
- **Machine Learning Workflow:**
  1. Form inputs are converted into a standardized DataFrame.
  2. The Scikit-Learn `ColumnTransformer` handles numerical scaling (`StandardScaler`) and categorical location encoding (`OneHotEncoder`).
  3. The trained regression model estimates property valuation.
  4. The result is returned and automatically logged to `data/prediction_history.csv` with a timestamp.
- **What the User Sees:**
  - **Estimated House Price:** `₹65,00,000` (e.g. `₹65.77 Lakhs`).
  - Breakdown specifications card (Location, Area, Bedrooms, Bathrooms, Floors, Age).
  - **Predict Again** & **Clear Details** action buttons.

### 3. 📜 Module 3: Prediction History
- **Prediction History Table:**
  - Reads previous inquiries directly from `data/prediction_history.csv`.
  - Clean Excel-style tabular view with:
    - **Date & Time**
    - **Place / Location**
    - **Area (sq.ft.)**
    - **Bedrooms, Bathrooms & Floors**
    - **Property Age**
    - **Algorithm Used**
    - **Allocated Amount**
  - Download CSV/Excel button and Clear History action.
- **Dynamic Mountain Graph (Directly Below Table):**
  - Interactive smooth spline area chart representing house price peaks and valleys.
  - Dynamically updates as new predictions are logged.
  - **Interactive Cursor Hover:** Move the cursor over any point or peak on the mountain graph to display:
    - **Which Place:** Neighborhood location (e.g. *Koramangala, Indiranagar, Whitefield, Electronic City*)
    - **Allocated Amount:** Exact predicted property price in INR (e.g. *₹96,86,000 / ₹96.86 Lakhs*)
    - **Which Area:** Living space in square feet
    - **Room Space:** Bedrooms, Bathrooms, and Floors configuration
    - **Property Age & Recorded Date**

---

## 🏗️ Project Architecture & File Structure

```text
House price pridiction/
├── data/
│   ├── housing_data.csv                 # Raw dataset (2,015 records)
│   ├── cleaned_housing_data.csv         # Deduplicated & preprocessed dataset
│   └── prediction_history.csv           # Persistent user prediction history
├── models/
│   ├── best_house_price_model.joblib    # Best-performing pipeline
│   ├── linear_regression_model.joblib   # Serialized Linear Regression pipeline
│   ├── random_forest_model.joblib       # Serialized Random Forest pipeline
│   ├── model_comparison.csv             # Benchmark metrics
│   ├── model_metrics.json               # JSON export of evaluation metrics
│   └── test_predictions.csv             # Held-out actual vs. predicted values
├── notebooks/
│   └── eda_and_modeling.ipynb           # Complete Jupyter Notebook for EDA & modeling
├── reports/
│   └── figures/                         # Generated high-resolution charts
├── screenshots/                         # Documentation visual assets
├── src/
│   ├── __init__.py
│   ├── data_loader.py                   # Data loading & realistic synthesis
│   ├── preprocessing.py                 # Missing value handling, scaling & encoding
│   ├── train.py                         # Model training, comparison & export
│   ├── predict.py                       # Single inference & history CSV logging
│   └── utils.py                         # Metric computation, INR formatting & plotting
├── app.py                               # 3-Module Streamlit interactive application
├── requirements.txt                     # Pinned project dependencies
├── README.md                            # Comprehensive documentation
└── LICENSE                              # Open-source MIT License
```

---

## 📊 Dataset & Feature Dictionary

| Feature | Type | Description | Values / Range |
| :--- | :--- | :--- | :--- |
| `location` | Categorical | Bengaluru neighborhood tier | Whitefield, Indiranagar, Koramangala, HSR Layout, Electronic City, Yelahanka |
| `area` | Numeric | Interior living space in sq. ft. | 600 - 4,800 sq. ft. |
| `bedrooms` | Numeric | Total number of bedrooms | 1 - 6 |
| `bathrooms` | Numeric | Total number of bathrooms | 1 - 5 |
| `floors` | Numeric | Total building levels / floors | 1 - 4 |
| `property_age` | Numeric | Age of construction in years | 0 - 40 years |
| **`price`** *(Target)* | Numeric | Property market valuation in INR | ₹18,00,000 - ₹3,50,00,000+ |

---

## 🤖 Model Performance Comparison

Benchmarked on held-out test data (400 samples):

| Model | $R^2$ Score (Higher is Better) | MAE (INR) | RMSE (INR) | MSE |
| :--- | :---: | :---: | :---: | :---: |
| 🏆 **Linear Regression** | **0.9945** | **₹1,40,645.23** | **₹1,80,535.82** | 3.26 × $10^{10}$ |
| 🌲 **Random Forest Regressor** | **0.9785** | **₹2,78,773.00** | **₹3,57,951.85** | 1.28 × $10^{11}$ |
| 🌳 **Decision Tree Regressor** | **0.9451** | **₹4,45,545.00** | **₹5,71,970.65** | 3.27 × $10^{11}$ |

---

## 🚀 Installation & Execution

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. (Optional) Retrain Models
```bash
python -m src.train
```

### 3. Launch Streamlit Application
```bash
streamlit run app.py
```
Open `http://localhost:8501` in your browser.

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
