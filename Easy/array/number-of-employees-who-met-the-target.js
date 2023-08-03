/* There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

The company requires each employee to work for at least target hours.

You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

Return the integer denoting the number of employees who worked at least target hours. */
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
	let employee = 0;

	for (let i = 0; i < hours.length; i++) {
		hours[i] >= target && employee++;
	}

	console.log(employee);

	return employee;
};

numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2);
