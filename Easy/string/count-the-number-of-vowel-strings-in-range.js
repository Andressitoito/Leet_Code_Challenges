/* You are given a 0-indexed array of string words and two integers left and right.

A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right]. */
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
	const vowel = ["a", "e", "i", "o", "u"];

	let count = 0;

	for (let i = left; i <= right; i++) {
		const word = words[i];

		if (vowel.includes(word[0]) && vowel.includes(word[word.length - 1])) {
			count++;
		}
	}

 console.log("count ", count)
 
	return count;
};
vowelStrings(["are", "amy", "u"], 0, 2);
