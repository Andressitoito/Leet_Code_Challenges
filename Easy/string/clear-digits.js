/* You are given a string s.

Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits. */
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
	const splittedString = s.split("");

	for (let i = 0; i < splittedString.length; i++) {
	 const char = splittedString[i];
	 const parsedNum = parseInt(char);
 
	 if (!isNaN(parsedNum)) {
		for (let j = i - 1; j >= 0; j--) {
		 const char_del = splittedString[j];
		 const parsedChar = parseInt(char_del);
 
		 if (isNaN(parsedChar)) {
			splittedString.splice(i, 1);
			splittedString.splice(j, 1);
 
			i = i - 2;
			break;
		 }
		}
	 }
	}
 
	const response = splittedString.join("");
 
	console.log("response ", response);
 
	return response;
};

clearDigits("cb34");
