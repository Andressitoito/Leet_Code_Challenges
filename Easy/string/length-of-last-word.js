/* Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
consisting of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let splited = s.split(" ");

	let words = splited.filter((word) => word !== "");

	let last = words.pop().length;

	return last;
};

lengthOfLastWord("   fly me   to   the moon  ");
