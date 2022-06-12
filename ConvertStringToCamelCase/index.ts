const toCamelCase = (str: string): string => {
    const separator = str.includes('-') ? '-' : '_'
    return str.split(separator).reduce((acc, value) => {
        return `${acc}${value[0].toUpperCase()}${value.slice(1)}`
    })
}

export default toCamelCase