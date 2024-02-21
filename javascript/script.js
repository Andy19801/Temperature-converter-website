document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convertBtn").addEventListener("click", convertTemperature);
});

function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var convertedTemperature;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    if (unit === "celsius") {
        convertedTemperature = temperatureInput * 9 / 5 + 32;
        document.getElementById("result").innerHTML = temperatureInput + "°C is " + convertedTemperature.toFixed(2) + "°F";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5 / 9;
        document.getElementById("result").innerHTML = temperatureInput + "°F is " + convertedTemperature.toFixed(2) + "°C";
    } else if (unit === "kelvin") {
        convertedTemperature = temperatureInput - 273.15;
        document.getElementById("result").innerHTML = temperatureInput + "K is " + convertedTemperature.toFixed(2) + "°C";
    }
}
