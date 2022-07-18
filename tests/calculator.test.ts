import calculate from '../src/index';

describe('The calculate should', () => {
  it('calculate the tax correctly for an earner that earns zero dollars', async () => {
    expect(calculate(0)).toBe(0);
  });
});
