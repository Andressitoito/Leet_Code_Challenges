/* A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence. */
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
	const splited = s.split(" ");

	const sorted = new Array(splited.length);

	for (let i = 0; i < splited.length; i++) {
		let index = Number(splited[i][splited[i].length - 1]);
		const text = splited[i].substring(0, splited[i].length - 1);

		sorted[index - 1] = text;
	}

	const sentence = sorted.join(" ");

	console.log(sentence);

	return sentence;
};

sortSentence("is2 sentence4 This1 a3");
