export default function coinChange(coins: number[], amount: number): number {
    if (amount === 0) return 0
    if (amount < 0) return -1
    if (coins.length === 0) return -1

    let minCoins = amount + 1
    for (let i = 0; i < coins.length; i++) {
        const subMinCoins = coinChange(coins, amount - coins[i])
        if (subMinCoins >= 0 && subMinCoins < minCoins) {
            minCoins = subMinCoins + 1
        }
    }
    return minCoins === amount + 1 ? -1 : minCoins
}