/* Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
	let str = "";

	while (head !== null) {
		str += head.val;
		head = head.next;
	}

	const decimal = parseInt(str, 2);

	console.log(decimal);

	return decimal;
};

const node = createLinkedList([1, 0, 1]);
getDecimalValue(node);

///////////////////////////////////////
// CREATE LISTNODE
///////////////////////////////////////
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

///////////////////////////////////////
// CREATE LINKED LIST
///////////////////////////////////////
function createLinkedList(head, count = 0) {
	if (count >= head.length) {
		return null;
	}

	const current = new ListNode(head[count]);
	current.next = createLinkedList(head, count + 1);

	return current;
}

///////////////////////////////////////
// LOG VALUES
///////////////////////////////////////
function logValues(node) {
	const arr = [];

	while (node !== null) {
		arr.push(node.val);
		node = node.next;
	}

	console.log(arr);
}
