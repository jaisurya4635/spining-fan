var fan = document.getElementById("fan"); // ✅ Declaring fan variable

function fanOn() {
    fan.classList.add("spin"); // ✅ Fan starts spinning
}

function fanOff() {
    fan.classList.remove("spin"); // ✅ Fan stops spinning
}
