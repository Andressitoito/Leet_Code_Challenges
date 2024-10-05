/* You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

Return the permutation difference between s and t. */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
 t = t.split("");
 let sum = 0;

 for (let i = 0; i < s.length; i++) {
  const char_s = s[i];
  const char_t = t.indexOf(char_s);
  const difference = Math.abs(i - char_t);
  sum += difference;
 }

 console.log("absolute ", sum)

 return sum
};

findPermutationDifference("abc", "bac");
console.log("//////////////////////////// ")
findPermutationDifference(s = "abcde", t = "edbac")