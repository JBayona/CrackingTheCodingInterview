/*
Implement an algorithm to determine if a string has all unique characters. What
if you cannot use additional data structures?
*/

function isUniqueChars(str){
  //Creamos un array con una posición por letra y llenamos todo el false
  var alphabetArray = new Array(26).fill(false);
  var index = 0;
  for(var i = 0; i < str.length; i++){
    //a = 0, b = 1, c = 2,...
    index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
	//Si no hemos encontrado el elemento, ponemos en true ya que lo hemos analizado
    if(!alphabetArray[index]){
      alphabetArray[index] = true;
    }else{ //Si ya estaba en true significa que ya lo encontramos y retornamos false ya que hay repetido
      return false;
    }
  }
  return true;
}

str = "abcdefz";
console.log(isUniqueChars(str));