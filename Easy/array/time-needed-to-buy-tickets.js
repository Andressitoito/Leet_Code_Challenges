/* There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.

You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].

Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.

Return the time taken for the person at position k (0-indexed) to finish buying tickets. */
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
	let time = 0;

	let keep = true;

	while (keep) {
		for (let i = 0; i < tickets.length; i++) {
			const ticket = tickets[i];

			if (i === k && ticket === 1) {
				time++;
				keep = false;
				break;
			} else {
				if (ticket > 0) {
					tickets[i] = ticket - 1;
					time++;
				}
			}
		}
	}

	console.log("time ", time);
	return time;
};

// timeRequiredToBuy([2, 3, 2], 2);
timeRequiredToBuy([5, 1, 1, 1], 0);
timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3); // 154

// const obj = {
//  A: 1,
//  B: 2,
// };

// for (const letter in obj) {

//  if (obj[letter] > 1) {
//   console.log("letter ", letter)

//  }

// }
