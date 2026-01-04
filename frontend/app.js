document.getElementById("root").innerHTML = `
<div class="container">
    <h2>Academic Dishonesty Detector</h2>
    <textarea id="inputText" placeholder="Paste student answer here..."></textarea>
    <button onclick="checkPlagiarism()">Check Dishonesty</button>
    <pre id="result"></pre>
</div>
`;

async function checkPlagiarism() {
    const text = document.getElementById("inputText").value;

    const response = await fetch("http://localhost:8000/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
    });

    const data = await response.json();
    document.getElementById("result").textContent =
        "Plagiarism Score: " + data.plagiarism_score + "%\n" +
        "Risk Level: " + data.risk;
}
