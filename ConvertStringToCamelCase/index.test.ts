import toCamelCase from "."
import { describe, it, expect } from 'vitest'

describe("Convert string to camel case", () => {
  it("Test", () => {
    expect(toCamelCase('')).toEqual('')
    expect(toCamelCase("the_stealth_warrior")).toEqual("theStealthWarrior")
    expect(toCamelCase("The-Stealth-Warrior")).toEqual("TheStealthWarrior")
    expect(toCamelCase("A-B-C")).toEqual("ABC")
  })
})
