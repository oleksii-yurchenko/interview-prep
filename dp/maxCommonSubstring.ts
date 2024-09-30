// Time O(m*n^2), Memory O(1)
export function maxCommonSubstring(str1: string, str2: string): string | null {
  if (str1.length > str2.length) [str1, str2] = [str2, str1];

  for (let curLen = str1.length; curLen >= 0; curLen--) {
    for (let i = 0; i <= str1.length - curLen; i++) {
      /* let sub = str1.slice(i, i + curLen);
      if (str2.includes(sub)) return sub; */

      for (let j = 0; j < str2.length - curLen; j++) {
        let included = true;

        for (let k = 0; k < curLen; k++) {
          if (str2[j + k] !== str1[i + k]) {
            included = false;
            break;
          }
        }

        if (included) return str1.slice(i, i + curLen);
      }
    }
  }

  return null;
}

// Time O(m*n), Memory O(m*n)
export function maxCommonSubstringDyn(
  str1: string,
  str2: string
): number | null {
  let rows = str1.length + 1;
  let cols = str2.length + 1;

  let dp = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));

  let maxLength = 0;

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLength = Math.max(maxLength, dp[i][j]);
      }
    }
  }

  return maxLength;
}
