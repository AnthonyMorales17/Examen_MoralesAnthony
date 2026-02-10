// Calcula el percentil usando nearest-rank
function percentile(p, values) {
    // Validar que p sea un numero
    if (typeof p !== 'number') {
        throw new TypeError('p debe ser un numero');
    }

    // Validar que values sea un arreglo
    if (!Array.isArray(values)) {
        throw new TypeError('values debe ser un arreglo');
    }

    // Validar que values tenga al menos 1 elemento
    if (values.length === 0) {
        throw new RangeError('values debe tener al menos un elemento');
    }

    // Validar que p este en el rango [0, 100]
    if (p < 0 || p > 100) {
        throw new RangeError('p debe estar entre 0 y 100');
    }

    // Validar que todos los elementos de values sean numeros
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] !== 'number') {
            throw new TypeError('Todos los elementos de values deben ser numeros');
        }
    }

    // Ordenar ascendentemente
    const sorted = [...values].sort((a, b) => a - b);
    const n = sorted.length;

    // Casos especiales para los bordes
    if (p === 0) {
        return Number(sorted[0].toFixed(2));
    }

    if (p === 100) {
        return Number(sorted[n - 1].toFixed(2));
    }

    // Metodo nearest-rank: rank = ceil(p/100 * N)
    const rank = Math.ceil((p / 100) * n);
    
    // El indice es rank - 1 porque los arreglos empiezan en 0
    const index = rank - 1;

    return Number(sorted[index].toFixed(2));
}

export default percentile;
