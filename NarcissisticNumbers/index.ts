export default function isNarcissistic(n: number): boolean {
    return String(n).split('').reduce((acc, n, i, array) => {
        return acc + Math.pow(Number(n), array.length)
    }, 0) === n
}