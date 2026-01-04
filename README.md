
# Academic Dishonesty Detection System

An AI-based system designed to detect plagiarism and potential AI-generated content in student submissions using Machine Learning and Deep Learning techniques.

---

## 🎯 Problem Statement
With the increasing use of online learning platforms and AI tools, academic dishonesty such as plagiarism and AI-assisted answers has become a major concern. Traditional plagiarism detection systems often fail to detect paraphrased or semantically similar content. This project aims to address this challenge using modern ML and DL approaches.

---

## 🚀 Features
- Detects lexical plagiarism using **TF-IDF and Cosine Similarity**
- Generates a **plagiarism score** and **risk level**
- Lightweight and easy-to-use frontend
- FastAPI-based backend for ML inference
- Database-less design for real-time analysis
- Easily extendable to semantic similarity and AI-generated text detection

---

## 🧠 Technologies Used
- **Python**
- **FastAPI**
- **Scikit-learn**
- **Machine Learning:** TF-IDF, Cosine Similarity
- **Deep Learning:** Extendable with embeddings (Sentence-BERT, LSTM)
- **Frontend:** HTML, CSS, JavaScript

---

## 📂 Project Structure

```
academic_dishonesty_detection/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── app.js
│
├── ai-service/
│ ├── main.py
│ └── requirements.txt
│
└── README.md
```

---

## ▶️ How to Run the Project

### 1️⃣ Start the Backend (AI Service)
```bash
cd ai-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000


The backend will run at:

http://127.0.0.1:8000
```
2️⃣ Run the Frontend
```
Open the following file in your browser:

frontend/index.html

```
Paste the student text and click Check Dishonesty.

🧪 API Testing
```
Swagger UI is available at:

http://127.0.0.1:8000/docs


You can test the API by sending a POST request to /check.

Example request:

{
  "text": "Machine learning is a subset of artificial intelligence"
}
```
⚠️ Limitations

Detects primarily lexical similarity in the current version

May produce false positives for common or generic content

AI-generated text detection is heuristic-based and not definitive

🔮 Future Enhancements

Add semantic similarity using Transformer-based embeddings

Integrate stylometric analysis for AI-generated text detection

Support PDF and document uploads

Add analytics dashboard and optional database integration

⚖️ Ethical Considerations

This system is intended as a decision-support tool, not a final authority. Human review is essential before taking any academic action based on the results.

👨‍💻 Author

Ramakrishna

B.Tech – Data Science

AI & Machine Learning Enthusiast
