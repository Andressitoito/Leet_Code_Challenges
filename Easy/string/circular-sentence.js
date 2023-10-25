/* A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

A sentence is circular if:

The last character of a word is equal to the first character of the next word.
The last character of the last word is equal to the first character of the first word.
For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

Given a string sentence, return true if it is circular. Otherwise, return false. */
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
	const spaces = sentence.includes("  ");
	if (spaces) {
		return false;
	}

	const start = sentence[0];
	const last = sentence[sentence.length - 1];
	if (start !== last) {
		return false;
	}

	const sent = sentence.split(" ");
	let prev = "";
	let circular = true;

	for (let i = 0; i < sent.length && true; i++) {
		const word = sent[i];

		const actual = word[word.length - 1];
		if (prev === "") {
			prev = actual;
			continue;
		} else {
			const init = word[0];

			if (init !== prev) {
				circular = false;
			}

			prev = actual;
		}
	}

	console.log("get to last false ", circular);
	return circular;
};

isCircularSentence("MuFoevIXCZzrpXeRmTssj lYSW WUj jM");
