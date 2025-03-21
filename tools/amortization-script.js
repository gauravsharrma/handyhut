// tools/amortization-script.js
document.getElementById("calculateButton").addEventListener("click", function() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value) * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate < 0 || loanTerm <= 0) {
        document.getElementById("result").innerText = "Please enter valid loan details.";
        return;
    }

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);

    let amortizationSchedule = "<table style='border-collapse: collapse; width: 100%; border: 1px solid black;'><tr><th style='border: 1px solid black; padding: 8px;'>Month</th><th style='border: 1px solid black; padding: 8px;'>Payment</th><th style='border: 1px solid black; padding: 8px;'>Principal</th><th style='border: 1px solid black; padding: 8px;'>Interest</th><th style='border: 1px solid black; padding: 8px;'>Balance</th></tr>";
    let remainingBalance = loanAmount;

    for (let month = 1; month <= loanTerm; month++) {
        const interestPaid = remainingBalance * interestRate;
        const principalPaid = monthlyPayment - interestPaid;
        remainingBalance -= principalPaid;

        amortizationSchedule += `<tr style='border: 1px solid black;'><td style='border: 1px solid black; padding: 8px;'>${month}</td><td style='border: 1px solid black; padding: 8px;'>₹${Math.round(monthlyPayment)}</td><td style='border: 1px solid black; padding: 8px;'>₹${Math.round(principalPaid)}</td><td style='border: 1px solid black; padding: 8px;'>₹${Math.round(interestPaid)}</td><td style='border: 1px solid black; padding: 8px;'>₹${Math.round(remainingBalance)}</td></tr>`;
    }

    amortizationSchedule += "</table>";
    document.getElementById("result").innerHTML = amortizationSchedule;
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("loanAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";
    document.getElementById("result").innerHTML = "";
});