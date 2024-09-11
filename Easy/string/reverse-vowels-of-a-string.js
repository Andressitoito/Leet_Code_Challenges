/* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once. */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
 const string = s.split("");
 const isVowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
 const vowels = [];
 const indexes = [];

 for (let i = 0; i < s.length; i++) {
  const char = s[i];

  if (isVowel.includes(char)) {
   vowels.push(char);
   indexes.push(i);
  }
 }

 vowels.reverse();

 for (let i = 0; i < vowels.length; i++) {
  const vowel = vowels[i];
  string[indexes[i]] = vowel;
 }

 const response = string.join("");

 console.log("response ", response);

 return response;
};

reverseVowels("leetcode");

reverseVowels("aA")

