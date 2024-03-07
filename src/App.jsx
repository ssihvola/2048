import { useState } from "react"
import './index.css'

const App = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);

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

const Block = ({ digit }) => {
  return <div className="gameBlock">{digit}</div>
}

export default App
