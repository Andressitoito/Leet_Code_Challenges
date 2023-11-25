/* You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city. */
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
	let lastPath = paths[0][1];

	paths.shift();

	let keep = true;
	while (keep) {
		let dest = lastPath;
		for (let i = 0; i < paths.length; i++) {
			const path = paths[i];

			if (path[0] === lastPath) {
				lastPath = path[1];

				paths.splice(i, 1);
				break;
			}
		}

		if (lastPath == dest) {
			keep = false;
		}
	}

	console.log("lastPath ", lastPath);

	return lastPath;
};

destCity([
	["A", "B"],
	["C", "D"],
	["B", "E"],
	["E", "C"],
	["D", "F"],
]);
