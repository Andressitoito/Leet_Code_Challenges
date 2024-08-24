/* You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
	let response = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num % 3 === 0) {
			continue;
		} else if ((num - 1) % 3 === 0) {
			response++;
			continue;
		} else if ((num + 1) % 3 === 0) {
			response++;
			continue;
		}
	}

	console.log("response ", response);

	return response;
};

minimumOperations([1, 2, 3, 4]);
