/*
Implement a method to perform basic string compression using the counts of
repeated characters. For example, the string aabcccccaaa would become
a2blc5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string.
*/

function compression(str){
  var count = 1;
  var result = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] !== str[i+1]){
      result += str[i] + count;
      count = 1;
    }else{
      count++;
    }
  }
  return result;
}

str = 'aabcccccaaa';
console.log(compression(str));