/* Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

Return abs(i - start).

It is guaranteed that target exists in nums. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */

var getMinDistance = function (nums, target, start) {
	let answer = 100000;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			const difference = Math.abs(i - start);

			if (difference < answer) {
				answer = difference;
			}
		}
	}

	console.log(answer);

	return answer;
};

getMinDistance([5, 2, 3, 5, 5], 5, 2);
