/* You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
	const sorted = nums.sort((a, b) => a - b);

	const list = [];

	const first = sorted.indexOf(target);

	let flag = true;

	for (let i = first; i < sorted.length && flag; i++) {
		const element = sorted[i];

		if (element === target) {
			list.push(i);
		} else {
			flag = false;
		}
	}

	console.log(list);

	return list;
};

targetIndices([1, 2, 5, 2, 3], 2);
