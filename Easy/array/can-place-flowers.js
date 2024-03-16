/* You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise. */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	if (n === 0) {
		return true;
	}

	if (flowerbed.length === 1) {
		if (flowerbed[0] === 1) {
			return false;
		} else {
			return true;
		}
	}

	const detector = [0, flowerbed[0], flowerbed[1]];

	for (let i = 0; i < flowerbed.length; i++) {
		const actual = flowerbed[i];

		detector[1] = actual;

		if (detector[0] === 0 && detector[1] === 0 && detector[2] === 0) {
			n -= 1;

			if (n === 0) {
				break;
			}

			detector[0] = 1;
			detector[1] = flowerbed[i + 1];
			if (flowerbed[i + 2] === undefined) {
				detector[2] = 0;
			} else {
				detector[2] = flowerbed[i + 2];
			}

			continue;
		}

		detector[0] = actual;
		detector[1] = flowerbed[i + 1];
		if (flowerbed[i + 2] === undefined) {
			detector[2] = 0;
		} else {
			detector[2] = flowerbed[i + 2];
		}
	}

	if (n === 0) {
		console.log("/////         TRUEEEEE ", n);
		return true;
	} else {
		console.log("/////         FALSEEEEEE ", n);
		return false;
	}
};

canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2);
