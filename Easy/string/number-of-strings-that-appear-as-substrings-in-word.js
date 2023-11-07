/* Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
	let qty = 0;

	for (let i = 0; i < patterns.length; i++) {
		const pattern = patterns[i];

		if (word.includes(pattern)) {
			qty++;
		}
	}

	console.log(qty);

	return qty;
};

numOfStrings(["a", "abc", "bc", "d"], "abc");
