/* Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order. */
/**
	* @param {string[]} words
	* @return {string[]}
	*/
var commonChars = function (words) {
	const compare = {};

	const unique = words.join("");

	for (let i = 0; i < unique.length; i++) {
		const char = unique[i];

		if (compare[char]) {
			compare[char] = compare[char] + 1;
		} else {
			compare[char] = 1;
		}
	}

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		for (const char in compare) {
			if (word.includes(char)) {
				const qtyCharArr = word.split("").filter((charac) => charac === char);
				const qtyChar = qtyCharArr.length;

				if (compare[char] > qtyChar) {
					compare[char] = qtyChar;
				}
			} else {
				delete compare[char];
			}
		}
	}

	let response = [];

	for (const char in compare) {
		response = response.concat(new Array(compare[char]).fill(char));
	}

	console.log("response ", response)

	return response;
};

commonChars(["rcllebr", "roller", "bella", "label"]);
