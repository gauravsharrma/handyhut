// tools/speech-script.js
document.addEventListener('DOMContentLoaded', () => {
    const speech = window.speechSynthesis;
    const voiceSelect = document.getElementById('voice');
    let voices = [];

    function populateVoices() {
        voices = speech.getVoices();
        voiceSelect.innerHTML = voices
            .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
            .join('');
    }

    populateVoices();
    if (speech.onvoiceschanged !== undefined) {
        speech.onvoiceschanged = populateVoices;
    }

    document.getElementById('speakButton').addEventListener('click', () => {
        const text = document.getElementById('textToSpeak').value;
        const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);

        if (text) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = selectedVoice;
            speech.speak(utterance);
        }
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
        document.getElementById('textToSpeak').value = '';
    });
});