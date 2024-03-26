import cloneDeep from 'lodash.clonedeep';
import addNumber from "./addNumber";
import isGameOver from "./isGameOver";

const swipeLeft = ({ setGameGrid }) => {
  setGameGrid((gameGrid) => {
    let newGrid = cloneDeep(gameGrid);

    // Iterate through each row of the grid
    for (let row = 0; row < newGrid.length; row++) {
      // Iterate through each column from left to right in the current row
      for (let col = 0; col < newGrid[row].length; j++) {
        // If the current cell is not empty (contains a number)
        if (newGrid[row][col] !== 0) {
          let currentCol = j;
          // Move the current number to the left as far as possible
          while (currentCol - 1 >= 0 && newGrid[row][currentCol - 1] === 0) {
            newGrid[row][currentCol - 1] = newGrid[row][col];
            newGrid[row][currentCol] = 0;
            currentCol--;
          }
          // If the next cell to the left has the same number, combine them
          if (
            currentCol - 1 < newGrid[row].length &&
            newGrid[row][currentCol - 1] === newGrid[row][currentCol]
          ) {
            newGrid[row][currentCol - 1] *= 2;
            newGrid[row][currentCol] = 0;
          }
        }
      }
    }
    // Check if there was any movement in the grid
    if (JSON.stringify(gameGrid) !== JSON.stringify(newGrid)) {
      addNumber(newGrid);
    }
    if (isGameOver(newGrid)) {
      alert('game over');
    }

    return newGrid;
  });
};

export default swipeLeft;