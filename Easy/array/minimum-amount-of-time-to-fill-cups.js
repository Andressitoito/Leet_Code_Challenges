/* You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups. */
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
	let seconds = 0;

	while (amount[0] > 0 || amount[1] > 0 || amount[2] > 0) {
		amount.sort((a, b) => b - a);

		if (amount[0] - 1 >= 0 && amount[1] - 1 >= 0) {
			amount[0]--;
			amount[1]--;
			seconds++;
			continue;
		} else if (amount[0] - 1 >= 0 && amount[2] - 1 >= 0) {
			amount[0]--;
			amount[2]--;
			seconds++;
			continue;
		} else if (amount[0] - 1 >= 0) {
			amount[0]--;
			seconds++;
			continue;
		}
	}

	console.log("seconds ", seconds);

	return seconds;
};

fillCups([1, 2, 3]);
