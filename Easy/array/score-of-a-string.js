/* You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s. */
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
	console.log("s ", s);

	let score = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		console.log("char ", char);
		if (s[i + 1] !== undefined) {
			console.log("//////////////////////////////////// ");
			console.log("char ", char);

			const char1 = char.charCodeAt(0);
			const char2 = s[i + 1].charCodeAt(0);

			console.log("chars ", char1, char2);

			score += Math.abs(char1 - char2);
		}
	}

	console.log("score ", score);

 return score
};


scoreOfString("hello");

scoreOfString("zaz");

// const chars = [];

// for (let i = 0; i < s.length; i++) {
//  const char = s[i]
//  if (!chars.includes(char)) {
//   console.log("char not in chars ", char);

//   chars.push(char);

//  }
// };
