// x\y  0  1  2  3  4
//  0  [1, 7, 1, 7, 1]
//  1  [7, 1, 1, 1, 7]
//  2  [1, 1, 7, 1, 1]
//  3  [7, 1, 1, 1, 7]
//  4  [1, 7, 1, 7, 1]
// ]

type Cell = [number, number];

let directions = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

function isValidCell(desk: number[][], cell: Cell) {
  let lengthX = desk.length;
  let lengthY = desk[0].length;
  let x = cell[0];
  let y = cell[1];

  return x >= 0 && x < lengthX && y >= 0 && y < lengthY;
}

export function getShortestKnigthPath(
  desk: number[][],
  start: Cell,
  end: Cell
): number | null {
  if (!isValidCell(desk, start) || !isValidCell(desk, end))
    throw new Error("Illegal Argument Exception");

  let steps: Cell[] = [start];

  while (steps.length > 0) {
    let cell = steps.shift()!;
    let x = cell[0];
    let y = cell[1];

    if (x === end[0] && y === end[1]) return desk[x][y];

    for (let [dx, dy] of directions) {
      let newX = x + dx;
      let newY = y + dy;

      if (isValidCell(desk, [newX, newY]) && desk[newX][newY] === 0) {
        steps.push([newX, newY]);
        desk[newX][newY] = desk[x][y] + 1;
      }
    }
  }

  console.log(desk);

  return null;
}
