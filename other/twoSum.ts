// arr = [2, 7, 11, 15, 22]; target = 29;
// -> [0, 1]
export function twoSum(
  arr: Array<number>,
  target: number
): Array<number> | null {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map[complement]) {
      return [i, map[complement]];
    } else {
      map[arr[i]] = i;
    }
  }

  return null;
}
