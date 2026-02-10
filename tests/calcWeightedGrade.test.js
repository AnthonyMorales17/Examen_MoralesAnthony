import calcWeightedGrade from '../src/utils/calcWeightedGrade.js';

test('calcWeightedGrade [{score:80,weight:0.4},{score:90,weight:0.6}] = 86.00', () => {
    const result = calcWeightedGrade([
        { score: 80, weight: 0.4 },
        { score: 90, weight: 0.6 }
    ]);
    expect(result).toBe(86.00);
});

// Casos normales
test('calcWeightedGrade con un solo item de peso 1', () => {
    const result = calcWeightedGrade([{ score: 75, weight: 1 }]);
    expect(result).toBe(75.00);
});

test('calcWeightedGrade con tres componentes', () => {
    const result = calcWeightedGrade([
        { score: 100, weight: 0.3 },
        { score: 80, weight: 0.3 },
        { score: 60, weight: 0.4 }
    ]);
    expect(result).toBe(78.00);
});

// Errores TypeError
test('calcWeightedGrade lanza TypeError si items no es arreglo', () => {
    expect(() => calcWeightedGrade('no es arreglo')).toThrow(TypeError);
});

test('calcWeightedGrade lanza TypeError si score no es numero', () => {
    expect(() => calcWeightedGrade([{ score: '80', weight: 1 }])).toThrow(TypeError);
});

// Errores RangeError
test('calcWeightedGrade lanza RangeError si items esta vacio', () => {
    expect(() => calcWeightedGrade([])).toThrow(RangeError);
});

test('calcWeightedGrade lanza RangeError si suma de pesos no es 1', () => {
    expect(() => calcWeightedGrade([
        { score: 80, weight: 0.3 },
        { score: 90, weight: 0.3 }
    ])).toThrow(RangeError);
});
