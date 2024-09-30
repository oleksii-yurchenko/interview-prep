export function maxLengthUniqueChar(str: string): number {
  let left = 0;
  let max = 0;
  let set = new Set();

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    max = Math.max(max, set.size);
  }

  return max;
}
