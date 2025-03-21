// tools/financial-script.js
document.addEventListener('DOMContentLoaded', () => {
    const calculatorType = document.getElementById('calculatorType');
    const fdInputs = document.getElementById('fdInputs');
    const rdInputs = document.getElementById('rdInputs');
    const ciInputs = document.getElementById('ciInputs');

    calculatorType.addEventListener('change', () => {
        const selectedType = calculatorType.value;
        fdInputs.style.display = selectedType === 'fd' ? 'block' : 'none';
        rdInputs.style.display = selectedType === 'rd' ? 'block' : 'none';
        ciInputs.style.display = selectedType === 'ci' ? 'block' : 'none';
    });

    document.getElementById('calculateButton').addEventListener('click', () => {
        const selectedType = calculatorType.value;
        let result = 0;

        if (selectedType === 'fd') {
            const principal = parseFloat(document.getElementById('fdPrincipal').value);
            const rate = parseFloat(document.getElementById('fdRate').value) / 100;
            const years = parseFloat(document.getElementById('fdYears').value);
            result = principal * Math.pow(1 + rate, years);
        } else if (selectedType === 'rd') {
            const monthly = parseFloat(document.getElementById('rdMonthly').value);
            const rate = parseFloat(document.getElementById('rdRate').value) / 12 / 100;
            const months = parseFloat(document.getElementById('rdMonths').value);
            result = monthly * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
        } else if (selectedType === 'ci') {
            const principal = parseFloat(document.getElementById('ciPrincipal').value);
            const rate = parseFloat(document.getElementById('ciRate').value) / 100;
            const years = parseFloat(document.getElementById('ciYears').value);
            const compounds = parseFloat(document.getElementById('ciCompounds').value);
            result = principal * Math.pow(1 + (rate / compounds), years * compounds);
        }

        document.getElementById('result').innerText = `Result: ₹${result.toFixed(2)}`;
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
        document.getElementById('result').innerText = '';
        if (calculatorType.value === 'fd') {
            document.getElementById('fdPrincipal').value = '';
            document.getElementById('fdRate').value = '';
            document.getElementById('fdYears').value = '';
        } else if (calculatorType.value === 'rd') {
            document.getElementById('rdMonthly').value = '';
            document.getElementById('rdRate').value = '';
            document.getElementById('rdMonths').value = '';
        } else if (calculatorType.value === 'ci') {
            document.getElementById('ciPrincipal').value = '';
            document.getElementById('ciRate').value = '';
            document.getElementById('ciYears').value = '';
            document.getElementById('ciCompounds').value = '1';
        }
    });
});