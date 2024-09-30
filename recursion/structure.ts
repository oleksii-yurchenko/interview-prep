interface Node {
  value: number;
  childrens: Node[] | null;
}

export let structure: Node = {
  value: 1,
  childrens: [
    {
      value: 2,
      childrens: [
        {
          value: 5,
          childrens: null,
        },
        {
          value: 6,
          childrens: null,
        },
      ],
    },
    {
      value: 3,
      childrens: [
        {
          value: 7,
          childrens: null,
        },
      ],
    },
    {
      value: 4,
      childrens: [
        {
          value: 8,
          childrens: null,
        },
        {
          value: 9,
          childrens: null,
        },
      ],
    },
  ],
};

export function getSumRecursion(structure: Node): number {
  if (structure.childrens === null) return structure.value;

  return (
    structure.value +
    structure.childrens.reduce((acc, node) => acc + getSumRecursion(node), 0)
  );
}

export function getSumStack(structure: Node): number {
  let stack: Node[] = [structure];
  let sum = 0;

  while (stack.length !== 0) {
    let node = stack.pop();
    sum += node!.value;

    if (node!.childrens === null) continue;

    for (const currentNode of node!.childrens) {
      stack.push(currentNode);
    }
  }

  return sum;
}
