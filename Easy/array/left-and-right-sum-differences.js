/* Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
	const sum = [];
	const nums_right = [];
	const nums_left = [];

	for (let i = 0; i < nums.length; i++) {
		const right = nums.slice(i + 1);

		const sum_arr = right.reduce((acc, elem) => {
			return (acc += elem);
		}, 0);

		nums_right.push(sum_arr);
	}

	nums.reverse();
	for (let i = 0; i < nums.length; i++) {
		const left = nums.slice(i + 1);

		const sum_arr = left.reduce((acc, elem) => {
			return (acc += elem);
		}, 0);

		nums_left.push(sum_arr);
	}

	nums_left.reverse();

	for (let i = 0; i < nums_left.length; i++) {
		const sum_arr = Math.abs(nums_left[i] - nums_right[i]);

		sum.push(sum_arr);
	}

	console.log(sum);

	return sum;
};

leftRightDifference([10, 4, 8, 3]);
