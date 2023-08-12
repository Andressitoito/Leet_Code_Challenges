/* Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
	let forLoopLength = [nums1, nums2].map((arr) => arr.length);
	let maxForLoopLength = Math.max(...forLoopLength);
	let arr_nums1 = [];
	let arr_nums2 = [];

	for (let i = 0; i < maxForLoopLength; i++) {

  let integer1 = nums1[i];
		if (integer1 !== undefined) {
			let isNum = nums2.some((num) => num === integer1);
			if (!isNum) {
				let isNumArr = arr_nums1.some((num) => num === integer1);
				console.log("isNum in the arr repeated?", isNumArr);
				if (!isNumArr) {
					arr_nums1.push(integer1);
				}
			}
		}

		let integer2 = nums2[i];
		if (integer2 !== undefined) {
			let isNum2 = nums1.some((num) => num === integer2);
			if (!isNum2) {
				let isNumArr = arr_nums2.some((num) => num === integer2);
				if (!isNumArr) {
					arr_nums2.push(integer2);
				}
			}
		}
	}

	return [arr_nums1, arr_nums2];
};

// findDifferenced([1, 2, 3], [2, 4, 6])
const findDifferenced = (nums1, nums2) => {
	let forLoopLength = [nums1, nums2].map((arr) => arr.length);

	console.log(forLoopLength);
	let maxForLoopLength = Math.max(...forLoopLength);
	console.log("maxForLoopLength ", maxForLoopLength);

	console.log(nums1);
	console.log(nums2);

	let arr_nums1 = [];
	let arr_nums2 = [];

	for (let i = 0; i < maxForLoopLength; i++) {
		let integer1 = nums1[i];

		if (integer1 !== undefined) {
			let isNum = nums2.some((num) => num === integer1);

			console.log("isNum in the other array?", isNum);

			if (!isNum) {
				let isNumArr = arr_nums1.some((num) => num === integer1);
				console.log("isNum in the arr repeated?", isNumArr);
				if (!isNumArr) {
					arr_nums1.push(integer1);
				}
			}
		}

		let integer2 = nums2[i];

		if (integer2 !== undefined) {
			let isNum2 = nums1.some((num) => num === integer2);

			console.log("isNum2 in the other array?", isNum2);

			if (!isNum2) {
				let isNumArr = arr_nums2.some((num) => num === integer2);
				console.log("isNum2 in the arr repeated?", isNumArr);

				if (!isNumArr) {
					arr_nums2.push(integer2);
				}
			}
		}
	}

	console.log("arr_nums1 ", arr_nums1);
	console.log("arr_nums2 ", arr_nums2);
	console.log("Response ", [arr_nums1, arr_nums2]);
	return [arr_nums1, arr_nums2];
};

// findDifferenced([1, 2, 3, 3], [1, 1, 2, 2]);
// findDifferenced([1, 2, 3], [2, 4, 6]);
findDifferenced([-68, -80, -19, -94, 82, 21, -43], [-63]);
