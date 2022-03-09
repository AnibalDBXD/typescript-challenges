export default function coinChange(coins: number[], amount: number): number {
    if (amount === 0) return 0
    let restAmount = amount
    let coinsAmount = 0;

    [...coins].reverse().forEach((coin) => {
        if (coin > restAmount) return -1

        coinsAmount = coinsAmount + (coin === 1 ? 1 : Math.floor(restAmount / coin))

        restAmount = restAmount - (coin * coinsAmount)
    })

    if (coinsAmount === 0 || restAmount === coinsAmount) return -1

    return coinsAmount
}