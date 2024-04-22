let points = 0;

const pointCalculation = (number) => {
	if (number > 0) {
		// The bigger the number, the more points you get
		points += number;
	} if (number === 0) {
		points = 0
	}
	return points;
};

export default pointCalculation;
