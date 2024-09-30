//  X \ Y    0  1  2
//  0      [ 0, 1, 0]   [1, 1, 1]     [1, 1, 1]     [1, 1, 1]     [1, 1, 1]
//  1      [ 0, -1, 0]  [ 0, -1, 0]   [ 1, -1, 1]   [ 1, -1, 1]   [ 1, -1, 1]
//  2      [ 0, 0, 0]   [ 0, 0, 0]    [ 0, 0, 0]    [ 1, 0, 1]    [ 1, 1, 1]

// pandemicPeriod = 4

type Point = [number, number];
let directions = [
  [0, 1], // right
  [0, -1], // left
  [1, 0], // bottom
  [-1, 0], // top
];

function isValidPoint(city: number[][], point: Point): boolean {
  let x = point[0];
  let y = point[1];
  let lengthX = city.length;
  let lengthY = city[0].length;

  return x >= 0 && x < lengthX && y >= 0 && y < lengthY && city[x][y] === 0;
}

export function getPandemicPeriod(city: number[][]): number | null {
  let lengthX = city.length;
  let lengthY = city[0].length;

  let notInfectedCount = 0;
  let infected: [Point[], number] = [[], 0];

  for (let i = 0; i < lengthX; i++) {
    for (let j = 0; j < lengthY; j++) {
      if (city[i][j] === 1) infected[0].push([i, j]);
      if (city[i][j] === 0) notInfectedCount++;
    }
  }

  while (infected[0].length !== 0) {
    console.log(infected);

    let nextInfected: [Point[], number] = [[], infected[1]];

    for (let point of infected[0]) {
      let x = point[0];
      let y = point[1];

      for (let [dx, dy] of directions) {
        let newX = x + dx;
        let newY = y + dy;

        if (isValidPoint(city, [newX, newY]) && city[newX][newY] === 0) {
          city[newX][newY] = 1;
          notInfectedCount--;
          nextInfected[0].push([newX, newY]);
        }
      }
    }

    if (nextInfected[0].length > 0) nextInfected[1]++;
    infected = nextInfected;
  }

  return notInfectedCount === 0 ? infected[1] : null;
}
