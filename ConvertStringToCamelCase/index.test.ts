import toCamelCase from "."
import { describe, it, expect } from 'vitest'

describe("Convert string to camel case", () => {
  it("Test", () => {
    expect(toCamelCase(''), '')
    expect(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
    expect(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
    expect(toCamelCase("A-B-C"), "ABC")
  })
})
