/* You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A". */
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
	const array_jewels = jewels.split("");
	const array_stones = stones.split("");

	let jewels_quantity = 0;

	for (let i = 0; i < array_jewels.length; i++) {
		const jewel_arr = array_stones.filter((stone) => stone === array_jewels[i]);

		const jewel_quantity = jewel_arr.length;

		jewels_quantity = jewels_quantity + jewel_quantity;
	}

	return jewels_quantity;
};

numJewelsInStoness("aA", "aAAbbbb");
