/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
 let roman_int = new Map([
  ["MMMCMXCIX", 3999],
  ["MMM", 3000],
  ["MMCM", 2900],
  ["MM", 2000],
  ["MCM", 1900],
  ["MDCCC", 1800],
  ["MDCC", 1700],
  ["MDC", 1600],
  ["MD", 1500],
  ["CM", 900],
  ["M", 1000],
  ["DCCC", 800],
  ["DCC", 700],
  ["DC", 600],
  ["CD", 400],
  ["D", 500],
  ["CCC", 300],
  ["CC", 200],
  ["XC", 90],
  ["C", 100],
  ["LXXX", 80],
  ["LXX", 70],
  ["LX", 60],
  ["XL", 40],
  ["L", 50],
  ["XXX", 30],
  ["XX", 20],
  ["IX", 9],
  ["X", 10],
  ["VIII", 8],
  ["VII", 7],
  ["IV", 4],
  ["V", 5],
  ["VI", 6],
  ["III", 3],
  ["II", 2],
  ["I", 1],
 ]);

 let string = s;

 let romans = 0;
 if (string.length != 0) {
  for (let [roman_str, roman_value] of roman_int) {
   if (string.indexOf(roman_str) !== -1) {
    string = string.replace(roman_str, "");
    romans += roman_value;
   } else {
    continue;
   }
  }
 }

 return romans
};

romanToInt("MMMXLV");
