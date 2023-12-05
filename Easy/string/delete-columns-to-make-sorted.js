/* You are given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.

For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
abc
bce
cae
You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

Return the number of columns that you will delete. */
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
	let str = "";

	const arrLength = strs[0].length;
	const rows = Array.from({ length: arrLength }, () => []);

	for (let i = 0; i < strs.length; i++) {
		const chars = strs[i];

		let column = 0;

		for (let j = 0; j < chars.length; j++) {
			const char = chars[j];

			str += char + `${column}`;

			rows[column].push(char);

			column++;
		}

		str += " ";
	}

	let deleted = 0;

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i].join("");

		if (!isSorted(row)) {
			deleted++;
		}
	}

	console.log("deleted ", deleted);

	return deleted;
};

function isSorted(str) {
	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (str[i + 1] === undefined) {
			break;
		}
		if (char > str[i + 1]) {
			return false;
		}
	}

	return true;
}

minDeletionSize(["cba", "daf", "ghi"]);
