document.getElementById("countButton").addEventListener("click", function() {
    const text = document.getElementById("text").value;
    const words = text.trim().split(/\s+/).filter(word => word !== "");
    const characters = text.length;
    const paragraphs = text.trim().split(/\n+/).filter(paragraph => paragraph !== "").length;

    document.getElementById("result").innerText = `Words: ${words.length}, Characters: ${characters}, Paragraphs: ${paragraphs}`;
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("text").value = "";
    document.getElementById("result").innerText = "";
});