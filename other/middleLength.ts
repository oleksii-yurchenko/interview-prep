// "The quick brown fox jumps over the lazy dog"

export function getWordMiddleLength(str: string): string | null {
  let map: Record<number, string[]> = {};
  let words = str.split(" ");
  let count = 0;

  for (let word of words) {
    if (map[word.length] === undefined) map[word.length] = [];
    map[word.length].push(word);

    count += word.length;
  }

  let middle = Math.floor(count / words.length);

  return map[middle] !== undefined ? map[middle][0] : null;
}
