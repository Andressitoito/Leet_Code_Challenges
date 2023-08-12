/* A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence. */
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
 let word_counter = {
		index: 0,
		words: 0,
	};

	for (let i = 0; i < sentences.length; i++) {
		let word_arr = sentences[i].split(" ").length;
		if (word_arr > word_counter.words) {
			word_counter.index = i;
			word_counter.words = word_arr;
		}
	}
	return word_counter.words;
};

mostWordsFound([
	"alice and bob love leetcode",
	"i think so too",
	"this is great thanks very much",
]);
