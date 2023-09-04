/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let node = new ListNode(0);
	let current = node;

	while (list1 !== null && list2 !== null) {
		if (list1.val <= list2.val) {
			current.next = list1;
			current = current.next;

			list1 = list1.next;
		} else {
			current.next = list2;
			current = current.next;

			list2 = list2.next;
		}
	}

	if (list1 !== null) {
		current.next = list1;
	}

	if (list2 !== null) {
		current.next = list2;
	}

	logValues(node.next);

	return node.next;
};

const list1 = createLinkedList([5]);
const list2 = createLinkedList([1, 2, 4]);

mergeTwoLists(list1, list2);

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
function logValues(node, arr = []) {
	if (node === null) {
		console.log(arr);
		return arr;
	}

	arr.push(node.val);

	return logValues(node.next, arr);
}

///////////////////////////////////////
// COUNT VALUES
///////////////////////////////////////
function countNodes(node) {
	let count = 0;

	while (node !== null) {
		count++;
		node = node.next;
	}

	console.log(count);
	return count;
}
