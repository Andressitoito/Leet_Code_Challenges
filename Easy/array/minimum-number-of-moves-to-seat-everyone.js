/* There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning. */
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
	sortAscending(seats);
	sortAscending(students);

	let moves = 0;
 
	for (let i = 0; i < seats.length; i++) {
		const seat = seats[i];
		const student = students[i];
		const move = Math.abs(seat - student);
		moves += move;
	}

	console.log(moves);

	return moves;
};

minMovesToSeat([3, 1, 5], [2, 7, 4]);

///////////////////////////////////////
// SORT ASCENDING
///////////////////////////////////////
function sortAscending(arr) {
	return arr.sort((a, b) => a - b);
}
