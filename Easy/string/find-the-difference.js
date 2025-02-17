/* You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t. */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let response = null;
 
  const objectS = returnObject(s);
  const objectT = returnObject(t);
 
  for (const char in objectT) {
 
   if (objectT[char] > objectS[char] || objectS[char] === undefined) {
 
    response = char;
    break
   }
  }
 
  console.log("response ", response)

  return response;
 };
 
 findTheDifference((s = "ae"), (t = "aea"));
 
 function returnObject(string) {
  const charObject = {};
 
  for (let i = 0; i < string.length; i++) {
   const char = string[i];
   if (charObject[char]) {
    charObject[char] = charObject[char] + 1;
   } else {
    charObject[char] = 1;
   }
  }
 
  return charObject;
 }