import swipeDown from '../swipes/swipeDown';
import swipeLeft from '../swipes/swipeLeft';
import swipeRight from '../swipes/swipeRight';
import swipeUp from '../swipes/swipeUp';

const useSwipe = ({ setGameGrid }) => {
	const handleKeyDown = (event) => {
		if (event.code === 'ArrowUp') {
			swipeUp({ setGameGrid });
		}
		if (event.code === 'ArrowLeft') {
			swipeLeft({ setGameGrid });
		}
		if (event.code === 'ArrowRight') {
			swipeRight({ setGameGrid });
		}
		if (event.code === 'ArrowDown') {
			swipeDown({ setGameGrid });
		}
	};

	return { handleKeyDown };
};

export default useSwipe;