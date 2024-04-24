import swipeUp from './swipeUp';
import swipeRight from './swipeRight';
import swipeLeft from './swipeLeft';
import swipeDown from './swipeDown';

describe('Swipe functions', () => {
  test('swipeUp function', () => {
    const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    const expectedGrid = [
      [2, 8, 4, 8],
      [16, 32, 64, 16],
      [256, 512, 1024, 128],
      [0, 0, 0, 2048]
    ];
    expect(swipeUp(gameGrid)).toEqual(expectedGrid);
  });

  test('swipeRight function', () => {
    const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    const expectedGrid = [
      [0, 2, 4, 8],
      [0, 0, 8, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    expect(swipeRight(gameGrid)).toEqual(expectedGrid);
  });

  test('swipeLeft function', () => {
    const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    const expectedGrid = [
      [2, 4, 8, 0],
      [8, 16, 0, 0],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    expect(swipeLeft(gameGrid)).toEqual(expectedGrid);
  });

  test('swipeDown function', () => {
    const gameGrid = [
      [2, 0, 4, 8],
      [0, 8, 0, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    const expectedGrid = [
      [0, 0, 0, 8],
      [2, 8, 4, 16],
      [16, 32, 64, 128],
      [256, 512, 1024, 2048]
    ];
    expect(swipeDown(gameGrid)).toEqual(expectedGrid);
  });
});
