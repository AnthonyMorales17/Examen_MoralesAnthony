// Calcula la nota ponderada
function calcWeightedGrade(items) {
    // Validar que items sea un arreglo
    if (!Array.isArray(items)) {
        throw new TypeError('items debe ser un arreglo');
    }

    // Validar que el arreglo no este vacío
    if (items.length === 0) {
        throw new RangeError('items no puede estar vacío');
    }

    let totalWeight = 0;
    let weightedSum = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // Validar que cada item sea un objeto
        if (typeof item !== 'object' || item === null) {
            throw new TypeError('Cada item debe ser un objeto');
        }

        // Validar que score exista y sea numero
        if (typeof item.score !== 'number') {
            throw new TypeError('score debe ser un número');
        }

        // Validar que weight exista y que sea numero
        if (typeof item.weight !== 'number') {
            throw new TypeError('weight debe ser un número');
        }

        // Validar rango de score (0-100)
        if (item.score < 0 || item.score > 100) {
            throw new RangeError('score debe estar entre 0 y 100');
        }

        // Validar rango de weight (0-1)
        if (item.weight < 0 || item.weight > 1) {
            throw new RangeError('weight debe estar entre 0 y 1');
        }

        totalWeight += item.weight;
        weightedSum += item.score * item.weight;
    }

    // Validar que la suma de pesos sea 1 (tolerancia +-0.001)
    if (Math.abs(totalWeight - 1) > 0.001) {
        throw new RangeError('La suma de los pesos debe ser igual a 1');
    }

    // Devolver con 2 decimales
    return Number(weightedSum.toFixed(2));
}

export default calcWeightedGrade;