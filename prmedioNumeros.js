function calculateSumAndAverage() {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    const result = `
        <p>Suma: ${sum}</p>
        <p>Promedio: ${average.toFixed(2)}</p>
    `;
    document.getElementById('numbersResult').innerHTML = result;
}