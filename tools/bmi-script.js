document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerText = "Please enter valid height and weight.";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)}. Category: ${category}.`;
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerText = "";
});