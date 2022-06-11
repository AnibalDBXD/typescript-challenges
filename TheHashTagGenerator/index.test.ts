import generateHashtag from "."
import { describe, it, expect } from 'vitest'

describe('The HashTag Generator', () => {
  it('Expected an empty string to return false', () => {
    expect(generateHashtag('')).toBe(false)
  })

  it("Still an empty string", () => {
    expect(generateHashtag(" ".repeat(200))).toBe(false)
  })

  it("Expected a Hashtag (#) at the beginning.", () => {
    expect(generateHashtag("Do We have A Hashtag")).toMatch("#DoWeHaveAHashtag")
  })

  it("Should handle a single word.", () => {
    expect(generateHashtag("Codewars")).toMatch("#Codewars")
  })

  it("Should remove spaces.", () => {
    expect(generateHashtag("code" + " ".repeat(140) + "wars")).toMatch("#CodeWars")
  })

  it("Should capitalize first letters of words.", () => {
    expect(generateHashtag("code wars is nice")).toMatch("#CodeWarsIsNice")
  })

  it("Should return false if the final word is longer than 140 chars.", () => {
    expect(
      generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")
    ).toBe(false)
  })

  it("Should work", () => {
    expect(generateHashtag("a".repeat(139))).toMatch("#A" + "a".repeat(138))
  })

  it("Too long", () => {
    expect(generateHashtag("a".repeat(140))).toBe(false)
  })
})
