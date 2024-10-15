/* You are given two arrays of equal length, nums1 and nums2.

Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.

As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

Return the integer x. */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
	const abs_1 = nums1.reduce((acc, num) => {
		return (acc += num);
	}, 0);

	const abs_2 = nums2.reduce((acc, num) => {
		return (acc += num);
	}, 0);

	let integer = Math.abs(abs_2 - abs_1) / nums1.length;

	if (abs_2 < abs_1) {
		integer = integer * -1;
	}
	console.log("integer ", integer);

	return integer;
};

addedInteger([2, 6, 4], [9, 7, 5]);

addedInteger((nums1 = [10]), (nums2 = [5]));

addedInteger((nums1 = [1, 1, 1, 1]), (nums2 = [1, 1, 1, 1]));
