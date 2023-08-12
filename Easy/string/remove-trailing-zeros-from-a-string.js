/* Given a positive integer num represented as a string, return the integer num without trailing zeros as a string. */
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
	let index = 0;

	for (let i = num.length - 1; i >= 0; i--) {
		if (num[i] !== "0") {
			index = i;
			break;
		}
	}

	num = num.substring(0, index + 1);

	console.log(num);

	return num;
};

removeTrailingZeros("51230100");
