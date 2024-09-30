// x\y  0  1  2  3  4
// 0   [0, 1, 1, 0, 1]
// 1   [0, 1, 0, 1, 1]
// 2   [0, 0, 1, 0, 1]
// 3   [0, 0, 0, 0, 0]
// 4   [0, 1, 1, 0, 1]

// output -> 5

type Cell = [number, number];

let directions = [
  [1, 0], // bottom
  [0, 1], // right
  [-1, 0], // top
  [0, -1], // left
];

function isValidPoint(matrix: number[][], cell: Cell): boolean {
  let lengthX = matrix.length;
  let lengthY = matrix[0].length;
  let x = cell[0];
  let y = cell[1];

  return x >= 0 && x < lengthX && y >= 0 && y < lengthY;
}

export function getIslandsCount(earth: number[][]): number {
  let lengthX = earth.length;
  let lengthY = earth[0].length;
  let islandsCount = 0;

  for (let i = 0; i < lengthX; i++) {
    for (let j = 0; j < lengthY; j++) {
      if (earth[i][j] === 0 || earth[i][j] === -1) continue;

      let queue: Cell[] = [[i, j]];
      while (queue.length > 0) {
        let cell = queue.shift()!;
        let x = cell[0];
        let y = cell[1];

        for (let [dx, dy] of directions) {
          let newX = x + dx;
          let newY = y + dy;

          if (isValidPoint(earth, [newX, newY]) && earth[newX][newY] === 1) {
            earth[newX][newY] = -1;
            queue.push([newX, newY]);
          }
        }
      }

      islandsCount++;
    }
  }

  return islandsCount;
}
