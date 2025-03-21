// tools/tambola-script.js
document.addEventListener('DOMContentLoaded', () => {
    const calledNumberDisplay = document.getElementById('calledNumber');
    const callButton = document.getElementById('callButton');
    const calledNumbersList = document.getElementById('calledNumbersList');
    const calledNumbers = [];
    let availableNumbers = Array.from({ length: 90 }, (_, i) => i + 1);

    callButton.addEventListener('click', () => {
        if (availableNumbers.length === 0) {
            calledNumberDisplay.textContent = 'Game Over!';
            callButton.disabled = true;
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const calledNumber = availableNumbers.splice(randomIndex, 1)[0];
        calledNumbers.push(calledNumber);

        calledNumberDisplay.textContent = calledNumber;
        const listItem = document.createElement('li');
        listItem.textContent = calledNumber;
        calledNumbersList.appendChild(listItem);
    });
});