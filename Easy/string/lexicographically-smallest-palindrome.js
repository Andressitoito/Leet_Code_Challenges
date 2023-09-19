/* You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.

Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.

A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.

Return the resulting palindrome string. */
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
	const alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	let arrLeft = [];
	let arrRight = [];

	for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
		const left = s[i];
		const right = s[j];

		if (i === j) {
			arrLeft.push(left);
			continue;
		}

		if (left !== right) {
			const a = alphabet.findIndex((char) => char === left);
			const b = alphabet.findIndex((char) => char === right);

			if (a < b) {
				arrLeft.push(left);
				arrRight.push(left);
			} else {
				arrLeft.push(right);
				arrRight.push(right);
			}
		} else {
			arrLeft.push(left);
			arrRight.push(right);
		}
	}

	const answer = arrLeft.join("") + arrRight.reverse().join("");

	console.log(answer);

	return answer;
};

makeSmallestPalindrome("egcfe");
