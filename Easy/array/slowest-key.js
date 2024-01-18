/* A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.

You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.

The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].

Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.

Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses. */
/**
	* @param {number[]} releaseTimes
	* @param {string} keysPressed
	* @return {character}
	*/
var slowestKey = function (releaseTimes, keysPressed) {
	let slowest = [releaseTimes[0], keysPressed[0]];

	const data = [];

	for (let i = 0; i < releaseTimes.length; i++) {
		const times = releaseTimes[i];

		if (i === 0) {
			data.push([releaseTimes[0], keysPressed[i]]);

			continue;
		}

		const time = releaseTimes[i] - releaseTimes[i - 1];
	data.push([time, keysPressed[i]]);

		if (time === slowest[0]) {
			if (keysPressed[i] < slowest[1]) {
			}

			if (keysPressed[i] >= slowest[1]) {
				slowest[1] = keysPressed[i];
			}
		} else if (time >= slowest[0]) {
			slowest[0] = time;
			slowest[1] = keysPressed[i];
		}
	}

	console.log("slowest ", slowest[1])

	return slowest[1];
};

slowestKey([9, 29, 49, 50], 'cbcd')
