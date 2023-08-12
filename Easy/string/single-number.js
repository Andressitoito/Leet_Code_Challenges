/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let alone = [];
	nums.forEach((element) => {
		console.log(element);
		let search = nums.filter((num) => num === element);

		if (search.length !== 2) {
			alone = search;
		}
	});
	console.log(alone);
	return alone;
};

singleNumber([1, 2, 1, 2, 4]);
