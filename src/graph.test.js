var graph = require('./graph.json');

const sumNumbers = (o) => {};

describe('sumNumbers', () => {
	xit('returns the sum of all numbers found in the object', () => {
		const sum = sumNumbers(graph);

		assert.equal(sum, 28)
	});
});