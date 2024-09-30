export function isValidParentheses(str: string): boolean {
  let input: string[] = str.split("");
  let stack: string[] = [];
  let parantheses = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of input) {
    let isOpened = parantheses.hasOwnProperty(char);

    if (isOpened) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      let last = stack.pop()!;
      if (char !== parantheses[last]) return false;
    }
  }

  return stack.length === 0;
}
