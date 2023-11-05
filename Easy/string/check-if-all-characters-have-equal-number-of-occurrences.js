/* Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency). */
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
	const unique = new Set();

	let response = true;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		unique.add(char);
	}

	let numbers = 0;

	for (const char of unique) {
		const qty = s.split("").filter((ch) => ch !== char);

		if (numbers === 0) {
			numbers = qty.length;
		} else {
			if (numbers !== qty.length) {
				response = false;
				break;
			}
		}
	}

	console.log(response);
	return response;
};

areOccurrencesEqual("abacbc");
