document.getElementById("searchButton").addEventListener("click", function() {
    const name = document.getElementById("name").value.toLowerCase(); // Convert to lowercase for easier matching
    const nameMeanings = {
        "john": "God is gracious",
        "mary": "Bitter, beloved",
        "david": "Beloved",
        "sarah": "Princess",
        "michael": "Who is like God?",
        "emily": "Rival, eager",
        "alexander": "Defender of mankind",
        "olivia": "Olive tree",
        "william": "Resolute protector",
        "sophia": "Wisdom",
        // Add more names and meanings here...
    };

    if (nameMeanings[name]) {
        document.getElementById("result").innerText = `The meaning of ${document.getElementById('name').value} is: ${nameMeanings[name]}`;
    } else {
        document.getElementById("result").innerText = "Name meaning not found. Please try another name.";
    }
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("name").value = "";
    document.getElementById("result").innerText = "";
});