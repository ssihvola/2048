import { useEffect, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import GameGrid from './components/GameGrid';

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
		let newGrid = cloneDeep(gameGrid);
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
		<GameGrid gameGrid={gameGrid} />
	);
};

export default App;
