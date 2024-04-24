import pointCalculation from './pointCalculation';

describe('pointCalculation function', () => {
  beforeEach(() => {
    // Reset points before each test
    pointCalculation(0);
  });

  test('adds points based on the number', () => {
    // Call the pointCalculation function with different numbers
    pointCalculation(2);
    expect(pointCalculation(2)).toBe(4); // 2 + 2 = 4
    expect(pointCalculation(4)).toBe(8); // 4 + 4 = 8
    expect(pointCalculation(8)).toBe(16); // 8 + 8 = 16
  });

  test('resets points to zero if number is zero', () => {
    // Call the pointCalculation function with zero
    expect(pointCalculation(2)).toBe(2);
    expect(pointCalculation(0)).toBe(0); // Reset points to zero
  });
});
