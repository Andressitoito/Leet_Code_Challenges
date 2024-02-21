/* Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
	const response = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num % 2 === 0) {
			response.unshift(num);
		} else {
			response.push(num);
		}
	}

	console.log("response ", response);

	return response;
};

sortArrayByParity([3, 1, 2, 4]);
