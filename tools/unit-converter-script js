// tools/unit-converter-script.js
document.addEventListener('DOMContentLoaded', () => {
    const conversionType = document.getElementById('conversionType');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const inputValue = document.getElementById('inputValue');
    const convertButton = document.getElementById('convertButton');
    const resultDisplay = document.getElementById('resultDisplay');

    const units = {
        length: {
            meters: 1,
            kilometers: 1000,
            centimeters: 0.01,
            millimeters: 0.001,
            miles: 1609.34,
            feet: 0.3048,
            inches: 0.0254
        },
        weight: {
            kilograms: 1,
            grams: 0.001,
            pounds: 0.453592,
            ounces: 0.0283495
        },
        temperature: {
            celsius: 1,
            fahrenheit: 'convertFahrenheit',
            kelvin: 'convertKelvin'
        },
        speed: {
            'meters/second': 1,
            'kilometers/hour': 0.277778,
            'miles/hour': 0.44704,
            knots: 0.514444
        },
        area: {
            'square meters': 1,
            'square kilometers': 1000000,
            'square feet': 0.092903,
            acres: 4046.86
        },
        volume: {
            liters: 1,
            'cubic meters': 1000,
            gallons: 3.78541,
            'cubic feet': 28.3168
        },
        time: {
            seconds: 1,
            minutes: 60,
            hours: 3600,
            days: 86400
        }
    };

    function populateUnits() {
        const selectedType = conversionType.value;
        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';

        Object.keys(units[selectedType]).forEach(unit => {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = unit;
            fromUnit.appendChild(option);
            toUnit.appendChild(option.cloneNode(true));
        });
    }

    populateUnits();
    conversionType.addEventListener('change', populateUnits);

    convertButton.addEventListener('click', () => {
        const selectedType = conversionType.value;
        const fromValue = parseFloat(inputValue.value);
        const fromSelectedUnit = fromUnit.value;
        const toSelectedUnit = toUnit.value;

        if (isNaN(fromValue)) {
            resultDisplay.textContent = 'Please enter a valid number.';
            return;
        }

        let result;
        if (units[selectedType][fromSelectedUnit] === 'convertFahrenheit') {
            if (toSelectedUnit === 'celsius') {
                result = (fromValue - 32) * 5 / 9;
            } else if (toSelectedUnit === 'kelvin') {
                result = (fromValue - 32) * 5 / 9 + 273.15;
            } else {
                result = fromValue;
            }
        } else if (units[selectedType][fromSelectedUnit] === 'convertKelvin') {
            if (toSelectedUnit === 'celsius') {
                result = fromValue - 273.15;
            } else if (toSelectedUnit === 'fahrenheit') {
                result = (fromValue - 273.15) * 9 / 5 + 32;
            } else {
                result = fromValue;
            }
        } else {
            result = (fromValue * units[selectedType][fromSelectedUnit]) / units[selectedType][toSelectedUnit];
        }

        resultDisplay.textContent = `${fromValue} ${fromSelectedUnit} = ${result.toFixed(2)} ${toSelectedUnit}`;
    });
});