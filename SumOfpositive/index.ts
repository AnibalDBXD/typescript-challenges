export default function positiveSum(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => {
        if (Math.sign(currentValue) !== -1) {
            return accumulator + currentValue
        }
        return accumulator
  }, 0)
}