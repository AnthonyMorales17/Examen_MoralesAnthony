import percentile from '../src/utils/percentile.js';

test('percentil(100, [1,2,3]) debe ser 3.00', () => {
    expect(percentile(100, [1, 2, 3])).toBe(3.00);
});

test('percentil(50, [1,2,3,4]) debe ser 2.00 nearest-rank', () => {
    expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
});

// Casos normales
test('percentil 25 de [1,2,3,4,5,6,7,8]', () => {
    const result = percentile(25, [1, 2, 3, 4, 5, 6, 7, 8]);
    expect(result).toBe(2.00);
});

test('percentil con un solo elementeo', () => {
    expect(percentile(50, [42])).toBe(42.00);
});

test('percentil con arreglo desordenado', () => {
    expect(percentile(50, [3, 1, 4, 1, 5, 9, 2, 6])).toBe(3.00);
});

// Casos de borde
test('percentil 0 retorna el minimo', () => {
    expect(percentile(0, [5, 10, 15, 20])).toBe(5.00);
});

test('percentil 100 retorna el maximo', () => {
    expect(percentile(100, [5, 10, 15, 20])).toBe(20.00);
});

// Errores TypeError
test('percentil lanza TypeError si p no es numero', () => {
    expect(() => percentile('50', [1, 2, 3])).toThrow(TypeError);
});

test('percentil lanza TypeError si elemento no es numero', () => {
    expect(() => percentile(50, [1, '2', 3])).toThrow(TypeError);
});

// Errores RangeError
test('percentil lanza RangeError si values esta vacio', () => {
    expect(() => percentile(50, [])).toThrow(RangeError);
});

test('percentil lanza RangeError si p mayor a 100', () => {
    expect(() => percentile(101, [1, 2, 3])).toThrow(RangeError);
});
