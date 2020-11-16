
const conc = require('./someModule').conc

test('multiply 2', () => {
    expect(4).toBe(4);
});

test('concat test', () => {
    expect(conc('a','b')).toBe('ab');
});

test('concat null', () => {
    expect(conc(null,null)).toBe(0);
});

