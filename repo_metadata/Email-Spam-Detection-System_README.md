# 🛡️ Email & SMS Spam Detection System

[![Python](https://img.shields.io/badge/Python-3.9%20%7C%203.10%20%7C%203.11%20%7C%203.12%20%7C%203.13-blue?logo=python)](https://www.python.org/)
[![Streamlit](https://img.shields.io/badge/Streamlit-1.28%2B-FF4B4B?logo=streamlit)](https://streamlit.io/)
[![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-1.3%2B-F7931E?logo=scikit-learn)](https://scikit-learn.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Project-Complete%20%26%20Tested-brightgreen)]()

An end-to-end, beginner-friendly Machine Learning and Natural Language Processing (NLP) portfolio web application built with **Python**, **Scikit-learn**, and **Streamlit**. It automatically analyzes email and SMS text messages in real time to classify them as either **SPAM** or **NOT SPAM (HAM)** using TF-IDF feature extraction and a Multinomial Naive Bayes classification model.

---

## 📌 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Project Objective](#2-project-objective)
3. [Key Features](#3-key-features)
4. [Technology Stack](#4-technology-stack)
5. [Machine Learning Workflow](#5-machine-learning-workflow)
6. [Dataset Source & Statistics](#6-dataset-source--statistics)
7. [Project Folder Structure](#7-project-folder-structure)
8. [Installation Instructions](#8-installation-instructions)
9. [Execution Commands](#9-execution-commands)
10. [Application Screenshots](#10-application-screenshots)
11. [Model Performance & Evaluation](#11-model-performance--evaluation)
12. [Future Improvements](#12-future-improvements)
13. [Educational Disclaimer](#13-educational-disclaimer)

---

## 1. Project Overview

Spam communications constitute a significant portion of worldwide digital messaging, exposing individuals and organizations to phishing hazards, malicious links, privacy invasion, and financial fraud.

This application provides a modern, interactive web interface where users can input an email body or SMS message and receive instant classification results accompanied by statistical confidence metrics and Natural Language Processing inspection previews.

---

## 2. Project Objective

- Develop an accurate, lightweight, and explainable Machine Learning classifier for text spam detection.
- Provide a clean, modern, and accessible **Streamlit** user interface with zero setup complexity.
- Demonstrate core Natural Language Processing concepts: text cleaning, stop-word removal, TF-IDF vectorization, and probabilistic modeling.
- Ensure 100% precision on legitimate messages (Ham) to prevent authentic communications from ever being flagged as spam.

---

## 3. Key Features

- **Multi-Module Clean Navigation**: Intuitive sidebar navigation with three dedicated pages:
  - 🏠 **Home Page**: System introduction, concept breakdown (Spam vs Ham), importance of spam filtering, and an end-to-end Machine Learning pipeline diagram.
  - 🔍 **Spam Detection Page**:
    * **Single Message Mode**: Analyze **any custom email or SMS text** without restrictions. Features a pre-seeded library of 10+ real-world scenarios (bank alerts, meetings, package notifications, crypto scams, job offers) and quick sample buttons. Results are persistent and show color-coded cards (Red for Spam, Green for Ham), statistical model confidence percentages, and dual probability distribution gauges.
    * **Batch Prediction Mode**: Capable of classifying **10, 50, 100, or 1,000+ messages simultaneously** in ~0.1 seconds! Supports multi-line input or `.csv` / `.txt` file uploads, generating an interactive summary table with downloadable CSV export.
    * **Explainable AI / NLP Inspector**: Expandable breakdown showing raw text vs. normalized tokens.
  - 📊 **About the Model Page**: Real-world dataset statistics from the actual CSV, technical workflow description, live hold-out test metrics, and a Matplotlib/Seaborn confusion matrix heatmap.
- **Robust Error Handling**:
  - Catches empty or whitespace-only inputs with informative alerts.
  - Detects missing model files with explicit terminal instructions to run `python train_model.py`.
  - Gracefully handles dataset loading across UTF-8 and Latin-1 encodings.
- **High Efficiency & Offline Capability**:
  - Uses an integrated English stop-words fallback to guarantee offline execution without network dependency.
  - Caches the serialized Scikit-learn Pipeline with `@st.cache_resource` for sub-second predictions.

---

## 4. Technology Stack

| Component | Library / Framework | Purpose |
| :--- | :--- | :--- |
| **Language** | Python 3.9+ | Core programming runtime |
| **Web UI** | Streamlit | Responsive, modern interactive web interface |
| **Data Processing** | Pandas, NumPy | Dataset loading, cleaning, and tabular transformations |
| **Text Processing** | NLTK, Regex (`re`) | Text cleaning, tokenization, and stop-word filtering |
| **Machine Learning** | Scikit-learn | TF-IDF Vectorization, Multinomial Naive Bayes, Pipelines |
| **Model Persistence**| Joblib | Fast binary model serialization and loading |
| **Visualization** | Matplotlib, Seaborn | Confusion matrix heatmaps and evaluation plots |

---

## 5. Machine Learning Workflow

```
[ User Input Message ]
          │
          ▼
┌─────────────────────────┐
│ 1. Text Preprocessing   │ ➔ Lowercase, strip URLs/emails, remove punctuation & numbers,
└─────────────────────────┘   normalize whitespace, and filter English stop words.
          │
          ▼
┌─────────────────────────┐
│ 2. TF-IDF Vectorization │ ➔ Convert text tokens into a numerical matrix using Term Frequency
└─────────────────────────┘   (TF) and Inverse Document Frequency (IDF) unigrams & bigrams.
          │
          ▼
┌─────────────────────────┐
│ 3. Naive Bayes Model    │ ➔ Multinomial Naive Bayes calculates posterior probability P(Spam|Words)
└─────────────────────────┘   using Bayes' Theorem with Laplace smoothing (alpha = 1.0).
          │
          ▼
[ Final Prediction: SPAM / HAM + Model Confidence % ]
```

### Why TF-IDF?
- **Term Frequency (TF)** evaluates how frequently a word appears inside an individual message.
- **Inverse Document Frequency (IDF)** diminishes the weight of terms that appear ubiquitously across all documents (such as `"the"`, `"hello"`) and elevates discriminative terms strongly correlated with spam (such as `"lottery"`, `"prize"`, `"urgent"`, `"claim"`, `"won"`).

### Why Multinomial Naive Bayes?
Multinomial Naive Bayes is exceptionally well-suited for text classification:
- Computes probabilities efficiently over large, sparse vocabulary matrices.
- Fast training and inference with low memory overhead.
- Operates reliably even on small-to-medium text corpora.

---

## 6. Dataset Source & Statistics

- **Source**: Public [SMS Spam Collection Dataset](https://archive.ics.uci.edu/dataset/228/sms+spam+collection) (UCI Machine Learning Repository & Kaggle).
- **Format**: CSV (`dataset/spam.csv`) containing 5,572 tagged mobile SMS messages.
- **Data Distribution**:
  - **Total Messages**: 5,572
  - **Legitimate (Ham)**: 4,825 records (86.6%)
  - **Spam**: 747 records (13.4%)
- **Data Split**:
  - **Training Set (80%)**: 4,457 messages (stratified split preserving class ratio)
  - **Hold-out Test Set (20%)**: 1,115 messages

---

## 7. Project Folder Structure

```
Email-Spam-Detection/
│
├── app.py                     # Streamlit multi-page web application
├── train_model.py             # Model training, evaluation & serialization script
├── requirements.txt           # Python dependencies and version constraints
├── README.md                  # Comprehensive GitHub documentation
│
├── dataset/
│   └── spam.csv               # SMS Spam Collection dataset
│
├── models/
│   ├── spam_model.pkl         # Trained Scikit-learn Pipeline (TF-IDF + Naive Bayes)
│   └── metrics.json           # Actual calculated evaluation metrics & dataset info
│
├── src/
│   ├── preprocessing.py       # Modular NLP text cleaning functions
│   └── evaluation.py          # Metric calculations & confusion matrix plotting
│
└── screenshots/
    ├── home.png               # Screenshot: Home Page
    ├── detection.png          # Screenshot: Spam Detection Page
    └── about.png              # Screenshot: About the Model Page
```

---

## 8. Installation Instructions

### Prerequisites
- Python 3.9 or higher installed on your machine.
- Git installed (optional, for cloning the repository).

### Step-by-Step Setup

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/Email-Spam-Detection.git
   cd Email-Spam-Detection
   ```

2. **Create and Activate a Virtual Environment** (Recommended):
   - **On Windows**:
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - **On macOS / Linux**:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

---

## 9. Execution Commands

### Step 1: Train the Machine Learning Pipeline
Train the TF-IDF vectorizer and Multinomial Naive Bayes classifier on the dataset:
```bash
python train_model.py
```
*Output summary:*
```
=================================================================
      EMAIL SPAM DETECTION SYSTEM - MODEL TRAINING PIPELINE
=================================================================
[1/5] Loading dataset from: dataset/spam.csv
      Total records loaded : 5,572
      Legitimate (Ham)     : 4,825 (86.6%)
      Spam                 : 747 (13.4%)
[2/5] Preprocessing text messages (cleaning, normalization, stopwords)...
[3/5] Splitting data into stratified Train (80%) and Test (20%) sets...
      Training samples     : 4,457
      Testing samples      : 1,115
[4/5] Training Scikit-learn Pipeline (TfidfVectorizer + MultinomialNB)...
      Model training complete.
[5/5] Evaluating model on hold-out test set...
-----------------------------------------------------------------
  Test Accuracy  : 0.9695 (96.95%)
  Spam Precision : 1.0000 (100.00%)
  Spam Recall    : 0.7718 (77.18%)
  Spam F1-Score  : 0.8712 (87.12%)
-----------------------------------------------------------------
[SUCCESS] Trained model saved to : models/spam_model.pkl
[SUCCESS] Metrics metadata saved to: models/metrics.json
=================================================================
```

### Step 2: Run the Streamlit Web Application
Launch the interactive browser application:
```bash
streamlit run app.py
```
Open your web browser and navigate to `http://localhost:8501`.

---

## 10. Application Screenshots

### 1. Home Page
*The landing module presents the project overview, explanation of spam vs legitimate messages, why spam filtering is critical, and the step-by-step Machine Learning workflow diagram.*

![Home Page](screenshots/home.png)

---

### 2. Spam Detection Page
*The core classification module enables users to test custom messages or select sample demonstration scenarios, rendering color-coded result cards with statistical model confidence and NLP token breakdown.*

![Spam Detection Page](screenshots/detection.png)

---

### 3. About the Model Page
*Displays real calculated performance metrics (Accuracy, Precision, Recall, F1-Score) from the hold-out test set, dataset breakdown, and an annotated Confusion Matrix heatmap.*

![About the Model Page](screenshots/about.png)

---

## 11. Model Performance & Evaluation

The model was evaluated strictly on an independent 20% hold-out test set (1,115 unseen messages) using stratified partitioning:

| Metric | Hold-Out Test Score | Real-World Significance |
| :--- | :---: | :--- |
| **Accuracy** | **96.95%** | Percentage of total correct classifications across all messages. |
| **Precision (Spam)** | **100.00%** | Zero false positives: legitimate messages are never flagged as spam. |
| **Recall (Spam)** | **77.18%** | Percentage of all actual spam messages correctly identified and caught. |
| **F1-Score (Spam)** | **87.12%** | Balanced harmonic mean of Precision and Recall on the spam class. |

### Confusion Matrix Breakdown (1,115 Test Samples)
- **True Negatives (Correct Ham)**: 966 messages (86.6%)
- **False Positives (False Alarms)**: 0 messages (0.0%)
- **False Negatives (Missed Spam)**: 34 messages (3.0%)
- **True Positives (Caught Spam)**: 115 messages (10.3%)

---

## 12. Future Improvements

- **Fine-Tuned Thresholding**: Calibrate decision thresholds to boost recall on borderline promotional content while preserving zero false positives.
- **Header & Metadata Analysis**: Extend classification beyond body text to examine email sender headers, SPF/DKIM verification records, and domain reputation.
- **Multilingual Support**: Integrate language detection and multilingual stop-word tokenizers for international correspondence.
- **Docker Containerization**: Add a `Dockerfile` for one-command container deployment on cloud platforms like Streamlit Cloud, AWS ECS, or Render.

---

## 13. Educational Disclaimer

> [!NOTE]
> **This is an educational project.** Predictions are generated by statistical machine learning models trained on historical text patterns. Predictions may occasionally be incorrect and should not be treated as conclusive legal or security proof that a message is completely safe or harmful.
