/**
 * @func largestOfFour
 * returns the largest number in each array
 * @param {Array} arr
 * @return {Array}
 **/
 
function largestOfFour(arr) {
	//create an empty array to store all the largest numbers
 var largestArr = [];
 for (var i = 0; i < arr.length; i++){
 	//create variable to hold the the initial largest number
 	var largestNum = 0;
 	for (var j = 0; j < arr[i].length; j++){
 		//sets the largest number in each array
 		if ( arr[i][j] > largestNum){
 			largestNum = arr[i][j];
 		}
 	}
 	//insert each largest number into an array
 	largestArr.push(largestNum);
 }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

