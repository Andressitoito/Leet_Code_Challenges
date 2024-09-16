/* You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

2 digits: A single block of length 2.
3 digits: A single block of length 3.
4 digits: Two blocks of length 2 each.
The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

Return the phone number after formatting. */
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const filtered = number
		.split("")
		.filter((num) => numbers.includes(parseInt(num)));

	let phone = filtered.join("");

	let response = "";

	if (phone.length == 4) {
		const first = phone.slice(0, 2);
		const last = phone.slice(2, 4);

		response += `${first}-${last}`;
		phone = "";
	} else if (phone.length < 4) {
		response += `${phone}`;

		phone = "";
	}

	while (phone !== "") {
		if (phone.length > 4) {
			const first = phone.slice(0, 3);
			phone = phone.slice(3);

			if (response.length === 0) {
				response += first;
			} else {
				response += `-${first}`;
			}

			continue;
		} else if (phone.length === 4) {
			const first = phone.slice(0, 2);
			const last = phone.slice(2, 4);

			response += `-${first}-${last}`;
			phone = "";
		} else if (phone.length < 4) {
			response += `-${phone}`;

			phone = "";
		}
	}

	if (response.length < 4) {
	}

	console.log("response ", response)

	return response;
};

reformatNumber("4");
