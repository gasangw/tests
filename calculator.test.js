const Cal = require('./calculator')


describe('Calculator addition', () => {
  test('adds 2 positive numbers', () => {
    expect(Cal.add(1, 1)).toBe(2);
  });

  test('adds 2 negative numbers', () => {
    expect(Cal.add(-15, -7)).toBe(-22);
  });

  test('adds 2 floats', () => {
    expect(Cal.add(1.4, 1.5)).toBe(2.9);
  });
});

describe('Calculator subtraction', () => {
  test('subtracts 2 positive numbers', () => {
    expect(Cal.subtract(1, 1)).toBe(0);
  });

  test('subtracts 2 negative numbers', () => {
    expect(Cal.subtract(-15, -7)).toBe(-8);
  });

  test('subtracts 2 floats', () => {
    expect(Cal.subtract(1.5, 1.5)).toBe(0);
  });
});

describe('Calculator division', () => {
  test('divides 2 positive numbers', () => {
    expect(Cal.divide(1, 1)).toBe(1);
  });

  test('divides 2 negative numbers', () => {
    expect(Cal.divide(-15, -7)).toBe(2.142857142857143);
  });

  test('divides 2 floats', () => {
    expect(Cal.divide(1.5, 1.5)).toBe(1);
  });
});

describe('Calculator multiplication', () => {
  test('multiplies 2 positive numbers', () => {
    expect(Cal.multiply(1, 1)).toBe(1);
  });

  test('multiplies 2 negative numbers', () => {
    expect(Cal.multiply(-15, -7)).toBe(105);
  });

  test('multiplies 2 floats', () => {
    expect(Cal.multiply(1.5, 1.5)).toBe(2.25);
  });
});