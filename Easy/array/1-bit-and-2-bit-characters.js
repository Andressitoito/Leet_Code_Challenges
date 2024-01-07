/* We have two special characters:

The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character. */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
	const numbers = [];

	for (let i = 0; i < bits.length; i++) {
		const bit = bits[i];

		if (bit === 1) {
			numbers.push(11);

			i++;
		} else {
			numbers.push(bits[i]);
		}
	}

	if (numbers[numbers.length - 1] === 0) {
		console.log("response ", true);
		return true;
	} else {
		console.log("response ", false);
		return false;
	}
};

isOneBitCharacter([0, 1, 1, 1, 0, 0, 0, 1, 1, 0]);
