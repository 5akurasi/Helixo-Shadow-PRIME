document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("toggle");
    const primeText = document.querySelector(".PrimeText");

    const savedState = localStorage.getItem("toggleState");
    const savedText = localStorage.getItem("primeText");

    if (savedState === "checked") {
        toggle.checked = true;
        primeText.textContent = "Prime ON";
        primeText.style.color = "lime";
    } else {
        toggle.checked = false;
        primeText.textContent = "Prime OFF";
        primeText.style.color = "red";
    }

    toggle.addEventListener("change", function() {
        if (toggle.checked) {
            primeText.textContent = "Prime ON";
            primeText.style.color = "lime";
            localStorage.setItem("toggleState", "checked");
            localStorage.setItem("primeText", "Prime ON");
        } else {
            primeText.textContent = "Prime OFF";
            primeText.style.color = "red";
            localStorage.setItem("toggleState", "unchecked");
            localStorage.setItem("primeText", "Prime OFF");
        }
    });
});
