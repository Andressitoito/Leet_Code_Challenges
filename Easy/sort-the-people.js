/* You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights. */
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
 const unarranged = new Map();
 const arranged = [];

 for (let i = 0; i < names.length; i++) {
  unarranged.set(heights[i], names[i]);
 }

 console.log(unarranged);

 const keys = Array.from(unarranged.keys());
 keys.sort((a, b) => a - b).reverse();
 console.log(keys);

 for (const key of keys) {
  console.log(key);
  const name = unarranged.get(key);
  arranged.push(name);
 }

 console.log(arranged);

 return arranged;
};

sortPeople(["IEO", "Sgizfdfrims", "QTASHKQ", "Vk", "RPJOFYZUBFSIYp", "EPCFFt", "VOYGWWNCf", "WSpmqvb"], [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]);

// ["EPCFFt","RPJOFYZUBFSIYp","VOYGWWNCf","Vk","Sgizfdfrims","IEO","QTASHKQ","WSpmqvb"]
