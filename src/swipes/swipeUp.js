import cloneDeep from "lodash.clonedeep";
import pointCalculation from "../utils/pointCalculation";

const swipeUp = (gameGrid) => {
  let newGrid = cloneDeep(gameGrid);

  // Iterate through each column of the grid
  for (let col = 0; col < newGrid[0].length; col++) {
    // Iterate through each row from top to bottom in the current column
    for (let row = 0; row < newGrid.length; row++) {
      // If the current cell is not empty (contains a number)
      if (newGrid[row][col] !== 0) {
        let currentRow = row;
        // Move the current number upwards as far as possible
        while (currentRow - 1 >= 0 && newGrid[currentRow - 1][col] === 0) {
          newGrid[currentRow - 1][col] = newGrid[currentRow][col];
          newGrid[currentRow][col] = 0;
          currentRow--;
        }
        // If the next cell upwards has the same number, combine them
        if (currentRow - 1 >= 0 && newGrid[currentRow - 1][col] === newGrid[currentRow][col]) {
          let number = newGrid[currentRow - 1][col] *= 2;
          pointCalculation(number);
          newGrid[currentRow][col] = 0;
        }
      }
    }

  return newGrid;
  };
};


export default swipeUp;