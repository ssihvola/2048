import swipeDown from './swipeDown';
import swipeLeft from './swipeLeft';
import swipeRight from './swipeRight';
import swipeUp from './swipeUp';

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