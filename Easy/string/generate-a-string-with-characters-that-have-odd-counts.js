/* Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them. */
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
	if (n === 1) {
		return "x";
	}

	let answer = "";

	if (n % 2 === 0) {
		answer += "a".repeat(n - 1);
		answer += `b`;
	} else {
		answer += "a".repeat(n - 2);
		answer += `bc`;
	}

	console.log(answer);

	return answer;
};

generateTheString(3);
