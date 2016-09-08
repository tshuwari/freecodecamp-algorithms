/**
 * @func reverseString
 * reverses a string
 * @param {String} str
 * @returns {String} str
 */
function reverseString(str) {
	//split strng into array
	var splittedString = str.split("");
	//reverses the splitted string
	var reversedArray = splittedString.reverse();
	//joins the splitted string
	var joinedArray = reversedArray.join("");
	return joinedArray;
}

reverseString("hello");
