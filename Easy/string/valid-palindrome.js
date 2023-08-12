/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	console.log(s);

	let chars = s
		.replace(/[^a-zA-Z0-9]/g, "")
		.toLowerCase()
		.split("");
	let inverted_chars = [...chars].reverse();
	console.log(inverted_chars);

	chars = chars.join("");
	inverted_chars = inverted_chars.join("");

	console.log(chars);
	console.log(inverted_chars);

	if (chars === inverted_chars) {
		console.log("palindrome ", true);
		return true;
	} else {
		console.log("palindrome ", false);
		return false;
	}
};

const palindrome = (s) => {
	console.log(s);

	let chars = s
		.replace(/[^a-zA-Z0-9]/g, "")
		.toLowerCase()
		.split("");
	let inverted_chars = [...chars].reverse();
	console.log(inverted_chars);

	chars = chars.join("");
	inverted_chars = inverted_chars.join("");

	console.log(chars);
	console.log(inverted_chars);

	if (chars === inverted_chars) {
		console.log("palindrome ", true);
		return true;
	} else {
		console.log("palindrome ", false);
		return false;
	}
};

palindrome("A man, a plan, a canal: Panama");
