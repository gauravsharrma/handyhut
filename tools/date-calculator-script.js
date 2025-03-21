// tools/date-calculator-script.js
document.addEventListener('DOMContentLoaded', () => {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const calculateButton = document.getElementById('calculateButton');
    const resultDisplay = document.getElementById('resultDisplay');

    calculateButton.addEventListener('click', () => {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        if (isNaN(startDate) || isNaN(endDate)) {
            resultDisplay.textContent = "Please select valid dates.";
            return;
        }

        const timeDifference = Math.abs(endDate - startDate);
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        resultDisplay.textContent = `Difference: ${daysDifference} days`;
    });
});