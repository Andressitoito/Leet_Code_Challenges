/* You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

Return the number of '*' in s, excluding the '*' between each pair of '|'.

Note that each '|' will belong to exactly one pair. */
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
	console.log(s);
	let asterisks = 0;
	if (!s.includes("|")) {
		return (asterisks += s.replace(/[^*]/g, "").length);
	}

	const splited = s.split("|");
	console.log(splited);

	for (let i = 0; i < splited.length; i = i + 2) {
		console.log(splited[i]);

		asterisks += splited[i].replace(/[^*]/g, "").length;
	}

	console.log(asterisks);
	return asterisks;
};

countAsterisks("l|*e*et|c**o|*de|");
countAsterisks("*e*et");
