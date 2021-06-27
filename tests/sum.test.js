import { sum } from '../src/sum';

test('01', () => {
  expect(sum(1, 2)).toEqual(3);
});

test('9999', () => {
  expect(null).toEqual(null);
});
