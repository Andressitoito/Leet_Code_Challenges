/* You are given a 1-indexed array of distinct integers nums of length n.

You need to distribute all the elements of nums between two arrays arr1 and arr2 using n operations. In the first operation, append nums[1] to arr1. In the second operation, append nums[2] to arr2. Afterwards, in the ith operation:

If the last element of arr1 is greater than the last element of arr2, append nums[i] to arr1. Otherwise, append nums[i] to arr2.
The array result is formed by concatenating the arrays arr1 and arr2. For example, if arr1 == [1,2,3] and arr2 == [4,5,6], then result = [1,2,3,4,5,6].

Return the array result. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
	const a = [nums[0]];
	const b = [nums[1]];

	for (let i = 2; i < nums.length; i++) {
		const num = nums[i];

		if (a[a.length - 1] > b[b.length - 1]) {
			a.push(num);
		} else {
			b.push(num);
		}
	}

	const result = a.concat(b);

	console.log("result ", result);

	return result;
};

resultArray([5, 4, 3, 8]);
