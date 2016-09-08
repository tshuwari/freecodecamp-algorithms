/**@func palindrome
 * returns true for each string that is a palindrome, otherwise returns false
 * @param {String} str
 * @returns {Boolean} true or false
 **/
 
function palindrome(str) {
	//removes all alpha-numeric characters and changes uppercase to lower case
var	checkedString = str.replace(/[\W_]/g, "").toLowerCase();

//splits the string, reverse it and join
var joinedString = checkedString.split("").reverse().join("");

//checks if reversed string is a palindrome
if (joinedString === checkedString) {
  return true;
}
return false;
}
palindrome("never");