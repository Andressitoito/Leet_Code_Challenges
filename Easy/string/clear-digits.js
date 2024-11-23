/* You are given a string s.

Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits. */
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
	console.log("s", s);
	const splittedString = s.split("");
	console.log("s", splittedString);

	for (let i = 0; i < splittedString.length; i++) {
		const char = splittedString[i];

		console.log("char", char);

		const parsedNum = parseInt(char);

		if (!isNaN(parsedNum)) {
			console.log("not undefined ", char, parseInt(char));

			for (let j = i - 1; j >= 0; j--) {
				const char_del = splittedString[j];

				console.log("char_del ", char_del);

				const parsedChar = parseInt(char_del);

				if (isNaN(parsedChar)) {
					console.log("not undefined ", char, parseInt(char));
					splittedString.splice(i, 1);
					splittedString.splice(j, 1);
					i--;
					break;
				}
			}
		}
	}

	console.log("splittedString ", splittedString);

	const response = splittedString.join("");

	console.log("response ", response);

	return response;
};

clearDigits("cb34");
