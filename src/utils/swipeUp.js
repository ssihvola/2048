import cloneDeep from "lodash.clonedeep";
import addNumber from "./addNumber";
import isGameOver from "./isGameOver";

const swipeUp = ({ setGameGrid }) => {
  setGameGrid((gameGrid) => {
    let newGrid = cloneDeep(gameGrid);

    for (let j = 0; j < newGrid[0].length; j++) {
      for (let i = 0; i < newGrid.length; i++) {
        if (newGrid[i][j] !== 0) {
          let k = i;
          while (k - 1 >= 0 && newGrid[k - 1][j] === 0) {
            newGrid[k - 1][j] = newGrid[k][j];
            newGrid[k][j] = 0;
            k--;
          }
          if (k - 1 >= 0 && newGrid[k - 1][j] === newGrid[k][j]) {
            newGrid[k - 1][j] *= 2;
            newGrid[k][j] = 0;
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