/* Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j] */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
	let answer = false;

	for (let i = 0; i < arr.length && !answer; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i === j) continue;

			if (arr[i] === arr[j] * 2) {
				answer = true;
    break
			}
		}
	}

	console.log(answer);
	return answer;
};

checkIfExist([10, 2, 5, 3]);
