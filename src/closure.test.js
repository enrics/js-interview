describe('adder', () => {
	const adder = () => {};

	describe('when initiated with a number', () => {
		describe('and called with a second number', () => {
			xit('returns the sum', () => {
				const add5 = adder(5);

				assert.equal(add5(4), 9);
			});
		});
	});
});

describe('count', () => {
	const count = () => {};

	xit('returns an increasing number each time called', () => {
		assert.equal(count(), 0);
		assert.equal(count(), 1);
		assert.equal(count(), 2);
	});
});

describe('user', () => {
	const user = {
		name: 'Bob',
		printName: function() {
			setTimeout(function() {
				console.log(this.name);
			})
		}
	};

	xit('prints name', () => {
		user.printName();
	});
});
