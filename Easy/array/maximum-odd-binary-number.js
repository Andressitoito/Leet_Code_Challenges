/* You are given a binary string s that contains at least one '1'.

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

Note that the resulting string can have leading zeros. */
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
	if (s.length === 1 && s[0] === "1") {
		return "1";
	}

	let zeroes = 0;
	let ones = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (char === "1") {
			ones++;
		} else {
			zeroes++;
		}
	}

	ones--;

	const response = "1".repeat(ones) + "0".repeat(zeroes) + "1";

	console.log("response ", response);

	return response;
};

maximumOddBinaryNumber("0101");
