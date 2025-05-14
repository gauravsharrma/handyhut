document.addEventListener('DOMContentLoaded', () => {
    // const conversionTypeSelect = document.getElementById('conversionType'); // REMOVED
    const conversionTypeButtonsContainer = document.getElementById('conversionTypeButtons');
    const typeButtons = conversionTypeButtonsContainer.querySelectorAll('.type-button');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const inputValueInput = document.getElementById('inputValue');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('conversionResult');

    let currentConversionType = 'length'; // Default type

    const units = {
        length: {
            meters: { name: 'Meters (m)', toBase: 1, fromBase: 1 },
            kilometers: { name: 'Kilometers (km)', toBase: 1000, fromBase: 1 / 1000 },
            centimeters: { name: 'Centimeters (cm)', toBase: 0.01, fromBase: 100 },
            millimeters: { name: 'Millimeters (mm)', toBase: 0.001, fromBase: 1000 },
            miles: { name: 'Miles (mi)', toBase: 1609.34, fromBase: 1 / 1609.34 },
            yards: { name: 'Yards (yd)', toBase: 0.9144, fromBase: 1 / 0.9144 },
            feet: { name: 'Feet (ft)', toBase: 0.3048, fromBase: 1 / 0.3048 },
            inches: { name: 'Inches (in)', toBase: 0.0254, fromBase: 1 / 0.0254 },
            nauticalmiles: { name: 'Nautical Miles (NM)', toBase: 1852, fromBase: 1 / 1852 }
        },
        weight: { // Mass
            kilograms: { name: 'Kilograms (kg)', toBase: 1, fromBase: 1 },
            grams: { name: 'Grams (g)', toBase: 0.001, fromBase: 1000 },
            milligrams: { name: 'Milligrams (mg)', toBase: 0.000001, fromBase: 1000000 },
            pounds: { name: 'Pounds (lb)', toBase: 0.453592, fromBase: 1 / 0.453592 },
            ounces: { name: 'Ounces (oz)', toBase: 0.0283495, fromBase: 1 / 0.0283495 },
            tonnes: { name: 'Metric Tonnes (t)', toBase: 1000, fromBase: 1/1000 },
            stones: { name: 'Stones (st)', toBase: 6.35029, fromBase: 1/6.35029 }
        },
        volume: {
            liters: { name: 'Liters (L)', toBase: 1, fromBase: 1 },
            milliliters: { name: 'Milliliters (mL)', toBase: 0.001, fromBase: 1000 },
            cubicmeters: { name: 'Cubic Meters (m³)', toBase: 1000, fromBase: 0.001 },
            gallons_us: { name: 'Gallons (US gal)', toBase: 3.78541, fromBase: 1 / 3.78541 },
            quarts_us: { name: 'Quarts (US qt)', toBase: 0.946353, fromBase: 1 / 0.946353 },
            pints_us: { name: 'Pints (US pt)', toBase: 0.473176, fromBase: 1 / 0.473176 },
            cups_us: { name: 'Cups (US cup)', toBase: 0.24, fromBase: 1 / 0.24 }, // US legal cup
            fluidounces_us: { name: 'Fluid Ounces (US fl oz)', toBase: 0.0295735, fromBase: 1 / 0.0295735 },
            gallons_uk: { name: 'Gallons (UK gal)', toBase: 4.54609, fromBase: 1 / 4.54609 },
        },
        temperature: { // Special handling
            celsius: { name: 'Celsius (°C)' },
            fahrenheit: { name: 'Fahrenheit (°F)' },
            kelvin: { name: 'Kelvin (K)' }
        },
        area: {
            squaremeters: { name: 'Square Meters (m²)', toBase: 1, fromBase: 1 },
            squarekilometers: { name: 'Square Kilometers (km²)', toBase: 1000000, fromBase: 1 / 1000000 },
            squaremiles: { name: 'Square Miles (mi²)', toBase: 2589988.11, fromBase: 1 / 2589988.11 },
            squareyards: { name: 'Square Yards (yd²)', toBase: 0.836127, fromBase: 1 / 0.836127 },
            squarefeet: { name: 'Square Feet (ft²)', toBase: 0.092903, fromBase: 1 / 0.092903 },
            acres: { name: 'Acres (ac)', toBase: 4046.86, fromBase: 1 / 4046.86 },
            hectares: { name: 'Hectares (ha)', toBase: 10000, fromBase: 1 / 10000 }
        },
        time: {
            seconds: { name: 'Seconds (s)', toBase: 1, fromBase: 1 },
            minutes: { name: 'Minutes (min)', toBase: 60, fromBase: 1 / 60 },
            hours: { name: 'Hours (hr)', toBase: 3600, fromBase: 1 / 3600 },
            days: { name: 'Days (d)', toBase: 86400, fromBase: 1 / 86400 },
            weeks: { name: 'Weeks (wk)', toBase: 604800, fromBase: 1 / 604800 },
            months: { name: 'Months (approx)', toBase: 2629800, fromBase: 1 / 2629800 }, // Avg 30.4375 days
            years: { name: 'Years (approx)', toBase: 31557600, fromBase: 1 / 31557600 } // Avg 365.25 days
        },
        speed: {
            mps: { name: 'Meters per second (m/s)', toBase: 1, fromBase: 1 },
            kph: { name: 'Kilometers per hour (km/h)', toBase: 1 / 3.6, fromBase: 3.6 },
            mph: { name: 'Miles per hour (mph)', toBase: 0.44704, fromBase: 1 / 0.44704 },
            knots: { name: 'Knots (kn)', toBase: 0.514444, fromBase: 1 / 0.514444 },
            fps: { name: 'Feet per second (ft/s)', toBase: 0.3048, fromBase: 1 / 0.3048 }
        }
    };

    function setActiveButton(selectedButton) {
        typeButtons.forEach(button => {
            button.classList.remove('active');
        });
        if (selectedButton) {
            selectedButton.classList.add('active');
        }
    }

    function populateUnitOptions() {
        // currentConversionType is now a global variable in this scope
        const currentUnits = units[currentConversionType];

        fromUnitSelect.innerHTML = '';
        toUnitSelect.innerHTML = '';

        if (currentUnits) {
            for (const unitKey in currentUnits) {
                const optionFrom = document.createElement('option');
                optionFrom.value = unitKey;
                optionFrom.textContent = currentUnits[unitKey].name;
                fromUnitSelect.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = unitKey;
                optionTo.textContent = currentUnits[unitKey].name;
                toUnitSelect.appendChild(optionTo);
            }
            if (fromUnitSelect.options.length > 1) {
                toUnitSelect.selectedIndex = 1;
            } else if (fromUnitSelect.options.length === 1) {
                 toUnitSelect.selectedIndex = 0;
            }
        }
        resultDiv.textContent = 'Awaiting conversion...';
        resultDiv.className = 'mt-8 p-4 bg-gray-700 rounded-md text-lg text-center font-semibold min-h-[50px] flex items-center justify-center';
        inputValueInput.classList.remove('input-error');
        inputValueInput.value = ''; // Clear input value on type change
    }

    function convertUnits() {
        // currentConversionType is used here
        const fromUnitKey = fromUnitSelect.value;
        const toUnitKey = toUnitSelect.value;
        const inputValue = parseFloat(inputValueInput.value);

        inputValueInput.classList.remove('input-error');
        resultDiv.className = 'mt-8 p-4 bg-gray-700 rounded-md text-lg text-center font-semibold min-h-[50px] flex items-center justify-center';

        if (isNaN(inputValue)) {
            resultDiv.textContent = "Please enter a valid number.";
            resultDiv.classList.add('result-error');
            inputValueInput.classList.add('input-error');
            return;
        }

        if (!fromUnitKey || !toUnitKey) {
            resultDiv.textContent = "Please select units for conversion.";
            resultDiv.classList.add('result-error');
            return;
        }
        
        if (fromUnitKey === toUnitKey) {
            resultDiv.textContent = `${inputValue.toLocaleString()} ${units[currentConversionType][fromUnitKey].name.split(' (')[0]} is equal to ${inputValue.toLocaleString()} ${units[currentConversionType][toUnitKey].name.split(' (')[0]}.`;
            resultDiv.classList.add('result-success');
            return;
        }

        let resultValue;
        const unitDefinitions = units[currentConversionType];

        if (currentConversionType === 'temperature') {
            if (fromUnitKey === 'celsius') {
                if (toUnitKey === 'fahrenheit') resultValue = (inputValue * 9/5) + 32;
                else if (toUnitKey === 'kelvin') resultValue = inputValue + 273.15;
            } else if (fromUnitKey === 'fahrenheit') {
                if (toUnitKey === 'celsius') resultValue = (inputValue - 32) * 5/9;
                else if (toUnitKey === 'kelvin') resultValue = (inputValue - 32) * 5/9 + 273.15;
            } else if (fromUnitKey === 'kelvin') {
                if (toUnitKey === 'celsius') resultValue = inputValue - 273.15;
                else if (toUnitKey === 'fahrenheit') resultValue = (inputValue - 273.15) * 9/5 + 32;
            }
        } else {
            const valueInBaseUnit = inputValue * unitDefinitions[fromUnitKey].toBase;
            resultValue = valueInBaseUnit * unitDefinitions[toUnitKey].fromBase;
        }

        if (resultValue !== undefined) {
            let formattedResult;
            if (Math.abs(resultValue) < 0.00001 && resultValue !== 0) { // Adjusted for more precision before scientific
                formattedResult = resultValue.toExponential(5);
            } else {
                formattedResult = parseFloat(resultValue.toFixed(7)).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 7 });
            }
            resultDiv.textContent = `${inputValue.toLocaleString()} ${unitDefinitions[fromUnitKey].name.split(' (')[0]} is equal to ${formattedResult} ${unitDefinitions[toUnitKey].name.split(' (')[0]}.`;
            resultDiv.classList.add('result-success');
        } else {
            resultDiv.textContent = `Conversion logic for ${fromUnitKey} to ${toUnitKey} in ${currentConversionType} is not defined.`;
            resultDiv.classList.add('result-error');
        }
    }

    // Event Listeners for Type Buttons
    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentConversionType = button.dataset.type;
            setActiveButton(button);
            populateUnitOptions();
        });
    });

    convertButton.addEventListener('click', convertUnits);
    inputValueInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            convertUnits();
        }
    });
    inputValueInput.addEventListener('input', () => {
        resultDiv.textContent = 'Awaiting conversion...';
        resultDiv.className = 'mt-8 p-4 bg-gray-700 rounded-md text-lg text-center font-semibold min-h-[50px] flex items-center justify-center';
        inputValueInput.classList.remove('input-error');
    });

    // Initial setup
    const initialActiveButton = conversionTypeButtonsContainer.querySelector(`.type-button[data-type="${currentConversionType}"]`);
    setActiveButton(initialActiveButton);
    populateUnitOptions();
});