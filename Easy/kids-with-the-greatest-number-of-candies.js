/* There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/

var kidsWithCandies = function (candies, extraCandies) {
	let kids = [];
	let maxCandy = Math.max(...candies);

	for (let candy of candies) {
		const sumCandies = extraCandies + candy;
		if (sumCandies >= maxCandy) {
			kids.push(true);
		} else {
			kids.push(false);
		}
	}
 return kids
};

kidsWithCandies([4, 2, 1, 1, 2], 1);
kidsWithCandies([12, 1, 12], 10);
