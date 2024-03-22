import { useEffect, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import GameGrid from './components/GameGrid';

import addNumber from './utils/addNumber';
import swipeUp from './utils/swipeUp';
import swipeDown from './utils/swipeDown';
import swipeLeft from './utils/swipeLeft';
import swipeRight from './utils/swipeRight'
import './index.css';

const App = () => {
	const [gameGrid, setGameGrid] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	const handleKeyDown = (event) => {
		if (event.code === 'ArrowUp') {
			swipeUp({ setGameGrid, addNumber, isGameOver });
		}
		if (event.code === 'ArrowLeft') {
			swipeLeft({ setGameGrid, addNumber, isGameOver });
		}
		if (event.code === 'ArrowRight') {
			swipeRight({ setGameGrid, addNumber, isGameOver });
		}
		if (event.code === 'ArrowDown') {
			swipeDown({ setGameGrid, addNumber, isGameOver });
		}
	};

	const initialize = () => {
		let newGrid = cloneDeep(gameGrid);
		addNumber(newGrid);
		addNumber(newGrid);
		setGameGrid(newGrid);
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
		<GameGrid gameGrid={gameGrid} />
	);
};

export default App;
