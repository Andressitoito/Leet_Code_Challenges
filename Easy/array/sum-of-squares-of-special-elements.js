/* You are given a 1-indexed integer array nums of length n.

An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

Return the sum of the squares of all special elements of nums. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
	let sum = 0;
	let specialNums = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (nums.length % (i + 1) === 0) {
			const squares = num * num;
			specialNums.push(num);
			sum += squares;
		}
	}

	console.log("specialNums ", specialNums);

	return sum;
};
sumOfSquares([2, 7, 1, 19, 18, 3]);
