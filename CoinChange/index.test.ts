import coinChange from "."
import { describe, it, expect } from 'vitest'

describe("Coin change", () => {
  it("Multiple elements", () => {
    expect(coinChange([1,2,5], 11))
      .toBe(3)
  })
  it("Multiple elements", () => {
    expect(coinChange([1,2], 6))
      .toBe(3)
  })
  it("One element", () => {
    expect(coinChange([1], 8))
      .toBe(8)
  })
  it("One element, should be -1", () => {
    expect(coinChange([10], 8))
      .toBe(-1)
  })
})