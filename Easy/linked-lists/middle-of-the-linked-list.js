/* Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node. */
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
var middleNode = function (head) {
	const nodes = countNodes(head);
	const middle = nodes % 2 === 0 ? nodes / 2 + 1 : Math.ceil(nodes / 2);

	let count = 0;
	let node = new ListNode(0);
	let current = node;

	while (head !== null) {
		count++;

		if (count >= middle) {
			current.next = new ListNode(head.val);
			current = current.next;
		}

		head = head.next;
	}

	logValues(node.next);

	return node.next;
};

const list = createLinkedList([1, 2, 3, 4, 5]);

middleNode(list);

///////////////////////////////////////
// COUNT NODES
///////////////////////////////////////
function countNodes(node) {
	let count = 0;

	while (node !== null) {
		count++;
		node = node.next;
	}

	return count;
}

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
