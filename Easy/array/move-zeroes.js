/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let zeroes = 0;
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num === 0) {
			nums.splice(i, 1);
			zeroes++;
			i--;
		}
	}

	for (let i = 0; i < zeroes; i++) {
		nums.push(0);
	}

	console.log("nums ", nums);
};

moveZeroes([0, 0, 1, 1, 1, 1, 0]);
moveZeroes([0, 1, 0, 3, 12]);
