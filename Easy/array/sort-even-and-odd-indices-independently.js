/* You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

Sort the values at odd indices of nums in non-increasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
Sort the values at even indices of nums in non-decreasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
Return the array formed after rearranging the values of nums.  */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
	const even = [];
	const odd = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (i % 2 === 0) {
			even.push(num);
		} else {
			odd.push(num);
		}
	}

	odd.sort((a, b) => b - a);
	even.sort((a, b) => a - b);

	const response = [];

	for (let i = 0; i < odd.length; i++) {
		const num_a = even[i];
		const num_b = odd[i];

		response.push(num_a, num_b);
	}

	if (odd.length < even.length) {
		response.push(even[even.length - 1]);
	} else if (odd.length > even.length) {
		response.push(odd[odd.length - 1]);
	}

	console.log("response ", response);

	return response;
};

sortEvenOdd([
	5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15, 21,
]);
