export const getNeighbors = (row: number, col: number) => {
  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  const neighbors = [];
  for (const [x, y] of directions) {
    const neighborRow = row + x;
    const neighborCol = col + y;

    if (
      neighborRow >= 0 &&
      neighborRow < 8 &&
      neighborCol >= 0 &&
      neighborCol < 8
    ) {
      neighbors.push([neighborRow, neighborCol]);
    }
  }

  return neighbors;
};
