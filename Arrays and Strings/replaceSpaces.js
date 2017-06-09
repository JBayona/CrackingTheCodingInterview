/*
Write a method to replace all spaces in a string with '%20'. You may assume that the
string has sufficient space at the end of the string to hold the additional characters,
and that you are given the "true" length of the string. (Note: if implementing in Java,
please use a character array so that you can perform this operation in place.)
*/

function replaceSpaces(str){
  var result = '';
  var newLength = str.length + 1;
  var spaceCount = countSpaces(str);
  str = str.trim();
  for(var i = 0; i < str.length; i++){
    if(str[i] === ' '){
      if(spaceCount > 0){
        result += '%20';
        spaceCount -= 3;
      }
    }else{
      result += str[i];
    }
  }
  return result;
}

function countSpaces(str){
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === ' '){
      count++;
    }
  }
  return count;
}

str = "Mr John Smith    ";
console.log(replaceSpaces(str));