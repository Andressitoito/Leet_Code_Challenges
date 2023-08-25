/* Given the head of a singly linked list, reverse the list, and return the reversed list. */
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
var reverseList = function (head) {
	prev = null;
	currentNode = head;

	while (currentNode !== null) {
		let tempNode = currentNode.next;
		currentNode.next = prev;
		prev = currentNode;
		currentNode = tempNode;
	}

	console.log(prev);
	return prev;
};

createLinkedList([1, 2, 3, 4, 5]);

function createLinkedList(head) {
	let node = new ListNode(0);
	let currentNode = node;

	for (let i = 0; i < head.length; i++) {
		currentNode.next = new ListNode(head[i]);
		currentNode = currentNode.next;
	}

	return node.next;
}

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
