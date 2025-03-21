document.getElementById("currencyForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount)) {
        document.getElementById("result").innerText = "Please enter a valid amount.";
        return;
    }

    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.rates && data.rates[toCurrency]) {
                const rate = data.rates[toCurrency];
                const convertedAmount = amount * rate;
                document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                document.getElementById("result").innerText = "Error fetching exchange rates.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerText = "An error occurred. Please try again.";
        });
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("amount").value = "1";
    document.getElementById("result").innerText = "";
});