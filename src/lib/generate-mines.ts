export const generateMines = () => {
  const mines: string[] = [];
  while (mines.length < 10) {
    const row = Math.floor(Math.random() * 8);
    const col = Math.floor(Math.random() * 8);
    const position = `${row},${col}`;
    if (mines.includes(position)) continue;
    else mines.push(position);
  }
  return mines;
};
