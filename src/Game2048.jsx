import { useEffect, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import Board from './components/Board';
import Header from './components/Header';
import GameOver from './components/GameOver';

import useSwipe from './utils/useSwipe';
import addNumber from './utils/addNumber';
import isGameOver from './utils/isGameOver';
import './index.css';

const Game2048 = () => {
	const [gameGrid, setGameGrid] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	useEffect(() => {
		initialize(); // Call initialize after the initial render
	}, []); // Empty dependency array ensures this runs only once after the initial render

	const initialize = () => {
		// Deep clone the game grid to avoid mutating the original grid
		let newGrid = cloneDeep(gameGrid);
		// Initialize the board with two numbers
		addNumber(newGrid);
		addNumber(newGrid);
		setGameGrid(newGrid);
	};

	const handleKeyDown = (event) => {
		let swipe = event.code;
		let newGrid = useSwipe(swipe, gameGrid);

		// Check if there was any movement in the grid
		if (JSON.stringify(gameGrid) !== JSON.stringify(newGrid)) {
			addNumber(newGrid);
		}
		if (isGameOver(newGrid)) {
			alert('game over');
		}

		setGameGrid(newGrid);
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [gameGrid]); // Add gameGrid as a dependency to ensure the effect runs when gameGrid changes

	return (
		<div>
			<Header />
			<Board gameGrid={gameGrid} />
		</div>
	);
};

export default Game2048;
