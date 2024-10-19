/* You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.

Consider calculating the following values:

The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.
Return an integer array answer of size 2 containing the two values in the above order. */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
	const response = [0, 0];

	for (let i = 0; i < nums1.length; i++) {
		const num = nums1[i];

		const exist = nums2.find((number) => number == num);

		if (exist) {
			response[0] = response[0] + 1;
		}
	}

	for (let i = 0; i < nums2.length; i++) {
		const num = nums2[i];

		const exist = nums1.find((number) => number == num);

		if (exist) {
			response[1] = response[1] + 1;
		}
	}

	console.log("response ", response);

	return response;
};

findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]);
