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

Friendly date ranges:

	Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

	The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

	Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

	Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

	If the range ends in the same month that it begins, do not display the ending year or month.

Inventory Update:

	Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 

	Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. 
	
	The returned inventory array should be in alphabetical order by item.

Exact Change:

	Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

	cid is a 2D array listing available currency.

	Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

	Otherwise, return change in coin and bills, sorted in highest to lowest order.

Symmetric Difference:

	Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

Validate US Phone Numbers:

	Return true if the passed string is a valid US phone number.

	The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

	555-555-5555
	(555)555-5555
	(555) 555-5555
	555 555 5555
	5555555555
	1 555 555 5555
	
	For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Two Sums:
	
	File: two_sums.js
	
	Given an array of integers, return indices of the two numbers such that they add up to a specific target.

	You may assume that each input would have exactly one solution.

	Example:
	Given nums = [2, 7, 11, 15], target = 9,

	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].

First Unique Character in a String

	File: first_unique.js

	Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

	Examples:

	s = "leetcode"
	return 0.

	s = "loveleetcode",
	return 2.

Search Input Position:

	File: search_insert.js

	Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

	You may assume no duplicates in the array.

	Here are few examples.
	[1,3,5,6], 5 > 2
	[1,3,5,6], 2 > 1
	[1,3,5,6], 7 > 4
	[1,3,5,6], 0 > 0
	Note: You may assume the string contain only lowercase letters.

Roman Numerals to Integer:

	file: roman_to_int.js
	
	Given a roman numeral, convert it to an integer.

	Input is guaranteed to be within the range from 1 to 3999.

Sort Colors:

	File: sort_colors.js

	Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

	Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

	Note:
	You are not allowed to use the library's sort function for this problem.
