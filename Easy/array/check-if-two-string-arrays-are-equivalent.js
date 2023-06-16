/* Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string. */
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
	const a = word1.join("");
	const b = word2.join("");

	if (a === b) {
		console.log(true);
		return true;
	}
	console.log(false);

	return false;
};

arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]);
