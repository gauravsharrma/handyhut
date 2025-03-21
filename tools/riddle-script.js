// tools/riddle-script.js
document.addEventListener('DOMContentLoaded', () => {
    const riddleDisplay = document.getElementById('riddleDisplay');
    const getRiddleButton = document.getElementById('getRiddleButton');
    const showAnswerButton = document.getElementById('showAnswerButton');
    const answerDisplay = document.getElementById('answerDisplay');

    let currentRiddle = null;

    const riddles = [
        {
            question: "What has an eye, but cannot see?",
            answer: "A needle"
        },
        {
            question: "What has a neck without a head, a body without legs, and can hold the world?",
            answer: "A bottle"
        },
        {
            question: "What has to be broken before you can use it?",
            answer: "An egg"
        },
                {
            question: "What is full of holes but still holds water?",
            answer: "A sponge"
        },
        {
            question: "What question can you never answer yes to?",
            answer: "Are you asleep yet?"
        },
        {
            question: "What has cities, but no houses; forests, but no trees; and water, but no fish?",
            answer: "A map"
        },
        {
            question: "What can travel around the world while staying in a corner?",
            answer: "A stamp"
        },
        {
            question: "What has an endless supply of letters, but starts with tea?",
            answer: "A teapot"
        },
        {
            question: "What has a heart that doesn't beat?",
            answer: "An artichoke"
        }

    ];

    getRiddleButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * riddles.length);
        currentRiddle = riddles[randomIndex];

        riddleDisplay.textContent = currentRiddle.question;
        answerDisplay.style.display = 'none';
        showAnswerButton.style.display = 'block';
    });

    showAnswerButton.addEventListener('click', () => {
        if (currentRiddle) {
            answerDisplay.textContent = `Answer: ${currentRiddle.answer}`;
            answerDisplay.style.display = 'block';
            showAnswerButton.style.display = 'none';
        }
    });
});