/* Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here. */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const same = s.split("").every((char) => char == s[0]);

	if (same) {
		console.log("s.length ", s.length);
		return s.length;
	}

	let chars = {};

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (chars[char]) {
			chars[char]++;
		} else {
			chars[char] = 1;
		}
	}

	let sum = 0;
	if (Object.keys(chars).length === 2) {
		const a = Object.values(chars)[0];
		const b = Object.values(chars)[1];
		if (a % 2 === 0 && b % 2 === 0) {
			console.log(a + b);
			return a + b;
		} else if ((a % 2 === 0 && b % 2 === 1) || (a % 2 === 1 && b % 2 === 0)) {
			console.log(a + b);
			return a + b;
		} else {
			console.log(a + b - 1);
			return a + b - 1;
		}
	} else {
		let uneven = false;

		for (const char in chars) {
			if (chars[char] % 2 === 1) {
				if (!uneven) {
					sum += chars[char];
					uneven = true;
				} else {
					sum += chars[char] - 1;
				}
			}

			if (chars[char] % 2 === 0) {
				sum += chars[char];
			}
		}
	}

	console.log("sum ", sum);

	return sum;
};

longestPalindrome("abccccdd");
