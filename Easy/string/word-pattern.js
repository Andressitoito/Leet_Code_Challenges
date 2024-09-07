/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter. */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	if (s.split(" ").length !== pattern.length) {
		response = false;
		return response;
	}

	const words = s.split(" ");
	const pairs = [];
	const unique = [];
	let response = true;

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i];

		if (!unique.includes(char)) {
			unique.push(char);
		}
	}

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		const exists = pairs.find((pair) => pair[0] === word);

		if (exists) {
			if (exists[1] !== pattern[i]) {
				response = false;

				return response;
			}
		}

		pairs.push([word, pattern[i]]);
	}

	for (let i = 0; i < unique.length; i++) {
		const char = unique[i];
		const check = pairs.filter((group) => group[1] === char);
		const word = check[0][0];
		const check_words = check.every((pair) => pair[0] === word);

		if (!check_words) {
			response = false;

			break;
		}
	}

	console.log("response ", response);

	return response;
};

wordPattern("abba", "dog dog dog dog");
wordPattern("abba", "dog cat cat dog");
wordPattern("abba", "dog cat car dog");
