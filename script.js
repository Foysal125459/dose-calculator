function calculateDose() {
    let weight = parseFloat(document.getElementById("weight").value);
    let dosekg = parseFloat(document.getElementById("dosekg").value);
    let unit = parseFloat(document.getElementById("unit").value);
    let strength = parseFloat(document.getElementById("strength").value);

    if (isNaN(weight) || isNaN(dosekg) || isNaN(unit) || isNaN(strength)) {
        document.getElementById("result").innerText = "⚠ Please enter all values correctly.";
        return;
    }

    let dose = weight * dosekg;
    let volume = dose * (unit / strength);

    document.getElementById("result").innerText =
        `📌 Total Dose per day: ${dose.toFixed(2)} mg
        \n💉 Volume Required: ${volume.toFixed(2)} mL`;
}
