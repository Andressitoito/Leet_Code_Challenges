/* Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	if (head === null) {
		return null;
	}

	let node = new ListNode(head.val);
	let current = node;

	let lastValue = new ListNode(head.val);
	let count = 0;
	while (head !== null) {
		count++;

		if (head.val === lastValue.val) {
			head = head.next;
			continue;
		} else {
			current.next = new ListNode(head.val);
			current = current.next;
			lastValue = head;
		}

		head = head.next;
	}

	logValues(node);

	return node;
};

const node = createLinkedList([1,2,2,3,3,4]);

deleteDuplicates(node);

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

	let current = new ListNode(head[count]);
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
