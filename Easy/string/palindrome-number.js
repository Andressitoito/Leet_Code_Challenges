// Given an integer x, return true if x is a
// palindrome, and false otherwise.

var isPalindrome = function (x) {
	let r_x = parseInt(x.toString().split("").reverse().join(""));
	if (x === r_x) {
		return true;
	} else {
		return false;
	}
};

isPalindrome(231);
isPalindrome(131);
