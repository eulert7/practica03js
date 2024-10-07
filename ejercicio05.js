function calcularEstadisticas(numeros) {
    if (numeros.length === 0) return {};
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    const media = suma / numeros.length;
    const sorted = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(sorted.length / 2);
    let mediana;
    if (sorted.length % 2 === 0) {
        mediana = (sorted[mitad - 1] + sorted[mitad]) / 2;
    } else {
        mediana = sorted[mitad];
    }
    const frecuencia = {};
    numeros.forEach(num => {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
    });
    const maxFrecuencia = Math.max(...Object.values(frecuencia));
    const moda = Object.keys(frecuencia).filter(num => frecuencia[num] === maxFrecuencia);
    return {
        media: media,
        mediana: mediana,
        moda: moda.length === 1 ? Number(moda[0]) : moda.map(Number)
    };
}
const numeros = [1, 2, 2, 3, 4, 5, 5, 5];
const estadisticas = calcularEstadisticas(numeros);
console.log(estadisticas);