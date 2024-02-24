/* Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number. */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);

	let count = 0;

	for (let i = 0; i < g.length; i++) {
		const greed = g[i];

		for (let j = 0; j < s.length; j++) {
			const cookie = s[j];
			if (cookie >= greed) {
				count++;

				s.splice(j, 1);
				break;
			}
		}
	}

	console.log("content childs ", count);
	return count;
};
