import { useCallback, useMemo, useRef, useState } from "react";
import "./App.css";
import { generateGameData } from "./lib/generage-game-data";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Cell from "./components/Cell";
import { Column } from "./types/Column";
import { useRevealRecursive } from "./hooks/useRevealRecursive";
import { Button } from "@mui/material";

function App() {
  const [gameData, setGameData] = useState(generateGameData());
  const [revealedCells, setRevealCells] = useState<string[]>([]);
  const [flaggedCells, setFlaggedCells] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const grid = useMemo(() => gameData.grid, [gameData.grid]);

  const reveal = useRevealRecursive(grid);

  const handleCellClick = useCallback(
    (col: Column) => {
      const isEmpty = !col.isMine && !col.nearbyMinesCount;
      const isMineNearby = col.nearbyMinesCount > 0 && !col.isMine;
      setFlaggedCells(flaggedCells.filter((cellId) => col.cellId !== cellId));
      if (col.isMine) {
        // game over
        setGameOver(true);
        return;
      }
      if (isMineNearby) {
        // reveal only this col
        setRevealCells([...revealedCells, col.cellId]);
        return;
      }
      if (isEmpty) {
        //reveal
        const newRevealedCells = reveal(col);
        setRevealCells([...revealedCells, ...newRevealedCells]);
      }
    },
    [revealedCells, reveal, flaggedCells]
  );
  const handleFlag = useCallback(
    (col: Column) => {
      if (flaggedCells.includes(col.cellId)) {
        setFlaggedCells(flaggedCells.filter((cellId) => col.cellId !== cellId));
      } else {
        setFlaggedCells([...flaggedCells, col.cellId]);
      }
    },
    [flaggedCells]
  );

  const handleReset = () => {
    setGameData(generateGameData());
    setRevealCells([]);
    setFlaggedCells([]);
    setGameOver(false);
  };

  return (
    <>
      <Container maxWidth="xs">
        <Button onClick={handleReset}>Reset</Button>
        <Grid container>
          {grid.map((row) =>
            row.map((col) => (
              <Cell
                col={col}
                key={col.cellId}
                onClick={handleCellClick}
                revealedCells={revealedCells}
                flaggedCells={flaggedCells}
                gameOver={gameOver}
                onFlag={handleFlag}
              />
            ))
          )}
        </Grid>
      </Container>
    </>
  );
}

export default App;
