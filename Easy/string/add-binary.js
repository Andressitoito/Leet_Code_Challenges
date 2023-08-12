/* Given two binary strings a and b, return their sum as a binary string. */
/**
	* @param {string} a
	* @param {string} b
	* @return {string}
	*/
var addBinary = function (a, b) {
	let loop_a = null;
	let loop_b = null;

	if (a.length > b.length) {
		loop_a = a;
		loop_b = b;
	} else {
		loop_a = b;
		loop_b = a;
	}

	loop_a = loop_a.split("").reverse();
	loop_b = loop_b.split("").reverse();

	let flag = 0;
	let response = "";

	for (let i = 0; i < loop_a.length; i++) {
		const a = parseInt(loop_a[i]);
		const b =
			parseInt(loop_b[i]) === 0 || parseInt(loop_b[i]) === 1
				? parseInt(loop_b[i])
				: 0;

		if (a + b !== 2 && flag === 0) {
			response += a + b;
			continue;
		}

		if (a + b === 2 && flag === 0) {
			flag = 1;
			response += 0;
			continue;
		}

		if (flag === 1) {
			if (a + b + flag === 2) {
				flag = 1;
				response += 0;
				continue;
			}

			if (a + b + flag === 3) {
				flag = 1;
				response += 1;
				continue;
			}

			flag = 0;
			response += 1;
		}
	}

	if (flag === 1) {
		response += 1
	}

	console.log("response", response.split("").reverse().join(""));

	return response.split("").reverse().join("");
};

addBinary("1111", "1111"); // "11110"