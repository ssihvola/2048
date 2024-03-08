import { useEffect, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import Block from './components/Block';
import './index.css';

const App = () => {
	const [board, setBoard] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	const handleKeyDown = (event) => {
		if (event.code === 'ArrowUp') {
			console.log(event.code)
		}
		if (event.code === 'ArrowLeft') {
			console.log(event.code)
		}
		if (event.code === 'ArrowRight') {
			console.log(event.code)
		}
		if (event.code === 'ArrowDown') {
			console.log(event.code)
		}
	}

	const initialize = () => {
		let newGrid = cloneDeep(board);
		addNumber(newGrid);
		addNumber(newGrid);
		setBoard(newGrid);
	};

	const addNumber = (newGrid) => {
		let randomNumber1 = Math.floor(Math.random() * 4);
		let randomNumber2 = Math.floor(Math.random() * 4);

		if (newGrid[randomNumber1][randomNumber2] === 0) {
			newGrid[randomNumber1][randomNumber2] = Math.random() > 0.5 ? 2 : 4;
		}
	};

	useEffect(() => {
		initialize();
		document.addEventListener('keydown', handleKeyDown)
	}, []);

	return (
		<div className="gameBoard">
			{board.map((row, rowIndex) => {
				return (
					<div className="gameRow" key={rowIndex}>
						{row.map((digit, columnIndex) => (
							<Block key={columnIndex} digit={digit} />
						))}
					</div>
				);
			})}
		</div>
	);
};

export default App;
