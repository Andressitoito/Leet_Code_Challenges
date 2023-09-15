/* A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s. */
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
	let group = [];
	let depth = 0;
	let substring = "";

	for (let i = 0; i < s.length; i++) {
		const par = s[i];

		if (par === "(") {
			if (depth > 0) {
				substring += par;
			}

			depth++;
		} else if (par === ")") {
			if (depth - 1 < 1) {
				group.push(substring);
				substring = "";
				depth--;
				continue;
			}

			if (depth > 0) {
				substring += par;
				depth--;
			}
		}
	}

	const stringed = group.join("");

	console.log(stringed);

	return stringed;
};

removeOuterParentheses("(()())(())");
