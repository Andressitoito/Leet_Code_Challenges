/* There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard. */
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
	const words = text.split(" ");
	let response = words.length;

	const letters = brokenLetters.split("");

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		for (let j = 0; j < letters.length; j++) {
			const char = letters[j];

			if (word.includes(char)) {
				response--;
				break;
			}
		}
	}

	console.log("response ", response)

 return response
};
canBeTypedWords("hello world", "ad");

