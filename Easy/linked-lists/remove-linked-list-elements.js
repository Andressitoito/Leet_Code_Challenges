/* Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	let answer = new ListNode(0);
	let current = answer;

	while (head !== null) {
		if (head.next === null && head.val === val) {
			current.next = null;
		}

		if (head.val !== val) {
			current.next = head;
			current = current.next;
		}
		head = head.next;
	}

	logValues(answer.next);

	return answer.next;
};

const list = createLinkedList([1, 2, 7, 3, 4, 7, 5]);

removeElements(list, 5);

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
function createLinkedList(head) {
	let node = new ListNode(0);
	let current = node;

	for (let i = 0; i < head.length; i++) {
		current.next = new ListNode(head[i]);
		current = current.next;
	}

	return node.next;
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
