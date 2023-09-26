/* You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'. */
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
	const alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x", 
		"y",
		"z",
	];

	function shift(c, x) {
		const index = alphabet.findIndex((char) => char === c);
		const finded = alphabet[index + parseInt(x)];
		return finded;
	}

	let str = "";

	for (let i = 0; i < s.length; i++) {
		const el = s[i];

		if (!isNaN(el)) {
			str += shift(s[i - 1], el);
		} else {
			str += el;
		}
	}

	console.log(str);

	return str;
};

replaceDigits("a1c1e1");
