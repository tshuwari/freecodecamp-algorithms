/**
 * @function factorialize
 * returns the factorial of a number
 * @param{Number} num
 * @returns {Number} 
 **/
 
function factorialize(num) {
	if (num === 0){
		return 1;
	}
	//use recursion to factorialize
	num = num * factorialize(num - 1);	

  return num;
}

factorialize(5);
