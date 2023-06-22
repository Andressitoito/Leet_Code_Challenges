/* Given the root of a binary tree, return the inorder traversal of its nodes' values. */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

let tn1 = new TreeNode(1, undefined, undefined);
let tn2 = new TreeNode(2, undefined, undefined);
let tn3 = new TreeNode(3, undefined, undefined);

tn1.right = tn2;
tn2.left = tn3;

var inorderTraversal = function (root) {
	if (root === null) return [];
	if (root.left === null && root.right === null) return [root.val];

	return [
		...inorderTraversal(root.left),
	 root.val,
		...inorderTraversal(root.right),
	];
};

console.log(inorderTraversal(tn1));
