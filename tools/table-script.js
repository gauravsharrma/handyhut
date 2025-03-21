document.getElementById("generateButton").addEventListener("click", function() {
    const number = parseInt(document.getElementById("number").value);

    if (isNaN(number)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    let tableHtml = "<table>";
    for (let i = 1; i <= 10; i++) {
        tableHtml += `<tr><td>${number} x ${i}</td><td>=</td><td>${number * i}</td></tr>`;
    }
    tableHtml += "</table>";

    document.getElementById("result").innerHTML = tableHtml;
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("number").value = "";
    document.getElementById("result").innerHTML = "";
});