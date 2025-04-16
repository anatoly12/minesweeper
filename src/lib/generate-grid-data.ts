import { Row } from "../types/row";
import { getNeighbors } from "./get-neighbor";

export const generateGridData = (mines: string[]) => {
  const grid = [];
  for (let rowPos = 0; rowPos < 8; rowPos++) {
    const row: Row = [];
    for (let colPos = 0; colPos < 8; colPos++) {
      const cellId: string = `${rowPos},${colPos}`;
      const neighbors = getNeighbors(rowPos, colPos);
      const nearbyMinesCount = neighbors.reduce(
        (prev, [neighborRow, neighborCol]) =>
          mines.includes(`${neighborRow},${neighborCol}`) ? prev + 1 : prev,
        0
      );
      row.push({
        cellId,
        nearbyMinesCount,
        isMine: mines.includes(cellId),
        position: {
          row: rowPos,
          col: colPos,
        },
      });
    }
    grid.push(row);
  }
  return grid;
};
