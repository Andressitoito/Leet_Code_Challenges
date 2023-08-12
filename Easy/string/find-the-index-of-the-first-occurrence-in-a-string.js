/* Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
 return haystack.indexOf(needle)

};
console.time('call')
console.log('calculating time...')
strStr("sadbutsad", "sad");
console.timeEnd('call')
strStr("sadbutsad", "sade");
