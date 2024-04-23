import cloneDeep from 'lodash.clonedeep';
import pointCalculation from '../utils/pointCalculation';

const swipeDown = (gameGrid) => {
	let newGrid = cloneDeep(gameGrid);

	// Iterate through each column of the grid
	for (let col = 0; col < newGrid[0].length; col++) {
		let notCombined = true;
		// Iterate through each row from bottom to top in the current column
		for (let row = newGrid.length - 1; row >= 0; row--) {
			// If the current cell is not empty (contains a number)
			if (newGrid[row][col] !== 0) {
				let currentRow = row;
				// Move the current number downwards as far as possible
				while (
					currentRow + 1 < newGrid.length &&
					newGrid[currentRow + 1][col] === 0
				) {
					newGrid[currentRow + 1][col] = newGrid[currentRow][col];
					newGrid[currentRow][col] = 0;
					currentRow++;
				}
				// If the next cell downwards has the same number, combine them
				if (
					currentRow + 1 < newGrid.length &&
					newGrid[currentRow + 1][col] === newGrid[currentRow][col] &&
					notCombined
				) {
					let number = (newGrid[currentRow + 1][col] *= 2);
					pointCalculation(number);
					notCombined = false;
					newGrid[currentRow][col] = 0;
				}
			}
		}
	}

	return newGrid;
};

export default swipeDown;
