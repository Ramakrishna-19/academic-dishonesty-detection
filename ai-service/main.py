from fastapi import FastAPI
from pydantic import BaseModel
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputText(BaseModel):
    text: str

reference_texts = [
    "Machine learning is a subset of artificial intelligence",
    "Deep learning uses neural networks to learn patterns",
    "Plagiarism detection compares text similarity"
]

vectorizer = TfidfVectorizer()
reference_vectors = vectorizer.fit_transform(reference_texts)

@app.post("/check")
def check_dishonesty(data: InputText):
    user_vector = vectorizer.transform([data.text])
    similarity_score = cosine_similarity(user_vector, reference_vectors).max()

    score_percentage = round(float(similarity_score) * 100, 2)

    risk = "High" if score_percentage > 70 else "Low"

    return {
        "plagiarism_score": score_percentage,
        "risk": risk
    }


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(BASE_DIR, "..", "frontend")

app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")
