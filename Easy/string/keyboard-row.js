/* Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm". */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	const rowA = "qwertyuiop";
	const rowB = "asdfghjkl";
	const rowC = "zxcvbnm";
	const rows = [rowA, rowB, rowC];
	const RowLines = {};

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i];

		let formedWords = [];

		for (let j = 0; j < words.length; j++) {
			const word = words[j];
			let wordLength = word.length;
			let length = 0;

			for (let k = 0; k < word.length; k++) {
				const char = word[k];

				if (row.includes(char.toLocaleLowerCase())) {
					length++;
				}
			}

			if (wordLength === length) {
				formedWords.push(word);
			}
		}

		RowLines[rows[i]] = formedWords;
	}

	const wordsInRow = [];

	for (const row in RowLines) {
		if (RowLines[row].length > 0) {
			quantity = RowLines[row].length;
			wordsInRow.push(...RowLines[row]);
		}
	}

	console.log("final quantity ", quantity, wordsInRow);

	return wordsInRow;
};

findWords(["a", "b"]);
