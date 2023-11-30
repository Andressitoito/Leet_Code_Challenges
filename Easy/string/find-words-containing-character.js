/* You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order. */
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
	const response = [];

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		if (word.includes(x)) {
			response.push(i);
		}
	}

 console.log("response ", response)

	return response;
};

findWordsContaining(["leet", "code"], "e");
