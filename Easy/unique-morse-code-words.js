/* International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:


[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have. */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
	const alphabetMap = new Map([
		["a", ".-"],
		["b", "-..."],
		["c", "-.-."],
		["d", "-.."],
		["e", "."],
		["f", "..-."],
		["g", "--."],
		["h", "...."],
		["i", ".."],
		["j", ".---"],
		["k", "-.-"],
		["l", ".-.."],
		["m", "--"],
		["n", "-."],
		["o", "---"],
		["p", ".--."],
		["q", "--.-"],
		["r", ".-."],
		["s", "..."],
		["t", "-"],
		["u", "..-"],
		["v", "...-"],
		["w", ".--"],
		["x", "-..-"],
		["y", "-.--"],
		["z", "--.."],
	]);

	const morsed_words = [];

	for (let i = 0; i < words.length; i++) {
		let morsed_word = "";
		for (let j = 0; j < words[i].length; j++) {
			let char = alphabetMap.get(words[i][j]);
			morsed_word += char;
		}
		morsed_words.push(morsed_word);
	}

	const unique_morsed_words = [];

	morsed_words.forEach((word) => {
		let unique = unique_morsed_words.find((morsed_word) => {
			return morsed_word === word;
		});
		if (!unique) {
			unique_morsed_words.push(word);
		}
	});

	console.log(unique_morsed_words);
	console.log(unique_morsed_words.length);

	return unique_morsed_words.length;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);