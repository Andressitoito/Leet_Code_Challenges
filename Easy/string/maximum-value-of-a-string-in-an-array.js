/* The value of an alphanumeric string can be defined as:

The numeric representation of the string in base 10, if it comprises of digits only.
The length of the string, otherwise.
Given an array strs of alphanumeric strings, return the maximum value of any string in strs. */
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
	const max = []

	for (let i = 0; i < strs.length; i++) {
		const containsNonNumeric = /\D/.test(strs[i]);

		if (containsNonNumeric) {
			const num = strs[i].length;

   max.push(num)
		} else {
			max.push(parseInt(strs[i]))
		}
	}

 const mmax = Math.max(...max)
 console.log(mmax)

	return mmax;
};

maximumValue(["15alic", "bob", "3", "4", "00000"]);

// non digits  /\D/ 
// only digits ^\d+$