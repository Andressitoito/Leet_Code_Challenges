/* You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
	let unique = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const qtyArr = nums.filter((number) => number === num);
		const qty = qtyArr.length;

		if (qty === 1) {
			unique += num;
		}
	}

	console.log("unique ", unique);

	return unique;
};

sumOfUnique([1, 2, 3, 2]);
