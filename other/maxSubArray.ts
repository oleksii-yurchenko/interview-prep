// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (subArray [4, -1, 2, 1])
// Kadane algorythm
export function maxSubArray(arr: Array<number>): number {
  let localMax = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    localMax = Math.max(localMax + arr[i], arr[i]);
    max = Math.max(localMax, max);
  }

  return max;
}
