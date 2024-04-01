/* Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them. */
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
	const maxCandies = candyType.length / 2;

	let types = [candyType[0]];
	let last_candy = candyType[0];

	for (let i = 1; i < candyType.length; i++) {
		const candy = candyType[i];

		if (types.length >= maxCandies) {
			break;
		}

		if (candy != last_candy && !types.includes(candy)) {
			types.push(candy);
			last_candy = candy;
		}
	}

	console.log("types ", types, types.length);

	return types.length;
};

distributeCandies([1, 1, 2, 2, 3, 3]);
