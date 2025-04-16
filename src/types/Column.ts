export type Column = {
  cellId: string;
  isMine: boolean;
  nearbyMinesCount: number;
  position: {
    row: number;
    col: number;
  };
};
