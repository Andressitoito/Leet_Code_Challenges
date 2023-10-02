/* Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent. */
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
	let letterQty = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (char === letter) {
			letterQty++;
		}
	}

	const percent = Math.floor((letterQty * 100) / s.length);

	console.log(percent);

	return percent;
};

percentageLetter("foobar", "o");
