type CharCount = { [key: string]: number }

const getCharCount = (str: string): CharCount => {
    const charCount: CharCount = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (charCount[char]) {
            charCount[char]++
        } else {
            charCount[char] = 1
        }
    }
    return charCount
}

const isObjectEqual = (obj1: CharCount, obj2: CharCount): boolean => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) {
        return false
    }
    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i]
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

export default function anagrams(word: string, words: string[]): string[] {
    const wordCharCount = getCharCount(word)
    const result = words.filter((w) => {
        return isObjectEqual(getCharCount(w), wordCharCount)
    })
    return result
}