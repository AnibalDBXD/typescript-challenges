export default function duplicateCount(text: string): number {
    const splittedText = text.toLowerCase().split('')

    const duplicatedChars: Record<string, number> = splittedText.reduce((acc, char) => {
        if (acc[char]) {
            acc[char]++
        }
        else {
            acc[char] = 1
        }
        return acc
    }, {} as Record<string, number>)

    const duplicatedCharsCount = Object.values(duplicatedChars).filter((count) => count > 1).length
    return duplicatedCharsCount
}