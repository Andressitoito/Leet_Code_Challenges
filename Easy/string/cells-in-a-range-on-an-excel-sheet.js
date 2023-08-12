/* A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:

<col> denotes the column number c of the cell. It is represented by alphabetical letters.
For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
<row> is the row number r of the cell. The rth row is represented by the integer r.
You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows. */
/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
 const alphabetMap = new Map([
  ['A', 1],
  ['B', 2],
  ['C', 3],
  ['D', 4],
  ['E', 5],
  ['F', 6],
  ['G', 7],
  ['H', 8],
  ['I', 9],
  ['J', 10],
  ['K', 11],
  ['L', 12],
  ['M', 13],
  ['N', 14],
  ['O', 15],
  ['P', 16],
  ['Q', 17],
  ['R', 18],
  ['S', 19],
  ['T', 20],
  ['U', 21],
  ['V', 22],
  ['W', 23],
  ['X', 24],
  ['Y', 25],
  ['Z', 26]
 ]);

 const initial_char = s[0]
 const initial_char_number = alphabetMap.get(initial_char)
 const end_char = s[3]
 const end_char_number = alphabetMap.get(end_char)
 const response_string = []

 let init_for = Number(s[1])
 let end_for = Number(s[4])

 for (let [char, int] of alphabetMap) {
  if (int >= initial_char_number && int <= end_char_number) {
   for (let i = init_for - 1; i < end_for; i++) {
    let string = char + (i + 1)
    response_string.push(string)
   }
  }
  if (int === end_char_number) {
   break
  }
 }
 console.log(response_string)
 return response_string
};

const cellsInRangee = (s) => {
 const alphabetMap = new Map([
  ['A', 1],
  ['B', 2],
  ['C', 3],
  ['D', 4],
  ['E', 5],
  ['F', 6],
  ['G', 7],
  ['H', 8],
  ['I', 9],
  ['J', 10],
  ['K', 11],
  ['L', 12],
  ['M', 13],
  ['N', 14],
  ['O', 15],
  ['P', 16],
  ['Q', 17],
  ['R', 18],
  ['S', 19],
  ['T', 20],
  ['U', 21],
  ['V', 22],
  ['W', 23],
  ['X', 24],
  ['Y', 25],
  ['Z', 26]
 ]);

 const initial_char = s[0]
 const initial_char_number = alphabetMap.get(initial_char)
 const end_char = s[3]
 const end_char_number = alphabetMap.get(end_char)
 const response_string = []

 let init_for = Number(s[1])
 let end_for = Number(s[4])

 for (let [char, int] of alphabetMap) {
  if (int >= initial_char_number && int <= end_char_number) {
   for (let i = init_for - 1; i < end_for; i++) {
    let string = char + (i + 1)
    response_string.push(string)
   }
  }
  if (int === end_char_number) {
   break
  }
 }
 console.log(response_string)
 return response_string
}

cellsInRangee("K2:L9")