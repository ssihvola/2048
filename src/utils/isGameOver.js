const isGameOver = (grid) => {
  // Check if there are any adjacent cells with the same value
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Check horizontally
      if (j < grid[i].length - 1 && grid[i][j] === grid[i][j + 1]) {
        return false;
      }
      // Check vertically
      if (i < grid.length - 1 && grid[i][j] === grid[i + 1][j]) {
        return false;
      }
    }
  }

  // Check if there are any empty cells
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        return false;
      }
    }
  }

  return true;
};

export default isGameOver;