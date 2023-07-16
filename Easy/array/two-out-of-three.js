/* Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order. */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
	const unique_a = [...new Set(nums1)];
	const unique_b = [...new Set(nums2)];
	const unique_c = [...new Set(nums3)];

	const max_a = unique_a.length;
	const max_b = unique_b.length;
	const max_c = unique_c.length;

	const max = Math.max(max_a, max_b, max_c);

	const repeated = [];

	for (let i = 0; i < max; i++) {
		unique_a[i] && repeated.push(unique_a[i]);
		unique_b[i] && repeated.push(unique_b[i]);
		unique_c[i] && repeated.push(unique_c[i]);
	}

	const two = [];

	for (let i = 0; i < repeated.length; i++) {
		const quantity = repeated.filter((num) => num === repeated[i]);

		const find_num = two.findIndex((num) => num === repeated[i]);

		if (find_num === -1 && quantity.length >= 2) {
			two.push(repeated[i]);
		}
	}

	console.log(two);

	return two;
};

twoOutOfThree([1, 1, 3, 2], [2, 3], [3]);