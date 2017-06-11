/*
Implement an function reverse which reverse a string, try to do it in place.
*/

//Option 1
  function reverseInPlace(str){
  var begin = 0;
  var end = str.length-1;
  var str = str.split('');
  var tmp = null;

  //Swap hasta que se cruzan los elementos
  while(begin < end){
    tmp = str[begin];
    str[begin++] = str[end];
    str[end--] = tmp;
  }
  return str.join('');
}

//Option 2 - ES6s
function reverseInPlace(str){
  var begin = 0;
  var end = str.length-1;
  var str = str.split('');
  var tmp = null;

  //Swap hasta que se cruzan los elementos
  while(begin < end){
    [str[begin], str[end]] = [str[end], str[begin]];
    begin++;
    end--;
  }
  return str.join('');
}

str = "jorge";
console.log(reverseInPlace(str));