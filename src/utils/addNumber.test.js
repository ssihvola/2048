import addNumber from './addNumber';

describe('addNumber function', () => {
  test('adds a number to an empty cell', () => {
    const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];

    // Call the addNumber function
    addNumber(gameGrid);

    // Check if a number has been added to any cell
    const isEmptyCell = gameGrid.some(row => row.includes(0));
    expect(isEmptyCell).toBe(true);

    // Check if the added number is either 2 or 4
    const addedNumber = gameGrid.flat().find(cell => cell !== 0);
    expect([2, 4]).toContain(addedNumber);
  });
});
