export const sample_input = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];
// extected_output = { width: 10, height: 20 }

export const expected = sample_input.reduce(
  (acc, item) => ({ ...acc, [item.name]: item.value }),
  {}
);

// Write a function to compute Fibonacci numbers (in O(n) time and O(1) space).

export function fibonacci(n: number): number {
  if (n === 0) return 0;

  let tail = [0, 1];

  for (let i = 0; i < n; i++) {
    tail = [tail[1], tail[0] + tail[1]];
  }

  return tail[0];
}
