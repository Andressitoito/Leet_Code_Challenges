/* You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete. */
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
	const position = [...score].sort((a, b) => b - a);

	for (let i = 0; i < score.length; i++) {
		const index = position.findIndex((elem) => elem === score[i]);

		if (index === 0) {
			score[i] = "Gold Medal";
		} else if (index === 1) {
			score[i] = "Silver Medal";
		} else if (index === 2) {
			score[i] = "Bronze Medal";
		} else {
			score[i] = `${index + 1}`;
		}
	}

	console.log("score ", score);

	return score;
};

findRelativeRanks([10, 3, 8, 9, 4]);
