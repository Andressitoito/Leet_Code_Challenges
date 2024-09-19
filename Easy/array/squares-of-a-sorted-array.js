/* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	const response = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		response.push(num * num);
	}
	response.sort((a, b) => a - b);

	console.log("response ", response);

	return response;
};

sortedSquares([-4, -1, 0, 3, 10]);
