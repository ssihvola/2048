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

	const swipeRight = () => {
		setBoard((board) => {
			let newGrid = cloneDeep(board);

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
			addNumber(newGrid);
			return newGrid;
		});
	};

	const swipeLeft = () => {
		setBoard((board) => {
			let newGrid = cloneDeep(board);

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
			addNumber(newGrid);
			return newGrid;
		});
	};

	const handleKeyDown = (event) => {
		if (event.code === 'ArrowUp') {
			console.log(event.code);
		}
		if (event.code === 'ArrowLeft') {
			swipeLeft();
		}
		if (event.code === 'ArrowRight') {
			swipeRight();
		}
		if (event.code === 'ArrowDown') {
			console.log(event.code);
		}
	};

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
			newGrid[randomNumber1][randomNumber2] = Math.random() > 0.1 ? 2 : 4;
		}
	};

	useEffect(() => {
		initialize();
		document.addEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<div className="gameBoard">
			{board.map((row, rowIndex) => {
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
