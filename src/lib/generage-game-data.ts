import { generateGridData } from "./generate-grid-data";
import { generateMines } from "./generate-mines";

export const generateGameData = () => {
  const mines = generateMines();
  const grid = generateGridData(mines);

  return {
    grid,
    mines,
  };
};
