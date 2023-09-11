/* Given an array of strings words and a string s, determine if s is an acronym of words.

The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

Return true if s is an acronym of words, and false otherwise. */
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
	let str = "";

	for (let i = 0; i < words.length; i++) {
		const element = words[i];
		str += element[0];
	}

	if (str === s) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
};

isAcronym(["alice", "bob", "charlie"], "abc");
