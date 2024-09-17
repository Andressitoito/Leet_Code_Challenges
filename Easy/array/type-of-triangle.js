/* You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

A triangle is called equilateral if it has all sides of equal length.
A triangle is called isosceles if it has exactly two sides of equal length.
A triangle is called scalene if all its sides are of different lengths.
Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle. */
/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
	const a = nums[0] + nums[1];
	const b = nums[0] + nums[2];
	const c = nums[1] + nums[2];

	if (a === b && b === c) {
		return "equilateral";
	}

	if (a > nums[2] && b > nums[1] && c > nums[0]) {
		if (a !== b && b !== c && c !== a) {
			return "scalene";
		}

		if (a === b || b === c || c === a) {
			return "isosceles";
		}
	} else {
		console.log("none ", false);
		return "none";
	}
};

triangleType([3, 4, 5]);
console.log("/////////////////////////////////// ");
triangleType([3, 3, 3]);
console.log("/////////////////////////////////// ");
triangleType([2, 3, 3]);
console.log("/////////////////////////////////// ");
triangleType([8, 4, 2]);
