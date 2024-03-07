import { useEffect, useState } from "react";
import cloneDeep from "lodash.clonedeep";
import Block from "./components/Block";
import './index.css';

const App = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);

  const initialize = () => {
    let newGrid = cloneDeep(board);
    addNumber(newGrid);
    addNumber(newGrid);
    setBoard(newGrid);
  }

  const addNumber = (newGrid) => {
    let gridFull = false;
    let added = false;
    let attempts = 0;

    while (!added) {
      if (gridFull) {
        break;
      }

      let randomNumber1 = Math.floor(Math.random() * 4);
      let randomNumber2 = Math.floor(Math.random() * 4);
      attempts++;

      if (newGrid[randomNumber1][randomNumber2] === 0) {
        newGrid[randomNumber1][randomNumber2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
    }
  }

  useEffect(() => {
    initialize();
  }, [])

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
