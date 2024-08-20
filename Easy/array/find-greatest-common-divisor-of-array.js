/* Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
	const max = Math.max(...nums);
	const min = Math.min(...nums);

	let response = min;

	if (max % min === 0) {
	} else {
		let greatest = min;
		let keep = true;

		while (keep) {
			if (max % greatest === 0 && min % greatest === 0) {
				keep = false;
			} else {
				greatest--;
			}
		}

		response = greatest;
	}

	console.log("response ", response);

	return response;
};

findGCD([5, 6, 9, 11]);
findGCD([7, 5, 6, 8, 2]);
