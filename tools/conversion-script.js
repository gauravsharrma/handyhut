// tools/conversion-script.js
document.getElementById("convertButton").addEventListener("click", function() {
    const inputValue = document.getElementById("inputValue").value.trim();
    let decimal, fraction, percentage;

    if (inputValue.includes("/")) { // Fraction input
        const parts = inputValue.split("/");
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            decimal = parseFloat(parts[0]) / parseFloat(parts[1]);
            fraction = inputValue;
            percentage = decimal * 100;
        } else {
            document.getElementById("result").innerText = "Invalid fraction format.";
            return;
        }
    } else if (inputValue.includes("%")) { // Percentage input
        percentage = parseFloat(inputValue.replace("%", ""));
        decimal = percentage / 100;
        fraction = decimalToFraction(decimal);
    } else if (!isNaN(inputValue)) { // Decimal input
        decimal = parseFloat(inputValue);
        percentage = decimal * 100;
        fraction = decimalToFraction(decimal);
    } else {
        document.getElementById("result").innerText = "Invalid input.";
        return;
    }

    document.getElementById("result").innerHTML = `
        <p>Decimal: ${decimal.toFixed(4)}</p>
        <p>Fraction: ${fraction}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
});

function decimalToFraction(decimal) {
    if (decimal === 0) return "0";

    const tolerance = 1.0E-6;
    let numerator = 1;
    let denominator = 1;
    let whole = Math.floor(decimal);
    let remainder = decimal - whole;

    if (remainder === 0) return whole.toString();

    let leftNumerator = 0;
    let rightNumerator = 1;
    let leftDenominator = 1;
    let rightDenominator = 0;

    while (true) {
        let middleNumerator = leftNumerator + rightNumerator;
        let middleDenominator = leftDenominator + rightDenominator;
        let middleDecimal = middleNumerator / middleDenominator;

        if (Math.abs(middleDecimal - remainder) < tolerance) {
            numerator = middleNumerator;
            denominator = middleDenominator;
            break;
        }

        if (middleDecimal < remainder) {
            leftNumerator = middleNumerator;
            leftDenominator = middleDenominator;
        } else {
            rightNumerator = middleNumerator;
            rightDenominator = middleDenominator;
        }
    }

    if (whole === 0) return `${numerator}/${denominator}`;
    return `${whole} ${numerator}/${denominator}`;
}

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("inputValue").value = "";
    document.getElementById("result").innerHTML = "";
});