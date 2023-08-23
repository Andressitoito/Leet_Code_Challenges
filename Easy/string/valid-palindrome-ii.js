/* Given a string s, return true if the s can be palindrome after deleting at most one character from it. */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	const inverted = s.split("").reverse().join("");

	if (inverted === s) {
		console.log(true);
		return true;
	}

	let string = s.split("");

	let left = 0;
	let right = string.length - 1;

	while (left < right) {
		if (string[left] !== string[right]) {
			const str_l = [...string];
			const str_r = [...string];

			str_l.splice(left, 1);
			str_r.splice(right, 1);

			if (isPalindrome(str_l) || isPalindrome(str_r)) {
				console.log(true);
				return true;
			} else {
				console.log(false);
				return false;
			}
		}

		left++;
		right--;
	}
};

validPalindrome("abba");

function isPalindrome(arr) {
	return arr.join("") === arr.reverse().join("");
}
