export function fibonacci(n: number): number {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciStack(n: number): number {
  let stack = [0, 1];

  for (let i = 1; i <= n - 2; i++) {
    let add1 = stack.pop()!;
    let add2 = stack.pop()!;
    stack.push(add2);
    stack.push(add1);
    stack.push(add1 + add2);
  }

  return stack[stack.length - 1];
}
