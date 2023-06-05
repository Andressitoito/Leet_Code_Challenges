/* You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second. */
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
	const regex = /[aceg]+/g;
	const regex_check = coordinates.match(regex);

	const number = parseInt(coordinates[1]);

	if (number % 2 === 0) {
		if (regex_check !== null) {
   console.log(true);
			return true;
		} else {
			console.log(false);
			return false;
		}
	} else {
  if (regex_check !== null) {
   console.log(false);
			return false;
		} else {
   console.log(true);
			return true;
		}
 }
};

squareIsWhite("g2");
squareIsWhite("a1");
