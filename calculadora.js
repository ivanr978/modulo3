function operaciones() {
    const numero1 = parseFloat(document.getElementById('numbero1').value);
    const numero2 = parseFloat(document.getElementById('numbero2').value);

    if (numero1 <= 0 || numero2 <= 0 || numero1 === numero2) {
        alert("Por favor ingrese números diferentes y mayores a cero.");
        return;
    }

    const sum = numero1 + numero2;
    const subtract = numero1 - numero2;
    const multiply = numero1 * numero2;
    const divide = numero1 / numero2;

    const resultado = `
        <p>Suma: ${numero1} + ${numero2} = ${sum}</p>
        <p>Resta: ${numero1} - ${numero2} = ${subtract}</p>
        <p>Multiplicación: ${numero1} * ${numero2} = ${multiply}</p>
        <p>División: ${numero1} / ${numero2} = ${divide.toFixed(2)}</p>
    `;
    document.getElementById('resultados').innerHTML = resultado;
}