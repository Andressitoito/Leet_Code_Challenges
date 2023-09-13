/* A string is a valid parentheses string (denoted VPS) if it meets one of the following:

It is an empty string "", or a single character not equal to "(" or ")",
It can be written as AB (A concatenated with B), where A and B are VPS's, or
It can be written as (A), where A is a VPS.
We can similarly define the nesting depth depth(S) of any VPS S as follows:

depth("") = 0
depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS represented as string s, return the nesting depth of s. */
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
	let depth = 0;
	let depthArr = [];

	const parent = s.split("").some((par) => par === "(");

	if (!parent) {
		console.log(0);
		return 0;
	}

	for (let i = 0; i < s.length; i++) {
		const parentheses = s[i];

		if (parentheses === "(") {
			depth++;
			depthArr.push(depth);
		}

		if (parentheses === ")") {
			if (s[i + 1] === "(") {
				depth--;
			} else {
				depth--;
			}
		}
	}

	const max = Math.max(...depthArr);

	console.log(max);

	return max;
};

maxDepth("");
