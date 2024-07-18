function convertDays() {
    const totalDays = parseInt(document.getElementById('days').value);
    const years = Math.floor(totalDays / 365);
    const weeks = Math.floor((totalDays % 365) / 7);
    const days = totalDays % 365 % 7;

    const result = `
        <p>${totalDays} días equivalen a:</p>
        <p>${years} años, ${weeks} semanas, y ${days} días</p>
    `;
    document.getElementById('daysResult').innerHTML = result;
}