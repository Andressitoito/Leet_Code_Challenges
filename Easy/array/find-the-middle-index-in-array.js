/* Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
	let index = -1;

	for (let i = 0; i < nums.length; i++) {
		let left = 0;
		let right = 0;

		for (let j = 0; j < nums.length; j++) {
			left = [...nums].splice(0, j).reduce((acc, num) => {
				return (acc += num);
			}, 0);

			right = [...nums]
				.splice(j + 1, nums.length + 1)
				.reduce((acc, num) => {
					return (acc += num);
				}, 0);

			if (right === left) {
				index = j;
				break;
			}
		}
	}

	console.log("index ", index);

	return index;
};

findMiddleIndex([2, 3, -1, 8, 4]);
