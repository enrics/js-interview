const people = [{
	name: 'Bob',
	age: 31,
	interests: [
		'skiing',
		'running'
	]
}, {
	name: 'Alice',
	age: 33,
	interests: [
		'movies',
		'swimming'
	]
}, {
	name: 'Carol',
	age: 28,
	interests: [
		'running',
		'gaming',
		'swimming'
	]
}];

describe('getNamesOfPeopleOver', () => {
	const getNamesOfPeopleOver = limit => {};

	xit('returns an array of the names of all people over the given limit', () => {
		assert.deepEqual(getNamesOfPeopleOver(30), ['Bob', 'Alice']);
	});
});

describe('getSumOfAllAges()', () => {
	const getSumOfAllAges = () => {};

	xit('calculates the sum of all ages', () => {
		assert.equal(getSumOfAllAges(), 92);
	});
});

describe('getInterests', () => {
	const getInterests = () => {};

	xit('returns all unique interests, sorted incrementally', () => {
		assert.deepEqual(getInterests(), ['gaming', 'movies', 'running', 'skiing', 'swimming']);
	});
});

describe('zipNamesAndInterests', () => {
	const zipNamesAndInterests = () => {};

	xit('returns and object with names as keys and interests as values', () => {
		var expected = {
			Bob: ['skiing', 'running'],
			Alice: ['movies', 'swimming'],
			Carol: ['running', 'gaming', 'swimming']
		};

		assert.deepEqual(zipNamesAndInterests(), expected);
	});
});
