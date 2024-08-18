/* You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	nums.sort((a, b) => a - b);
	const good = [];
	const response = [0, 0];

	for (let i = 0; i < nums.length; i++) {
		const num = i + 1;
		good.push(num);
	}

	for (let i = 0; i < good.length; i++) {
		const num = good[i];
		const exist = nums.filter((number) => number === num);

		if (exist.length === 0) {
			response[1] = num;
		} else if (exist.length === 2) {
			response[0] = num;
		}
	}

	console.log("response ", response);

	return response;
};

// findErrorNums([3, 2, 3, 4, 6, 5]); // [3,1]
// findErrorNums([1, 1]);
findErrorNums([3, 2, 2]);
