import cloneDeep from 'lodash.clonedeep';
import pointCalculation from '../utils/pointCalculation';

const swipeRight = (gameGrid) => {
	let newGrid = cloneDeep(gameGrid);

	// Iterate through each row of the grid
	for (let row = 0; row < newGrid.length; row++) {
		let notCombined = true;
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
					newGrid[row][currentCol + 1] === newGrid[row][currentCol] &&
					notCombined
				) {
					let number = newGrid[row][currentCol + 1] *= 2;
					pointCalculation(number);
					notCombined = false;
					newGrid[row][currentCol] = 0;
				}
			}
		}
	}

	return newGrid;
};

export default swipeRight;
