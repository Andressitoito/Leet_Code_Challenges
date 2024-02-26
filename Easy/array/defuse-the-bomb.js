/* You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb! */
/**
	* @param {number[]} code
	* @param {number} k
	* @return {number[]}
	*/
var decrypt = function (code, k) {
	let newCode = [];
	let response = [];
	let reversed = false

	if (k < 0) {
		k = k * -1;
		reversed = true

		newCode = code.concat(code);
		newCode.reverse();
	} else {
		const add = [...code].splice(0, k);

		newCode = code.concat(add);
	}

	for (let i = 0; i < code.length; i++) {
		let sum = 0;

		for (let j = 0; j < k; j++) {
			let elem = newCode[i + j + 1];
			sum += elem;
		}

		response.push(sum);
	}

	if (reversed) {
		response = response.reverse();
	}

	console.log("response ", response)

	return response;
};

decrypt([2, 4, 9, 3], -2);
