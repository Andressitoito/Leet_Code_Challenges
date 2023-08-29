/* Given a string s consisting of lowercase English letters, return the first letter to appear twice.

Note:

A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
s will contain at least one letter that appears twice. */
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
	const controlObject = {};

	let keep = true;

	let answer = "";

	for (let i = 0; i < s.length && keep; i++) {
		if (controlObject[s[i]]) {
			controlObject[s[i]]++;
			answer = s[i];
			keep = false;
		} else {
			controlObject[s[i]] = 1;
		}
	}

	console.log(answer);

	return answer;
};

repeatedCharacter("abccbaacz");
