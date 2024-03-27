import pointCalculation from '../utils/pointCalculation';

const Header = () => {
	const points = pointCalculation();
	return (
		<div>
			<h1>2048</h1>
			<div className="points">Points {points}</div>
		</div>
	);
};

export default Header;
