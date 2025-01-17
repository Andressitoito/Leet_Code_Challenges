/* You are given a binary string s and an integer k.

A binary string satisfies the k-constraint if either of the following conditions holds:

The number of 0's in the string is at most k.
The number of 1's in the string is at most k.
Return an integer denoting the number of 
substrings of s that satisfy the k-constraint. */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
	console.log("s k ", s, k);

	let response = 0;

	let count = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		for (let j = i + 1; j >= 0; j--) {
			count++;
			console.log("count ", count);

			const arr = s.substring(j, i);

			console.log("subarr ", arr);

			const ones = arr.split("").filter((char) => char === "1").length;
			const zeroes = arr.split("").filter((char) => char === "0").length;

			console.log("zeroes, oneos ", ones, zeroes);

			if (ones > k || zeroes > k) {
				console.log("not ");
				continue;
			} else if (ones === 0 && zeroes === 0) {
				continue;
			} else {
				response++;
			}
		}

	}
  
	console.log("response ", response);

  return response;
};

countKConstraintSubstrings("10101", 1);


