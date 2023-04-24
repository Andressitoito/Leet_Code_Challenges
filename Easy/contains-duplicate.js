// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let singles = [];
	let repeated = false;

	nums.forEach((num) => {
		let isNumber = singles.some((number) => number === num);
		if (!isNumber) {
			singles.push(num);
		}
		if (isNumber) {
			repeated = true;
		}
	});

	console.log(repeated);

	return repeated;
};

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
containsDuplicate([1, 2]);
