/* Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise. */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	const elements = [];

	let occurrences = true;

	for (let i = 0; i < arr.length; i++) {
		const number = arr[i];
		if (elements.includes(number)) {
			continue;
		} else {
			elements.push(number);
		}
	}

	const unique = [];

	for (let i = 0; i < elements.length; i++) {
		const number = elements[i];

		const qtyArr = arr.filter((num) => num == number);
		const qty = qtyArr.length;

		if (unique.includes(qty)) {
			occurrences = false;
			break;
		} else {
			unique.push(qty);
		}
	}

	console.log("occurrences ", occurrences);

	return occurrences;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]);
