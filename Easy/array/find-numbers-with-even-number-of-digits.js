/* Given an array nums of integers, return how many of them contain an even number of digits. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
	let response = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num.toString().length % 2 === 0) {
			response++;
		}
	}

	console.log("response ", response);

	return response;
};

findNumbers([12, 345, 2, 6, 7896]);
