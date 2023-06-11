/* Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn]. */
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	const arr = [];

	for (let i = 0; i < nums.length / 2; i++) {
		arr.push(nums[i], nums[nums.length / 2 + i]);
	}

	console.log(arr);

	return arr;
};

shuffle([2, 5, 1, 3, 4, 7], 3);
