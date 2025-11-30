function toggleFrequency() {
    let calcType = document.getElementById("calc_type").value;
    document.getElementById("frequencyDiv").style.display =
        calcType === "day" ? "block" : "none";
}

function calculateDose() {
    let weight = parseFloat(document.getElementById("weight").value);
    let dosekg = parseFloat(document.getElementById("dosekg").value);
    let unit = parseFloat(document.getElementById("unit").value);
    let strength = parseFloat(document.getElementById("strength").value);
    let calcType = document.getElementById("calc_type").value;

    if (isNaN(weight) || isNaN(dosekg) || isNaN(unit) || isNaN(strength)) {
        document.getElementById("result").innerText = "⚠ Please enter all required values.";
        return;
    }

    let totalDose = weight * dosekg;
    let volumeRequired = totalDose * (unit / strength);

    if (calcType === "dose") {
        document.getElementById("result").innerText =
            `📌 Total Dose (Per Dose): ${totalDose.toFixed(2)} mg
💉 Volume Required (Per Dose): ${volumeRequired.toFixed(2)} mL`;
    } 
    else if (calcType === "day") {
        let frequency = document.getElementById("frequency").value;
        let dividedVolume = volumeRequired;

        if (frequency === "bd") {
            dividedVolume = volumeRequired / 2;
        } else if (frequency === "tds") {
            dividedVolume = volumeRequired / 3;
        }

        document.getElementById("result").innerText =
            `📌 Total Dose per Day: ${totalDose.toFixed(2)} mg
💉 Volume Required per Day: ${volumeRequired.toFixed(2)} mL
🕒 Divided Volume (${frequency.toUpperCase()}): ${dividedVolume.toFixed(2)} mL per dose`;
    }
}

function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("dosekg").value = "";
    document.getElementById("unit").value = "";
    document.getElementById("strength").value = "";
    document.getElementById("calc_type").value = "dose";
    toggleFrequency();
    document.getElementById("result").innerText = "";
}
