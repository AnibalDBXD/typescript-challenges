import coinChange from "."

describe("Coin change", () => {
  it("Multiple elements", () => {
    expect(coinChange([1,2,5], 11))
      .toBe(3)
  })
  it("Multiple elements", () => {
    expect(coinChange([1,2], 6))
      .toBe(3)
  })
  it("Multiple elements", () => {
    expect(coinChange([10], 8))
      .toBe(-1)
  })
})