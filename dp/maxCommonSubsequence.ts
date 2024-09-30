//  arr1 = [1, 3, 6, 10, 11, 14, 22, 25, 30]
//  arr2 = [0, 3, 4, 10, 15, 22, 30, 25, 35]

// result = [3, 10, 22, 25]

export function maxCommonSubsequence(arr1: number[], arr2: number[]): number {
  let rows = arr1.length + 1;
  let cols = arr2.length + 1;
  let dp = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (arr1[i - 1] === arr2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[rows - 1][cols - 1];
}
