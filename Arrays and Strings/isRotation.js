/*
Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, si and s2, write code to check Ifs2 is a rotation of si
using only onecalltoisSubstring (e.g., "waterbottLe" is a rotation of "erbottLewat").
*/

function isRotation(s1,s2){
  var s1s1 = '';
  if(s1.length === s2.length && s1.length > 0){
    s1s1 = s1 + s1;
    return s1s1.includes(s2);
  }
  return false;
}

s1 = 'waterbottle';
s2 = 'erbottlewat';
console.log(isRotation(s1,s2));