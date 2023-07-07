/* You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message. */
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
	let alpha_key = "";
	let decoded_message = "";

	for (let i = 0; i < key.length; i++) {
		const letter = key[i];

		if (letter === " ") continue;
		const found = alpha_key.includes(letter);

		if (!found) {
			alpha_key += letter;
		} else {
			continue;
		}
	}

	let alphabet = "abcdefghijklmnopqrstuvwxyz";

	for (let i = 0; i < message.length; i++) {
		const letter = message[i];
		const index = alpha_key.indexOf(letter);

		if (index === -1) {
			decoded_message += " ";
		} else {
			decoded_message += alphabet[index];
		}
	}

	return decoded_message;
};

decodeMessage(
	"the quick brown fox jumps over the lazy dog",
	"vkbs bs t suepuv"
);
