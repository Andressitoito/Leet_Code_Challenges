/*
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	let lastStone = 0;

	let sorted = stones.sort(compareNumbers);

	do {
		if (sorted.length === 1) {
			return (lastStone = sorted[0]);
		}

		let big_stone = sorted.shift();
		let small_stone = sorted.shift();

		if (big_stone - small_stone > 0) {
			let remaining_stone = big_stone - small_stone;
			sorted.push(remaining_stone);
			sorted = sorted.sort(compareNumbers);
		}
	} while (sorted.length >= 1);

	if (sorted.length === 0) {
		return lastStone;
	}

	return lastStone;
};

// lastStoneWeight([2, 7])
console.log(lastStoneWeight([1, 7, 6]));

function compareNumbers(a, b) {
	return b - a;
}
