/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
*/
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	let sorted = salary.sort(minMax);

	sorted.pop();
	sorted.shift();

	let sumSalaries = 0;
	let salariesToDivide = 0;

	sorted.forEach((salary) => {
		sumSalaries += salary;
		salariesToDivide++;
	});

	let result = sumSalaries / salariesToDivide;

	return result;
};

function minMax(a, b) {
	return a - b;
}