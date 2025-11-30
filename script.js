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

    // Formula applied correctly
    let totalDose = weight * dosekg;
    let volumeRequired = totalDose * (unit / strength);

    if (calcType === "dose") {
        document.getElementById("result").innerText =
            `📌 Total Dose (Per Dose): ${totalDose.toFixed(2)} mg
            \n💉 Volume Required (Per Dose): ${volumeRequired.toFixed(2)} mL`;
    } 
    else if (calcType === "day") {
        document.getElementById("result").innerText =
            `📌 Total Dose per Day: ${totalDose.toFixed(2)} mg
            \n💉 Volume Required per Day: ${volumeRequired.toFixed(2)} mL`;
    }
}

function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("dosekg").value = "";
    document.getElementById("unit").value = "";
    document.getElementById("strength").value = "";
    document.getElementById("result").innerText = "";
}
