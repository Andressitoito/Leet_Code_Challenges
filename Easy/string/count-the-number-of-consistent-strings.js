/* You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words. */
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
	let count = 0;

	for (let i = 0; i < words.length; i++) {
		let word = words[i].split("");

		for (let j = 0; j < allowed.length; j++) {
			word = word.filter((char) => char !== allowed[j]);
		}

		word.length === 0 && count++;
	}

	console.log(count);
	return count;
};

countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]);
