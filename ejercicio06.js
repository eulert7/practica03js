function simularLanzamientos(numLanzamientos) {
    const resultados = Array(13).fill(0); 
    for (let i = 0; i < numLanzamientos; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        const suma = dado1 + dado2;
        resultados[suma]++;
    }

    const probabilidades = resultados.slice(2).map(count => count / numLanzamientos);

    return probabilidades.map((prob, index) => ({
        suma: index + 2,
        probabilidad: prob
    }));
}
const numLanzamientos = 10000;
const probabilidades = simularLanzamientos(numLanzamientos);
console.log(probabilidades);