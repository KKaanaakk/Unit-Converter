// script.js

// Function to open a specific tab
function openTab(event, tabName) {
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
}

// Function to show only the relevant result and hide others
function displayResult(resultId) {
    const results = ["tempResult", "weightResult", "lengthResult"];
    results.forEach(id => {
        document.getElementById(id).style.display = id === resultId ? "block" : "none";
    });
}

// Temperature Converter Function
function convertTemperature() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("tempUnit").value;
    let result = "";

    if (unit === "Celsius") {
        result = `Fahrenheit: ${(temp * 9/5) + 32}, Kelvin: ${temp + 273.15}`;
    } else if (unit === "Fahrenheit") {
        result = `Celsius: ${(temp - 32) * 5/9}, Kelvin: ${((temp - 32) * 5/9) + 273.15}`;
    } else if (unit === "Kelvin") {
        result = `Celsius: ${temp - 273.15}, Fahrenheit: ${(temp - 273.15) * 9/5 + 32}`;
    }
    document.getElementById("tempResult").innerText = result;
    displayResult("tempResult"); // Show only tempResult
}

// Weight Converter Function
function convertWeight() {
    const weight = parseFloat(document.getElementById("weightInput").value);
    const unit = document.getElementById("weightUnit").value;
    let result = "";

    if (unit === "Kilograms") {
        result = `Pounds: ${weight * 2.20462}, Ounces: ${weight * 35.274}`;
    } else if (unit === "Pounds") {
        result = `Kilograms: ${weight / 2.20462}, Ounces: ${weight * 16}`;
    } else if (unit === "Ounces") {
        result = `Kilograms: ${weight / 35.274}, Pounds: ${weight / 16}`;
    }
    document.getElementById("weightResult").innerText = result;
    displayResult("weightResult"); // Show only weightResult
}

// Length Converter Function
function convertLength() {
    const length = parseFloat(document.getElementById("lengthInput").value);
    const unit = document.getElementById("lengthUnit").value;
    let result = "";

    if (unit === "Meters") {
        result = `Kilometers: ${length / 1000}, Miles: ${length * 0.000621371}`;
    } else if (unit === "Kilometers") {
        result = `Meters: ${length * 1000}, Miles: ${length * 0.621371}`;
    } else if (unit === "Miles") {
        result = `Meters: ${length / 0.000621371}, Kilometers: ${length / 0.621371}`;
    }
    document.getElementById("lengthResult").innerText = result;
    displayResult("lengthResult"); // Show only lengthResult
}
