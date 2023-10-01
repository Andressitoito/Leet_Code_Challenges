/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
		const a = s[i];
		const b = s[j];
		s[j] = a;
		s[i] = b;
	}

	console.log(s);
};

reverseString(["h", "e", "l", "l", "o", "o"]);
