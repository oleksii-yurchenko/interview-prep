// lab = [
// [ 0, 0, 1, 1, 1]
// [ 1, 1, 1, 1, 1]
// [ 1, 0, 0, 1, 1]
// [ 1, 0, 1, 1, 1]
// [ 1, 0, 0, 1, 0]
// ]

// shortest path = 8

type Point = [number, number];
type Path = [Point, number];
let directions: Array<Point> = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function isValidPoint(labyrinth: number[][], point: Point): boolean {
  let x = point[0];
  let y = point[1];
  let lengthX = labyrinth[0].length;
  let lengthY = labyrinth.length;

  return (
    x >= 0 && x < lengthX && y >= 0 && y < lengthY && labyrinth[x][y] === 0
  );
}

export function shortestPath(
  labyrinth: number[][],
  start: Point,
  end: Point
): number | null {
  let queue: Array<Path> = [[start, 0]];

  while (queue.length !== 0) {
    let currentPath = queue.shift()!;
    let x = currentPath[0][0];
    let y = currentPath[0][1];
    let path = currentPath[1];
    labyrinth[x][y] = 1;

    for (let [dx, dy] of directions) {
      if (x + dx === end[0] && y + dy === end[1]) return path + 1;
      if (isValidPoint(labyrinth, [x + dx, y + dy])) {
        console.log([x + dx, y + dy]);
        queue.push([[x + dx, y + dy], path + 1]);
      }
    }
  }

  return null;
}
