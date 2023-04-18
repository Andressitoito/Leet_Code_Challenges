/* 
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
 let strings = [word1, word2];

 let tuppled = [];
 
 for (let i = 0; i < strings[0].length; i++) {
  const tupple = strings.map((str) => {
   if (str[i]) {
    return str[i];
   } else {
    return "";
   }
  });
  tuppled.push(tupple);
 }
 
 let joined_tupple = tuppled.join(",").split(",").join("");
 
 let cutString = strings[1].slice(word1.length);
 
 let result = joined_tupple + cutString;
 
 return result;
};
mergeAlternately("135", "246");

