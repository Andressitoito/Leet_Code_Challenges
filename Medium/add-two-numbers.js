/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function (l1, l2) {
	let num1 = parseInt(l1.toString().split(",").reverse().join(""));
	let num2 = parseInt(l2.toString().split(",").reverse().join(""));

	let result = num1 + num2;

 console.log(num1)
 console.log(num2)
 console.log(result)

	let result_to_list = result.toString().split("").reverse();

	let list = [];

	for (let index = 0; index < result_to_list.length; index++) {
		const element = parseInt(result_to_list[index]);
		list.push(element);
	}

	return list;
};

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));




/* var addTwoNumbers2 = function (l1, l2) {
	// Convert l1 array to a string
	let number__1 = l1.toString();

	// Separate the numbers by the commas
	number__1 = number__1.split(",");
	// Reverse the order of the elements
	number__1 = number__1.reverse();
	// Join all the elements separated by commas
	number__1 = number__1.join("");
	// Convert from string to integer
	number__1 = parseInt(number__1);

	console.log(number__1);

	return [l1, l2];
};

// console.log(addTwoNumbers2(l1, l2))
 */