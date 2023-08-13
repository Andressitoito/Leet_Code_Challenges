/* Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

Return the final string that will be present on your laptop screen. */
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
	let answer = "";

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== "i") {
			answer += s[i];
		} else {
			answer = [...answer].reverse().join("");
		}
	}

	console.log(answer);

	return answer;
};

finalString("string");
