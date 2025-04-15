import { sumAllNumber } from "."

describe('index.js', () => {
  it('sums two numbers', () => {
    const result = sumAllNumber(1, 2);
    expect(result).toBe(3);
  })

  it('does not sum when no numbers are passed', () => {
    const result = sumAllNumber();
    expect(result).toBe(0);
  })

  it('subtracts numbers', () => {
    const result = sumAllNumber(5, 2);
    expect(result).toBe(3);
  })
})
