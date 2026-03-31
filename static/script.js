let chart;

// Allow only numbers + decimal
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9.]/g, '');

        let parts = this.value.split('.');
        if (parts.length > 2) {
            this.value = parts[0] + '.' + parts[1];
        }
    });
});

// Enter navigation
const inputs = document.querySelectorAll("input");

inputs.forEach((input, index) => {
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            } else {
                document.getElementById("form").requestSubmit();
            }
        }
    });
});

// Autofocus
window.onload = () => {
    document.getElementById("pregnancies").focus();
};

// Form submit
document.getElementById("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const resultBox = document.getElementById("resultBox");
    resultBox.classList.remove("hidden");

    const data = {
        pregnancies: pregnancies.value,
        glucose: glucose.value,
        bloodpressure: bloodpressure.value,
        skinthickness: skinthickness.value,
        insulin: insulin.value,
        bmi: bmi.value,
        dpf: dpf.value,
        age: age.value
    };

    const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const res = await response.json();

    const prob = res.probability;

    document.getElementById("result").innerText = res.result;
    document.getElementById("percentage").innerText = prob + "% Risk";

    document.getElementById("progressBar").style.width = prob + "%";

    let risk = "Low";
    if (prob > 70) risk = "High";
    else if (prob > 30) risk = "Medium";

    document.getElementById("riskLevel").innerText = risk + " Risk";

    // Chart
    const ctx = document.getElementById("chart");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Risk', 'Safe'],
            datasets: [{
                data: [prob, 100 - prob],
                backgroundColor: ['#ff4d4d', '#00ff99']
            }]
        }
    });
});