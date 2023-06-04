/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {};

const iisAnagram = (s, t) => {
	let string = s.split("");
	let target = t.split("");

	string.sort();

	target.sort();

	string = string.join("");
	target = target.join("");

	if (string === target) {
		return true;
	} else {
		return false;
	}
};

iisAnagram("anagram", "nagaram");
