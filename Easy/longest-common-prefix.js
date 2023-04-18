/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
	let arrayStrings = [];

	strs.map((string) => {
		let stringArr = string.split("");
		arrayStrings.push(stringArr);
	});

	let tupple = createTupple(...arrayStrings);

	let common = [];

	for (let i = 0; i < tupple.length; i++) {
		const elem_i = tupple[i];
		let compareChar = elem_i[0];
		let same = elem_i.every((char) => char === compareChar);

		if (same) {
			common.push(compareChar);
		} else {
			break;
		}
	}

	if (common.length === 0) {
		return "";
	} else {
		return common.join("");
	}
};

longestCommonPrefix(["cir", "car"]);

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c", "d"];
const arr3 = [true, false, true];

function createTupple(...arrays) {
	let lengths = arrays.map((array) => array.length);
	let minLength = Math.min(...lengths);
	let arrTupple = [];

	for (let i = 0; i < minLength; i++) {
		const element = arrays.map((array) => array[i]);
		arrTupple.push(element);
	}

	return arrTupple;
}

// createTupple(arr1, arr2, arr3);
