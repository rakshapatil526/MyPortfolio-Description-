# 🩺 CareAI | Diabetes Risk Prediction System

An intelligent, data-driven clinical screening and analytical dashboard built with **Python**, **Streamlit**, **Scikit-learn**, **Pandas**, **NumPy**, **Matplotlib**, and **Seaborn**.

Inspired by clinical decision support tools (such as [CareAI on Devpost](https://devpost.com/software/careai-wpnfrl)), this application provides an intuitive interface for assessing type 2 diabetes risk based on canonical clinical markers (modeled after the Pima Indians Diabetes Dataset).

---

## 🚀 Key Features & Pages

### 1. 🏠 Home Page
- **Welcome & Hero Header**: Clean medical-themed introduction highlighting the importance of early diabetes screening.
- **Why Early Detection Matters**: Informative clinical background on asymptomatic type 2 diabetes progression.
- **Three Core Pillars**:
  - 🎯 **Risk Estimation**: Instant machine learning evaluation of diabetes probability and risk tier categorization.
  - 📋 **Health Information**: Guidance and normal range comparisons for metabolic parameters according to WHO and ADA standards.
  - 📊 **Prediction Results**: Historical screening log, interactive pie chart distributions, and model performance metrics.
- **Educational & Medical Disclaimer**: Explicit notice emphasizing educational use and physician consultation.
- **Start Prediction Button**: One-click navigation directing users straight into the risk assessment form.

### 2. 🩺 Diabetes Risk Prediction Page
- **Comprehensive Clinical Inputs**:
  - `Pregnancies`: Number of times pregnant (0 for males / non-applicable)
  - `Glucose`: Plasma glucose concentration (mg/dL)
  - `Blood Pressure`: Diastolic blood pressure (mm Hg)
  - `Skin Thickness`: Triceps skin fold thickness (mm)
  - `Insulin`: 2-Hour serum insulin (μU/mL)
  - `BMI`: Body Mass Index (weight in kg / height in m²)
  - `Diabetes Pedigree Function (DPF)`: Genetic family risk factor score
  - `Age`: Chronological age in years
- **Demo Patient Presets**: Quick one-click buttons to load sample patient profiles (Healthy, Prediabetic, High Risk).
- **Predict Risk Action**: Executes real-time feature normalization and inference using the trained Random Forest model.
- **Assessment Output**:
  - Color-coded risk status badges (`Low Risk`, `Moderate Risk`, `High Risk`).
  - Risk probability percentage and diagnostic classification.
  - Tailored clinical recommendations and lifestyle advice.
  - **Entered Health Information Summary**: 4-column metric grid displaying all user inputs with automated clinical status tags (Normal, Prediabetes, Elevated, Overweight, etc.).
  - **Try Again Button**: Convenient button to reset the form and perform subsequent patient screenings.

### 3. 📈 Results & Model Information Page
- **Prediction Records & History Analysis**:
  - **Summary KPI Metrics**: Total assessments, count and percentage share for Low Risk, Moderate Risk, and High Risk.
  - **🥧 Prediction History Pie Chart**: High-resolution Matplotlib/Seaborn donut chart visualizing risk distributions across all logged assessments, with exact counts and percentage slices.
  - **Risk Distribution Breakdown Table**: Detailed table showing patient counts, shares, average glucose, and average BMI for each risk category.
  - **Data Actions**: One-click CSV export (`Download History CSV`) and history reset (`Clear / Reset History`).
  - **Complete Prediction History Table**: Full chronological table of all past screenings.
- **Model Performance & Insights**:
  - **Key Metrics**: Accuracy (~88%), Precision (80%), Recall (76.5%), F1-Score (78.2%), and ROC-AUC (95.3%).
  - **Clinical Feature Importance Chart**: Seaborn barplot displaying Gini importance weights (Glucose, Insulin, BMI, Age, etc.).
  - **Confusion Matrix**: Seaborn heatmap illustrating True Positives, True Negatives, False Positives, and False Negatives on the hold-out test set.
  - **Methodology & Training Specs**: Documenting model parameters and validation split.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Python** (3.11+) | Core programming language |
| **Streamlit** | Interactive web application framework & reactive UI |
| **Pandas & NumPy** | High-performance clinical data manipulation & array operations |
| **Scikit-learn** | Model training (`RandomForestClassifier`), preprocessing (`StandardScaler`), and metric evaluation |
| **Matplotlib & Seaborn** | Statistical charting (donut/pie charts, feature importance barplots, confusion matrix heatmaps) |

---

## 📁 Project Directory Structure

```plaintext
Diabetes Risk Prediction System/
│
├── app.py                      # Main Streamlit web application
├── train_model.py              # Model training, dataset generation & evaluation pipeline
├── requirements.txt            # Python dependencies
├── README.md                   # Comprehensive documentation
│
├── diabetes.csv                # Clinical benchmark dataset (1,200 records)
├── diabetes_model.pkl          # Serialized Random Forest Classifier
├── scaler.pkl                  # Serialized StandardScaler
├── model_metrics.json          # Exported evaluation metrics & feature importances
└── prediction_history.csv      # Persistent storage of user predictions
```

---

## 🏃 How to Run the Application

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. (Optional) Retrain or Regenerate the Model
The model and dataset are pre-trained and ready. If you wish to retrain:
```bash
python train_model.py
```

### 3. Launch the Streamlit App
```bash
streamlit run app.py
```
Then open the local URL in your web browser:
`http://localhost:8501`

---

## 📖 Clinical Reference Standards

- **American Diabetes Association (ADA)**: Fasting plasma glucose `< 100 mg/dL` is normal, `100 – 125 mg/dL` indicates prediabetes, and `≥ 126 mg/dL` indicates diabetes.
- **World Health Organization (WHO)**: BMI `18.5 – 24.9` indicates normal weight, `25.0 – 29.9` indicates overweight, and `≥ 30.0` indicates obesity.
