document.getElementById("root").innerHTML = `
<div class="container">
    <h2>Academic Dishonesty Detector</h2>
    <textarea id="inputText" placeholder="Paste student answer here..."></textarea>
    <button onclick="checkPlagiarism()">Check Dishonesty</button>
    <pre id="result"></pre>
</div>
`;

async function checkPlagiarism() {
  const text = document.getElementById("textInput").value;
  const result = document.getElementById("result");

  if (!text.trim()) {
    result.innerText = "Please enter some text.";
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    });

    const data = await response.json();

    if (data.risk === "High") {
      result.innerText = `⚠️ Plagiarism Detected (${data.plagiarism_score}%)`;
    } else {
      result.innerText = `✅ No Plagiarism Detected (${data.plagiarism_score}%)`;
    }

  } catch (error) {
    result.innerText = "Error connecting to backend.";
    console.error(error);
  }
}

