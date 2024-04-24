import isGameOver from './isGameOver';

describe('isGameOver function', () => {
  test('returns true if the game is over', () => {
    // Game grid representing a game over state
    const gameOverGrid = [
      [2, 4, 8, 16],
      [4, 8, 16, 32],
      [8, 16, 32, 64],
      [16, 32, 64, 128]
    ];
    expect(isGameOver(gameOverGrid)).toBe(true);
  });

  test('returns false if the game is not over', () => {
    // Game grid representing a game state where the game is not over
    const gameNotOverGrid = [
      [2, 4, 8, 16],
      [4, 8, 16, 32],
      [8, 16, 32, 64],
      [16, 32, 64, 0] // An empty cell exists, the game is not over
    ];
    expect(isGameOver(gameNotOverGrid)).toBe(false);
  });

  test('returns false if the game is not over even with same adjacent cells', () => {
    // Game grid representing a game state where the game is not over
    const gameNotOverGrid = [
      [2, 2, 8, 16],
      [4, 8, 16, 32],
      [8, 16, 32, 64],
      [16, 32, 64, 128] // Adjacent cells have the same value, but game is not over
    ];
    expect(isGameOver(gameNotOverGrid)).toBe(false);
  });

  test('returns false if the game is not over even with empty cells', () => {
    // Game grid representing a game state where the game is not over
    const gameNotOverGrid = [
      [2, 0, 8, 16],
      [0, 8, 16, 32],
      [8, 16, 32, 64],
      [16, 32, 64, 128] // Empty cells exist, but game is not over
    ];
    expect(isGameOver(gameNotOverGrid)).toBe(false);
  });
});
