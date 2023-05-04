/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let uniqueArr = [];

	for (let i = 0; i < nums.length; i++) {
		let find = uniqueArr.some((elem) => elem === nums[i]);
		if (!find) {
			uniqueArr.push(nums[i]);
		}
	}

	let objectQuantity = {
		number: 0,
		quantity: 0,
	};

	uniqueArr.forEach((num) => {
		let quantity = nums.filter((numArr) => numArr === num);

		if (objectQuantity.quantity < quantity.length) {
			objectQuantity.quantity = quantity.length;
			objectQuantity.number = num;
		}
	});

	return objectQuantity.number;
};

function mayor(nums) {
	let uniqueArr = [];

	for (let i = 0; i < nums.length; i++) {
		let find = uniqueArr.some((elem) => elem === nums[i]);
		if (!find) {
			uniqueArr.push(nums[i]);
		}
	}

	let objectQuantity = {
		number: 0,
		quantity: 0,
	};

	uniqueArr.forEach((num) => {
		let quantity = nums.filter((numArr) => numArr === num);

		if (objectQuantity.quantity < quantity.length) {
			objectQuantity.quantity = quantity.length;
			objectQuantity.number = num;
		}
	});
 
	console.log(objectQuantity.number);
	return objectQuantity.number;
}

mayor([2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2]);
