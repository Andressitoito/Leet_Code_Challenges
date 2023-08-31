/* Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
	let node = head;

	let mainNode = new ListNode(0);
	let current = mainNode;

	let subNode = new ListNode(0);
	let currentSubNode = subNode;

	let count = 0;

	while (node !== null) {
		count++;

		if (count < k && node.next === null) {
			if (count === 1 && node.next === null) {
				joinLists(current, new ListNode(node.val));
			}

			joinLists(current, currentSubNode.next);
		}

		if (count < k) {
			joinLists(currentSubNode, new ListNode(node.val));
		} else {
			joinLists(currentSubNode, new ListNode(node.val));
			const reversed = reverseNode(currentSubNode.next);

			joinLists(current, reversed);

			currentSubNode = new ListNode(0);
			count = 0;
		}

		node = node.next;
	}

	nodeValues(mainNode.next);

	return mainNode.next;
};

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function createLinkedList(head) {
	let node = new ListNode(0);
	let current = node;

	for (let i = 0; i < head.length; i++) {
		current.next = new ListNode(head[i]);
		current = current.next;
	}

	return node.next;
}

const node = createLinkedList([1]);

reverseKGroup(node, 3);

const nodeverse = createLinkedList([1, 2, 3]);

function reverseNode(node) {
	let prev = null;
	let current = node;

	while (node !== null) {
		let tempNode = new ListNode(node.val);

		tempNode.next = prev;
		prev = tempNode;
		current = node.next;

		node = node.next;
	}

	return prev;
}

reverseNode(nodeverse);

const node2 = createLinkedList([10, 20, 25]);
const node3 = createLinkedList([30, 40]);

function joinLists(nodeA, nodeB) {
	let current = nodeA;

	while (current.next !== null) {
		current = current.next;
	}

	current.next = nodeB;
	return nodeA;
}

joinLists(node2, node3);

let subNode = new ListNode(0);
let current = subNode;

function nodeValues(node) {
	let arr = [];

	while (node !== null) {
		arr.push(node.val);
		node = node.next;
	}

	console.log(arr);

	return;
}
