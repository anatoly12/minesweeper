import Grid from "@mui/material/Grid";
import { Column } from "../types/Column";
import { useMemo } from "react";

type CellProps = {
  col: Column;
  revealedCells: string[];
  gameOver: boolean;
  flaggedCells: string[];
  onClick: (col: Column) => void;
  onFlag: (col: Column) => void;
};

const Cell = ({
  col,
  onClick,
  onFlag,
  revealedCells,
  gameOver,
  flaggedCells,
}: CellProps) => {
  const shouldShowCount = col.nearbyMinesCount > 0 && !col.isMine;
  const isRevealed = useMemo(
    () => revealedCells.includes(col.cellId) || gameOver,
    [revealedCells, col.cellId, gameOver]
  );
  const isFlagged = useMemo(
    () => flaggedCells.includes(col.cellId),
    [flaggedCells, col.cellId]
  );

  const handleFlag: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    if (!isRevealed) {
      onFlag(col);
    }
  };
  return (
    <Grid
      size={{ xs: 1.5 }}
      sx={{
        backgroundColor: isRevealed ? "brown" : "green",
        height: "49.5px",
        "&:hover": {
          opacity: isRevealed ? 1 : 0.8,
        },
      }}
      onClick={!isRevealed ? () => onClick(col) : undefined}
      onContextMenu={handleFlag}
    >
      <>
        {isFlagged && "F"}
        {isRevealed && (
          <>
            {col.isMine && "M"}
            {shouldShowCount && col.nearbyMinesCount}
          </>
        )}
      </>
    </Grid>
  );
};

export default Cell;
