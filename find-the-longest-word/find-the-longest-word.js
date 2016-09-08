/**
 * @func findLongestWord
 * returns the longest word in a String
 * @param {String} str
 * @return {String} str
 */
 
function findLongestWord(str) {
	
//splits string into array 
  var splittedStr = str.split(" ");
  var longest = 0;
  //loops through the array to find the maximum length 
  for (i = 0; i < splittedStr.length; i++){
  	if (splittedStr[i].length > longest){
  	longest = splittedStr[i].length;
  		}
  	 }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");