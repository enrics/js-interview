const getRandomValue = (min = 0, max = 1) => new Promise((resolve, reject) => {
	if (min >= max) {
		reject('min >= max');
	}

	setTimeout(() => resolve(Math.floor(Math.random() * (max - min) + min)), 1000);
});

module.exports = getRandomValue;
