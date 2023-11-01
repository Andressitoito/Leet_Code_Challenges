/* You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s. */
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
 const elems = words.filter(word => word.startsWith(pref))

 console.log(elems.length);
 
 return elems.length;
};

prefixCount(["pay", "attention", "practice", "attend"], "at");
