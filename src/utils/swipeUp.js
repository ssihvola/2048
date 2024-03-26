import cloneDeep from "lodash.clonedeep";
import addNumber from "./addNumber";
import isGameOver from "./isGameOver";

const swipeUp = ({ setGameGrid }) => {
  setGameGrid((gameGrid) => {
    let newGrid = cloneDeep(gameGrid);

    // Iterate through each column of the grid
    for (let col = 0; col < newGrid[0].length; col++) {
      // Iterate through each row from top to bottom in the current column
      for (let row = 0; row < newGrid.length; row++) {
        // If the current cell is not empty (contains a number)
        if (newGrid[row][col] !== 0) {
          let currentRow = i;
          // Move the current number upwards as far as possible
          while (currentRow - 1 >= 0 && newGrid[currentRow - 1][col] === 0) {
            newGrid[currentRow - 1][col] = newGrid[currentRow][col];
            newGrid[currentRow][col] = 0;
            k--;
          }
          // If the next cell upwards has the same number, combine them
          if (currentRow - 1 >= 0 && newGrid[currentRow - 1][col] === newGrid[currentRow][col]) {
            newGrid[currentRow - 1][col] *= 2;
            newGrid[currentRow][col] = 0;
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


export default swipeUp;