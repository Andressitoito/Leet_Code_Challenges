/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let short = s.replace("()", "").replace("{}", "").replace("[]", "");
	if (short.length === s.length) {
		return false;
	}
	if (short.length === 0) {
		return true;
	} else {
		return isValid(short);
	}
};

console.log(isValid("()[]{"));
console.log(isValid("()[]"));

function removeParenthesis(str) {
	let shortened = str.replace("()", "").replace("{}", "").replace("[]", "");
	if (shortened.length != str.length) {
		console.log("Shortened needs shorting");

		console.log("STRING ", str);
		console.log("SHORTENED ", shortened);
	} else {
		console.log(`This ${shortened} cannot be shortened more`);
		return false;
	}

	if (shortened.length === 0) {
		console.log(`SHORTENED ${shortened} is empty`);

		return true;
	} else {
		console.log(`${shortened}`);

		return removeParenthesis(shortened);
	}
}
