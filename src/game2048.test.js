import { render, fireEvent } from '@testing-library/react';
import Game2048 from './Game2048';
import * as utils from './utils/addNumber';

describe('Game2048 component', () => {
  test('initializes game grid correctly', () => {
		const { container } = render(<Game2048 />);
		const cells = container.querySelectorAll('.gameBlock');
    expect(cells).toHaveLength(16); // 4x4 grid
  });

	test('two numbers are added to grid after initialization', () => {
    const addNumberSpy = jest.spyOn(utils, 'default');
    render(<Game2048 />);

    // Check if the addNumber function is called twice
    expect(addNumberSpy).toHaveBeenCalledTimes(2);
  });

  test('handles keyboard input correctly', () => {
    const { getByRole } = render(<Game2048 />);
    const gameContainer = getByRole('heading');

    fireEvent.keyDown(gameContainer, { key: 'ArrowDown', code: 'ArrowDown' });
    // Add assertions to check if the game grid has been updated correctly
  });

  test('adds and removes event listeners appropriately', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

    const { unmount } = render(<Game2048 />);
    expect(addEventListenerSpy).toHaveBeenCalled();

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalled();
  });
});
