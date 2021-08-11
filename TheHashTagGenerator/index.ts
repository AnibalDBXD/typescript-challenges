const MAX_CHARS = 140

export default function generateHashtag(text: string): string | false {
    const splitedText = text.split(" ")
    const capitalizeWords = splitedText.map((word) => {
        return word.charAt(0).toUpperCase() + word.toLocaleLowerCase().slice(1)
    }
    )

    const capitalizeText = capitalizeWords.join("")

    if (!capitalizeText.length || capitalizeText.length >= MAX_CHARS) return false

    return `#${capitalizeText.trim()}`

}
