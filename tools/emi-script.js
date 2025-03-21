// tools/emi-script.js
document.getElementById("emiForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const P = parseFloat(document.getElementById("principal").value);
  const R = parseFloat(document.getElementById("rate").value);
  const N = parseFloat(document.getElementById("months").value);

  if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || R <= 0 || N <= 0) {
    document.getElementById("result").innerText = "Please enter valid positive numbers.";
    return;
  }

  const monthlyRate = R / 12 / 100;
  const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) / (Math.pow(1 + monthlyRate, N) - 1);
  document.getElementById("result").innerText = `Your EMI is ₹${emi.toFixed(2)}`;
}); // Added closing brace here

document.getElementById("clearBtn").addEventListener("click", function(){
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("months").value = "";
    document.getElementById("result").innerText = "";
});