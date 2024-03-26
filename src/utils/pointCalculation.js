let points = 0;

const pointCalculation = (number) => {
	switch (number) {
		case 2:
			points += 2;
			break;
		case 4:
			points += 4;
			break;
		case 8:
			points += 8;
			break;
		case 16:
			points += 16;
			break;
		case 32:
			points += 32;
			break;
		case 48:
			points += 48;
			break;
		case 64:
			points += 64;
			break;
		case 128:
			points += 128;
			break;
		case 254:
			points += 254;
			break;
		case 512:
			points += 512;
			break;
		case 1024:
			points += 1024;
			break;
		default:
			if (number >= 2048) {
				points += 2048;
			}
			break;
	}
	return points;
};

export default pointCalculation;
