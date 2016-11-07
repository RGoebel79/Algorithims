# Algorithims


These are different solutions to problems I have solved over the course of learning JavaScript.



PairWise:

	Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

	If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

	For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Map the Debris:

	Return a new array that transforms the element's average altitude into their orbital periods.

	The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

	You can read about orbital periods on wikipedia.

	The values should be rounded to the nearest whole number. The body being orbited is Earth.
	
	The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Make a person:

	Fill in the object constructor with the following methods below:

	getFirstName()
	getLastName()
	getFullName()
	setFirstName(first)
	setLastName(last)
	setFullName(firstAndLast)
	Run the tests to see the expected output for each method.

	The methods that take an argument must accept only one argument and it has to be a string.

	These methods must be the only available means of interacting with the object.