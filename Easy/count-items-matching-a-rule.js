/* You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule. */
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
 let index = 0

 if (ruleKey === 'color') {
  index = 1
 }

 if (ruleKey === "name") {
  index = 2
 }

 let match = 0;

 for (let i = 0; i < items.length; i++) {
  if (items[i][index] === ruleValue) {
   match++;
  }
 }
 console.log(match);
 return match;
};

countMatches(
 [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
 ],
 "color",
 "silver"
);


// var countMatches = function (items, ruleKey, ruleValue) {
//  const ruleKey_index = ["type", "color", "name"];
//  const index = ruleKey_index.findIndex((item) => item === ruleKey);
//  let match = 0;

//  for (let i = 0; i < items.length; i++) {
//   if (items[i][index] === ruleValue) {
//    match++;
//   }
//  }
//  console.log(match);
//  return match;
// };

// countMatches(
//  [
//   ["phone", "blue", "pixel"],
//   ["computer", "silver", "lenovo"],
//   ["phone", "gold", "iphone"],
//  ],
//  "color",
//  "silver"
// );
