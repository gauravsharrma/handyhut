document.getElementById("searchButton").addEventListener("click", function() {
    const word = document.getElementById("word").value;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                const wordData = data[0];
                const meanings = wordData.meanings[0];
                const definition = meanings.definitions[0].definition;
                const synonyms = meanings.synonyms.join(", ");
                const antonyms = meanings.antonyms.join(", ");
                let examples = [];

                // Attempt to extract examples from definitions
                meanings.definitions.forEach(def => {
                    if (def.example) {
                        examples.push(def.example);
                    }
                });

                const phonetic = wordData.phonetics && wordData.phonetics[0] ? wordData.phonetics[0].text : "Pronunciation not found";
                const audio = wordData.phonetics && wordData.phonetics.find(p => p.audio) ? wordData.phonetics.find(p => p.audio).audio : null;

                let resultHtml = `
                    <p><strong>Definition:</strong> ${definition}</p>
                    <p><strong>Pronunciation:</strong> ${phonetic}</p>
                `;

                if (audio) {
                    resultHtml += `<audio controls src="${audio}"></audio>`;
                }

                if (synonyms) {
                    resultHtml += `<p><strong>Synonyms:</strong> ${synonyms}</p>`;
                }
                if (antonyms) {
                    resultHtml += `<p><strong>Antonyms:</strong> ${antonyms}</p>`;
                }
                if (examples.length > 0) {
                    resultHtml += `<p><strong>Examples:-</strong><br> ${examples.join("<br>")}</p>`;
                }

                document.getElementById("result").innerHTML = resultHtml;
            } else {
                document.getElementById("result").innerText = "Word not found.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerText = "An error occurred. Please try again.";
        });
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("word").value = "";
    document.getElementById("result").innerHTML = "";
});