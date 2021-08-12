import positiveSum from "."

describe("Sum of Positive", () => {
  it("Testing for fixed tests", () => {
    expect(positiveSum([1,2,3,4,5])).toEqual(15)
    expect(positiveSum([1,-2,3,4,5])).toEqual(13)
    expect(positiveSum([])).toEqual(0)
    expect(positiveSum([-1,-2,-3,-4,-5])).toEqual(0)
    expect(positiveSum([-1,2,3,4,-5])).toEqual(9)
  })
})