/* You are given a string num consisting of only digits. A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.

Return true if num is balanced, otherwise return false. */
/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
	let odd = 0;
	let even = 0;

	for (let i = 0; i < num.length; i++) {
		const number = num[i] * 1;

		if (i % 2 === 0) {
			even += number;
		} else {
			odd += number;
		}
	}

	if (odd === even) {
		console.log("response ", true);
		return true;
	} else {
		console.log("response ", false);
		return false;
	}
};

isBalanced("24123");
