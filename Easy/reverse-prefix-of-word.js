/* Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string. */
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
	const prefix_end_index = word.indexOf(ch);

	const untouched = word.substring(prefix_end_index + 1, word.length);
	let new_prefix = "";
	for (let i = prefix_end_index; i >= 0; i--) {
		new_prefix += word[i];
	}

	const new_word = new_prefix + untouched;
	console.log(new_word);

	return new_word;
};

reversePrefix("abcdefd", "d");
