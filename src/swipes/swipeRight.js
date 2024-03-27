import cloneDeep from 'lodash.clonedeep';
import addNumber from "../utils/addNumber";
import pointCalculation from '../utils/pointCalculation';
import isGameOver from "../utils/isGameOver";

const swipeRight = ({ setGameGrid }) => {
	setGameGrid((gameGrid) => {
		let newGrid = cloneDeep(gameGrid);

		// Iterate through each row of the grid
		for (let row = 0; row < newGrid.length; row++) {
			// Iterate through each column from right to left in the current row
			for (let col = newGrid[row].length - 1; col >= 0; col--) {
				// If the current cell is not empty (contains a number)
				if (newGrid[row][col] !== 0) {
					let currentCol = col;
					// Move the current number to the right as far as possible
					while (currentCol + 1 < newGrid[row].length && newGrid[row][currentCol + 1] === 0) {
						newGrid[row][currentCol + 1] = newGrid[row][currentCol];
						newGrid[row][currentCol] = 0;
						currentCol++;
					}
					// If the next cell to the right has the same number, combine them
					if (
						currentCol + 1 < newGrid[row].length &&
						newGrid[row][currentCol + 1] === newGrid[row][currentCol]
					) {
						let number = newGrid[row][currentCol + 1] *= 2;
						pointCalculation(number);
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

export default swipeRight;
