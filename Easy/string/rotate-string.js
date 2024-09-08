/* Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift. */
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
	let response = false;
	let attempts = s.length;

	while (attempts > 0) {
		const last = s[s.length - 1];
		s = `${last}${s.slice(0, s.length - 1)}`;

		if (s === goal) {
			response = true;
			console.log("response ", response);
			break;
		}

		attempts--;
	}

	console.log("response ", response);

	return response;
};
rotateString("abcde", "cdeab");
