/* You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

Return the binary representation of date. */
/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
	const dateArr = date.split("-");
	const binaryArr = [];

	for (let i = 0; i < dateArr.length; i++) {
		const number = parseInt(dateArr[i]);
		const binary = number.toString(2);

		binaryArr.push(binary);
	}

	const response = binaryArr.join("-");

  console.log("response ", response)

	return response;
};

convertDateToBinary("2080-02-29");