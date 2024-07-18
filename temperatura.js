function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;

    const result = `
        <p>${celsius} °C = ${kelvin.toFixed(2)} K</p>
        <p>${celsius} °C = ${fahrenheit.toFixed(2)} °F</p>
    `;
    document.getElementById('temperatureResult').innerHTML = result;
}
