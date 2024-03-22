import Block from "./Block";

const GameGrid = ({ gameGrid }) => {
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
}

export default GameGrid;