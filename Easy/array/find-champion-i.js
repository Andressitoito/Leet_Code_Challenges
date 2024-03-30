/* There are n teams numbered from 0 to n - 1 in a tournament.

Given a 0-indexed 2D boolean matrix grid of size n * n. For all i, j that 0 <= i, j <= n - 1 and i != j team i is stronger than team j if grid[i][j] == 1, otherwise, team j is stronger than team i.

Team a will be the champion of the tournament if there is no team b that is stronger than team a.

Return the team that will be the champion of the tournament. */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
	const last_winner = [0, null];

	for (let i = 0; i < grid.length; i++) {
		const team = grid[i];

		let points = 0;
		for (let i = 0; i < team.length; i++) {
			const team_points = team[i];
			points += team_points;
		}

		if (points > last_winner[0]) {
			last_winner[1] = i;
			last_winner[0] = points;
		}
	}

	console.log("last winner ", last_winner);
	console.log("return ", last_winner[1]);

	return last_winner[1];
};

findChampion([
	[0, 0, 1],
	[1, 0, 1],
	[0, 0, 0],
]);
