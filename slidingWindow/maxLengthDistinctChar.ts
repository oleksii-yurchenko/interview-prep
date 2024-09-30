// Input: s = "eceba", k = 2
// Output: 3 (substring "ece")

export function maxLengthDistinctChar(str: string, k: number): number {
  let left = 0;
  let right = 0;
  let max = 0;
  let chars = new Map();

  while (right < str.length) {
    chars.set(str[right], (chars.get(str[right]) || 0) + 1);

    while (chars.size > k) {
      chars.set(str[left], chars.get(str[left]) - 1);
      if (chars.get(str[left]) === 0) chars.delete(str[left]);
      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
}
