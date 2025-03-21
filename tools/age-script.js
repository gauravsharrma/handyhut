document.getElementById("ageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    if (isNaN(birthdate.getTime())) {
        document.getElementById("result").innerText = "Please enter a valid birthdate.";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById("result").innerText = `You are ${age} years old.`;
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("birthdate").value = "";
    document.getElementById("result").innerText = "";
});