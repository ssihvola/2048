import Block from "./Block";

const Board = ({ gameGrid }) => {
  return (
		<div className="gameGrid">
			{/* Mapping over each row in the gameGrid array */}
			{gameGrid.map((row, rowIndex) => {
				return (
					<div className="gameRow" key={rowIndex}>
						{/* Mapping over each digit in the current row */}
						{row.map((digit, columnIndex) => (
							// Rendering a Block component for each digit in the row
							<Block key={columnIndex} digit={digit === 0 ? null : digit} />
						))}
					</div>
				);
			})}
		</div>
	);
}

export default Board;