/* Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order. */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const splited = s.split(" ");

	for (let i = 0; i < splited.length; i++) {
		splited[i] = splited[i].split("").reverse().join("");
	}

	console.log(splited.join(" "));
	return splited.join(" ");
};

reverseWords("Let's take LeetCode contest");
