import { useEffect, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import Block from './components/Block';
import './index.css';

const App = () => {
	const [gameGrid, setGameGrid] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	const swipeRight = () => {
		setGameGrid((gameGrid) => {
			let newGrid = cloneDeep(gameGrid);

			for (let i = 0; i < newGrid.length; i++) {
				for (let j = newGrid[i].length - 1; j >= 0; j--) {
					if (newGrid[i][j] !== 0) {
						let k = j;
						while (k + 1 < newGrid[i].length && newGrid[i][k + 1] === 0) {
							newGrid[i][k + 1] = newGrid[i][k];
							newGrid[i][k] = 0;
							k++;
						}
						if (
							k + 1 < newGrid[i].length &&
							newGrid[i][k + 1] === newGrid[i][k]
						) {
							newGrid[i][k + 1] *= 2;
							newGrid[i][k] = 0;
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

	const swipeLeft = () => {
		setGameGrid((gameGrid) => {
			let newGrid = cloneDeep(gameGrid);

			for (let i = 0; i < newGrid.length; i++) {
				for (let j = 0; j < newGrid[i].length; j++) {
					if (newGrid[i][j] !== 0) {
						let k = j;
						while (k - 1 >= 0 && newGrid[i][k - 1] === 0) {
							newGrid[i][k - 1] = newGrid[i][k];
							newGrid[i][k] = 0;
							k--;
						}
						if (
							k - 1 < newGrid[i].length &&
							newGrid[i][k - 1] === newGrid[i][k]
						) {
							newGrid[i][k - 1] *= 2;
							newGrid[i][k] = 0;
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

	const swipeUp = () => {
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

	const swipeDown = () => {
		setGameGrid((gameGrid) => {
			let newGrid = cloneDeep(gameGrid);

			for (let j = 0; j < newGrid[0].length; j++) {
				for (let i = newGrid.length - 1; i >= 0; i--) {
					if (newGrid[i][j] !== 0) {
						let k = i;
						while (k + 1 < newGrid.length && newGrid[k + 1][j] === 0) {
							newGrid[k + 1][j] = newGrid[k][j];
							newGrid[k][j] = 0;
							k++;
						}
						if (k + 1 < newGrid.length && newGrid[k + 1][j] === newGrid[k][j]) {
							newGrid[k + 1][j] *= 2;
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

	const handleKeyDown = (event) => {
		if (event.code === 'ArrowUp') {
			swipeUp();
		}
		if (event.code === 'ArrowLeft') {
			swipeLeft();
		}
		if (event.code === 'ArrowRight') {
			swipeRight();
		}
		if (event.code === 'ArrowDown') {
			swipeDown();
		}
	};

	const initialize = () => {
		let newGrid = cloneDeep(gameGrid);
		addNumber(newGrid);
		addNumber(newGrid);
		setGameGrid(newGrid);
	};

	const addNumber = (newGrid) => {
		let added = false;

		while (!added) {
			let firstCoordinate = Math.floor(Math.random() * 4);
			let secondCoordinate = Math.floor(Math.random() * 4);
			if (newGrid[firstCoordinate][secondCoordinate] === 0) {
				newGrid[firstCoordinate][secondCoordinate] =
					Math.random() > 0.1 ? 2 : 4;
				added = true;
			}
		}
	};

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

	useEffect(() => {
		initialize();
		document.addEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<div className="gameGrid">
			{gameGrid.map((row, rowIndex) => {
				return (
					<div className="gameRow" key={rowIndex}>
						{row.map((digit, columnIndex) => (
							<Block key={columnIndex} digit={digit === 0 ? null : digit} />
						))}
					</div>
				);
			})}
		</div>
	);
};

export default App;
