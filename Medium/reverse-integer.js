/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let number = x;

	if (x < 0) {
		number = number * -1;
	} else {
		number = number * 1;
	}

	let reverse = number.toString().split("").reverse();
	reverse = reverse.join("");

	if (x < 0) {
		reverse = reverse * -1;
	} else {
		reverse = reverse * 1;
	}

	if (reverse > 2 ** 31 - 1 || reverse < -(2 ** 31)) {
		console.log(reverse);
		return 0;
	} else {
		console.log(reverse);
		return reverse;
	}
};

reverse(-123);
