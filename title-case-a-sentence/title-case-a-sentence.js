/**
 * @func titleCase
 * returns the first letter of each word capitalized
 * @param {String} str
 * @returns {String}
 **/
function titleCase(str) {
	//converts the string to lowercase and splits it into an array
  var splittedString = str.toLowerCase().split(" ");
  for (var i = 0; i <  splittedString.length; i++){
  	//capitalize the first letter of each word and leaves the rest letters in lowercase
     splittedString[i] =  splittedString[i].charAt(0).toUpperCase() +  splittedString[i].slice(1);
  }
  //joins the strings 
  return  splittedString.join(" ");
}

titleCase("I'm a little tea pot");