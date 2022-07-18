import calculate from '../src/index';

describe('The calculate should', () => {
  it('add two positive numbers together correctly', async () => {
    expect(calculate(2, 2)).toBe(4);
  });

  it('add one positive number and a negitive number together correctly', async () => {
    expect(calculate(5, -9)).toBe(-4);
  });
});
