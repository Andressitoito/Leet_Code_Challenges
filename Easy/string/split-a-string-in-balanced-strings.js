/* Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain. */
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	let str = "";

	let count = 0;

	for (let i = 0; i < s.length; i = i + 2) {
		str += s[i];
		str += s[i + 1];

		let rs = str.split("").filter((char) => char === "R");
		let rl = str.split("").filter((char) => char === "L");

		if (rs.length === rl.length) {
			count++;
			str = "";
		}
	}

	console.log(count);

	return count;
};

balancedStringSplit("RLRRRLLRLL");
