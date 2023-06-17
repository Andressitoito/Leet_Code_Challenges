/* You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
	let x = 0;
	let y = 0;
	for (let i = 0; i < nums.length; i++) {
		x += nums[i];
	}

	const joined = nums.join("");
	for (let i = 0; i < joined.length; i++) {
		y += parseInt(joined[i]);
	}

	console.log(x - y);
	return x - y;
};

differenceOfSum([1, 15, 6, 3]);
