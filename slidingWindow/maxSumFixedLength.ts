// Input: nums = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
// Output: 39  [4, 2, 10, 23]

export function maxSumFixedLength(arr: Array<number>, k: number): number {
  // window criterion: fixed length of array = k

  let right = 0;
  let left = 0;
  let sum = 0;

  while (right < k) {
    sum += arr[right];
    right++;
  }

  let max = sum;

  while (right >= k && right < arr.length) {
    sum += arr[right] - arr[left];
    max = Math.max(max, sum);
    right++;
    left++;
  }

  return max;
}
