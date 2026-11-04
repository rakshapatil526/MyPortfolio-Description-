# 📰 Fake News Detection System

An end-to-end Natural Language Processing (NLP) and Machine Learning web application designed to detect, classify, and analyze digital misinformation and fake news articles in real time.

Built with **Python**, **Streamlit**, **Scikit-learn**, **NLTK**, **Pandas**, **NumPy**, and **Plotly**.

---

## 🌟 Key Features & 3 System Modules

### 1. Home Page
- **Project Title & Mission**: Fake News Detection overview and introduction to combating disinformation.
- **Core Capability Highlights**: News Analysis, Fake News Detection, and Text Classification.
- **End-to-End Workflow Infographic**: Ingest $\to$ NLP Preprocessing $\to$ TF-IDF Feature Extraction $\to$ ML Classification $\to$ Credibility Report.
- **Quick Action Button**: Direct "Check News Now" button navigating seamlessly to the detection module.

### 2. News Detection Module
- **Intuitive Article Inputs**: Fields for News Headline and Complete Article Body.
- **1-Click Test Samples**: Pre-loaded real journalism and fake conspiracy/scam articles for quick evaluation.
- **Dual ML Algorithm Selector**: Choose between **Logistic Regression**, **Multinomial Naive Bayes**, or a **Dual Consensus** ensemble.
- **Behind the Scenes**:
  - Text cleaning (lowercase conversion, regex URL/symbol stripping, NLTK stopword removal, and Porter Stemming).
  - High-dimensional TF-IDF vectorization (unigrams + bigrams, sublinear TF scaling).
  - Classification and probability estimation.
- **Interactive Results Display**:
  - 🟢 **REAL NEWS** / 🔴 **FAKE NEWS** high-visibility verdict badge.
  - Model confidence meter and class probability distribution bar chart.
  - Linguistic metrics (word count, reading duration, lexical diversity, clickbait keyword trigger detection).
  - Preprocessed token preview.
  - "Check Another News" reset button.

### 3. Analysis & Model Information Module
- **Application Analytics**: Total articles analyzed, real vs. fake counts, and disinformation percentage.
- **Interactive History**: Filterable, searchable table of all analyzed articles with CSV export.
- **Model Evaluation & Confusion Matrix**: Interactive Plotly confusion matrix heatmaps for both Naive Bayes and Logistic Regression with True Positives, False Positives, False Negatives, and True Negatives labeled.
- **Dataset Insights**: Overview of training samples, vocabulary dimensions, and category distribution.
- **Theoretical Foundations**: Mathematical explanations of TF-IDF formulations, Naive Bayes conditional independence, and Logistic Regression sigmoid decision hyperplanes.

---

## 🛠️ Technology Stack

| Component | Technology / Library |
| :--- | :--- |
| **Language** | Python 3.13 |
| **Web Interface** | Streamlit 1.53 |
| **Data Manipulation** | Pandas, NumPy |
| **Natural Language Processing** | NLTK (Tokenization, Stopwords, Porter Stemmer) |
| **Machine Learning** | Scikit-learn (TF-IDF Vectorizer, MultinomialNB, LogisticRegression) |
| **Data Visualization** | Plotly Graph Objects & Express |
| **Model Persistence** | Joblib |

---

## 📁 Project Structure

```
Fake News Detection System/
├── app.py                     # Main Streamlit web application
├── model_trainer.py           # Model training and evaluation script
├── dataset_generator.py       # Dataset synthesis and management script
├── text_preprocessing.py      # NLTK cleaning, tokenization, stemming pipeline
├── history_manager.py         # Persistent analysis logging and metrics computation
├── requirements.txt           # Python dependencies
├── README.md                  # Project documentation
├── assets/
│   └── style.css              # Custom UI stylesheet (cards, badges, animations)
├── data/
│   ├── news_dataset.csv       # Training dataset of Real & Fake news articles
│   ├── sample_news.json       # Pre-loaded sample articles for 1-click testing
│   └── analysis_history.json  # Persistent log of user-tested news articles
└── models/
    ├── tfidf_vectorizer.pkl   # Fitted TF-IDF Vectorizer
    ├── naive_bayes_model.pkl  # Trained Multinomial Naive Bayes classifier
    ├── logistic_model.pkl     # Trained Logistic Regression classifier
    └── evaluation_metrics.json# Model benchmarks, metrics, and confusion matrices
```

---

## 🚀 How to Run the Application

1. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **(Optional) Train or update models**:
   ```bash
   python model_trainer.py
   ```

3. **Launch the Streamlit web application**:
   ```bash
   streamlit run app.py
   ```

4. Open your web browser to the displayed local address (typically `http://localhost:8501`).
