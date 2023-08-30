document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var inputUnit = document.getElementById("unit").value;
    var convertedTemperature;
    var outputUnit;

    if (inputUnit === 'celsius') {
        convertedTemperature = temperature * 1.8 + 32;
        outputUnit = 'Fahrenheit';
    } else if (inputUnit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) / 1.8;
        outputUnit = 'Celsius';
    }

    document.getElementById('result').value = convertedTemperature.toFixed(1) + " " + outputUnit;
}

function clearForm() {
    document.getElementById('temperature').value = '';
    document.getElementById('unit').value = 'celsius';
    document.getElementById('result').value = '';
}