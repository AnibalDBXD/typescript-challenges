import duplicateCount from "."
import { describe, it, expect } from 'vitest'

describe("Counting Duplicates", () => {
  it("Count duplicated", () => {
    expect(duplicateCount("")).toEqual(0)
    expect(duplicateCount("abcde")).toEqual(0)
    expect(duplicateCount("aabbcde")).toEqual(2)
    expect(duplicateCount("Indivisibility")).toEqual(1)
  })
  it("Should ignore case", () => {
    expect(duplicateCount("aabBcde")).toEqual(2)
  })
  it("Characters may not be adjacent", () => {
    expect(duplicateCount("Indivisibilities")).toEqual(2)
  })
})