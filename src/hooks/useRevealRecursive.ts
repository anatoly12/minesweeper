import { useCallback } from "react";
import { Column } from "../types/Column";
import { getNeighbors } from "../lib/get-neighbor";
import { Row } from "../types/row";

export const useRevealRecursive = (grid: Row[]) => {
  const revealInit = useCallback(
    (col: Column) => {
      const revealedCells: string[] = [];
      const visited: string[] = [];
      const reveal = (col: Column) => {
        visited.push(col.cellId);
        revealedCells.push(col.cellId);
        const neighbors = getNeighbors(col.position.row, col.position.col);
        if (!col.nearbyMinesCount) {
          neighbors.forEach(([row, col]) => {
            const nextCol = grid[row][col];
            if (!visited.includes(nextCol.cellId)) {
              reveal(nextCol);
            }
          });
        }
      };
      reveal(col);
      return revealedCells;
    },
    [grid]
  );

  return revealInit;
};
