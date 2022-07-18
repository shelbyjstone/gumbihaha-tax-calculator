import calculate from '../src/index';

it('The calculate should add two numbers together correctly', async () => {
  expect(calculate(5, 7)).toBe(12);
});
