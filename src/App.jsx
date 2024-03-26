import { useEffect, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import Board from './components/Board';
import Points from './components/Points';

import useSwipe from './utils/useSwipe';
import addNumber from './utils/addNumber';
import './index.css';

const App = () => {
	const [gameGrid, setGameGrid] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	const initialize = () => {
		// Deep clone the game grid to avoid mutating the original grid
		let newGrid = cloneDeep(gameGrid);
		// Initialize the board with two numbers
		addNumber(newGrid);
		addNumber(newGrid);
		setGameGrid(newGrid);
	};


	const { handleKeyDown } = useSwipe({ setGameGrid })

	useEffect(() => {
		initialize();
		document.addEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<div>
			<Points />
			<Board gameGrid={gameGrid} />
		</div>
	);
};

export default App;
