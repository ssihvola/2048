import useSwipe from './useSwipe';
import swipeDown from '../swipes/swipeDown';
import swipeLeft from '../swipes/swipeLeft';
import swipeRight from '../swipes/swipeRight';
import swipeUp from '../swipes/swipeUp';

// Mock swipe functions
jest.mock('../swipes/swipeDown');
jest.mock('../swipes/swipeLeft');
jest.mock('../swipes/swipeRight');
jest.mock('../swipes/swipeUp');

describe('useSwipe function', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    jest.clearAllMocks();
  });

  test('dispatches swipeDown function for "ArrowDown" swipe', () => {
		const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    useSwipe('ArrowDown', gameGrid);
    expect(swipeDown).toHaveBeenCalledWith(gameGrid);
  });

  test('dispatches swipeLeft function for "ArrowLeft" swipe', () => {
		const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    useSwipe('ArrowLeft', gameGrid);
    expect(swipeLeft).toHaveBeenCalledWith(gameGrid);
  });

  test('dispatches swipeRight function for "ArrowRight" swipe', () => {
		const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    useSwipe('ArrowRight', gameGrid);
    expect(swipeRight).toHaveBeenCalledWith(gameGrid);
  });

  test('dispatches swipeUp function for "ArrowUp" swipe', () => {
		const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    useSwipe('ArrowUp', gameGrid);
    expect(swipeUp).toHaveBeenCalledWith(gameGrid);
  });
});
