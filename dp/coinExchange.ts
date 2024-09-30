// nominals = [1, 2, 5, 10, 15],
// total 9 -> 3 (2, 2, 5)
// total 2 -> 1 (2)

export function getMinCoinsCount(total: number, nominals: number[]): number {
  // dp[I] min coins from nominals to exchange I
  // I know how to decompose J = dp[j] and I-J = dp[i-j] where J<I
  // recalculate formula: dp[i] = min(dp[j] + dp[i-j]) for all j<i

  let dp = new Array(total + 1);
  dp[0] = 0;

  for (let i = 2; i <= total; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.min(dp[j] + dp[j - i]);
    }
  }

  return -1;
}
