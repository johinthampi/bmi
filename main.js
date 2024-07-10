const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");

function reload() {
    document.getElementById('heightcm').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    bmiText.textContent = 0;
    bmiText.className = "";
    descText.innerHTML = "N/A";
}

function calculatebmi() {
    const heightcm = document.getElementById('heightcm').value;
    const weight = document.getElementById('weight').value;

    if (heightcm && weight) {
        const heightm = heightcm / 100;
        const bmi = weight / (heightm * heightm);
        const desc = interpretBMI(bmi);

        bmiText.textContent = bmi.toFixed(2);
        bmiText.className = desc;
        descText.innerHTML = `You are <strong>${desc}</strong>`;
    } else {
        bmiText.textContent = "0";
        bmiText.className = "";
        descText.innerHTML = alert("Please enter height and weight ")|| "N/A";
    }
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return 'underweight';
    } else if (bmi < 25) {
        return 'healthy';
    } else if (bmi < 30) {
        return 'overweight';
    } else {
        return 'obese';
    }
}