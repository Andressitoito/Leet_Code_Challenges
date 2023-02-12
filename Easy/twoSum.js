/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* UPLOADED TO LEETCODE */

var twoSum = function (nums, target) {
	let indexs = [];
	for (let i = 0; i < nums.length; i++) {
		if (indexs.length < 2) {
			for (let j = 0; j < nums.length; j++) {
				if (i === j) {
					continue;
				} else {
					if (nums[i] + nums[j] === target) {
						indexs.push(i, j);
						break;
					}
				}
			}
		}
	}
	return indexs;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));

/* MY STEP BY STEP */

var twoSum = function (nums, target) {
	let indexes = [];
	for (let index = 0; index < nums.length; index++) {
		const num1 = nums[index];

		if (indexes.length < 2) {
			for (let j = 0; j < nums.length; j++) {
				const num2 = nums[j];

				if (index === j) {
					console.log("SON IGUALES", num1, num2);
					continue;
				} else {
					if (num1 + num2 === target) {
						console.log(num1 + num2);
						indexes.push(index);
						indexes.push(j);
						console.log(indexes);
						break;
					}
				}
				console.log(nums[index], nums[j]);
			}
		}
	}
	return indexes;
};
