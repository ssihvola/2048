import swipeDown from '../swipes/swipeDown';
import swipeLeft from '../swipes/swipeLeft';
import swipeRight from '../swipes/swipeRight';
import swipeUp from '../swipes/swipeUp';

const useSwipe = (swipe, gameGrid) => {
	if (swipe === 'ArrowUp') {
		return swipeUp(gameGrid);
	}
	if (swipe === 'ArrowLeft') {
		return swipeLeft(gameGrid);
	}
	if (swipe === 'ArrowRight') {
		return swipeRight(gameGrid);
	}
	if (swipe === 'ArrowDown') {
		return swipeDown(gameGrid);
	}
};

export default useSwipe;