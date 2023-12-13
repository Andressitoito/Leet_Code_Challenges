/* An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise. */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
	let response = true;

	let sorted = [...nums].sort((a, b) => a - b);

	let reversed = [...nums].sort((a, b) => b - a);

	const respArr = [true, true];

	for (let i = 0; i < nums.length; i++) {
		const numI = nums[i];

		if (numI !== sorted[i]) {
			respArr[0] = false;
			break;
		}
	}

	for (let i = 0; i < nums.length; i++) {
		const numI = nums[i];

		if (numI !== reversed[i]) {
			respArr[1] = false;
			break;
		}
	}

	if (respArr[0] === false && respArr[1] === false) {
		response = false;
	}

	return response;
};

isMonotonic([-3, -1, 0]);
