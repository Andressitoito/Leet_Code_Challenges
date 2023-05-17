/* You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string. */
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {};

const restoreStringg = (s, indices) => {
	const shuffled = Array(s.length);
	for (let i = 0; i < s.length; i++) {
		shuffled[indices[i]] = s[i];
	}
	console.log(shuffled.join(""));
	return shuffled.join("");
};

restoreStringg("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
