/* You are given a 0-indexed integer array nums and an integer k.

Return an integer that denotes the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation.

The set bits in an integer are the 1's present when it is written in binary.

For example, the binary representation of 21 is 10101, which has 3 set bits. */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
	let answer = 0;

	for (let i = 0; i < nums.length; i++) {
		const binary = i.toString(2);

		const value = binary.split("").filter((num) => num === "1");

		if (value.length === k) {
			answer += nums[i];
		}
	}

	console.log(answer);

	return answer;
};

sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1);
