/*
Implement an algorithm to determine if a string has all unique characters. What
if you cannot use additional data structures?
*/

function isUniqueChars(str){
  var alphabetArray = new Array(26).fill(false);
  var index = 0;
  for(var i = 0; i < str.length; i++){
    index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if(!alphabetArray[index]){
      alphabetArray[index] = true;
    }else{
      return false;
    }
  }
  return true;
}

str = "abcdefz";
console.log(isUniqueChars(str));