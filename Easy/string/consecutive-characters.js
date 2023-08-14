/* The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s. */
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
	if (s.length === 1) {
		return 1;
	}

	let max = 0;

	const arr_chars = [];

	let chars = [];
	let pushed = false;

	for (let i = 0; i < s.length; i++) {
		if (chars.length === 0) {
			chars.push(s[i]);
			continue;
		}

		if (chars[chars.length - 1] !== s[i]) {
			arr_chars.push(chars.length);
			chars = [];
			chars.push(s[i]);
			pushed = true;
		}

		if (chars[chars.length - 1] === s[i] && pushed === false) {
			chars.push(s[i]);
		}

		if (s[i + 1] === undefined) {
			arr_chars.push(chars.length);
		}

		pushed = false;
	}

	max = Math.max(...arr_chars);

	console.log(max);

	return max;
};

maxPower("abbeeee");
