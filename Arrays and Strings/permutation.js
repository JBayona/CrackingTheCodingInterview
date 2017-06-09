/*
Given two strings, write a method to decide if one is a permutation of the other
*/

/*Esta solución puede ser no tan óptima pero es clara, limpia y fácil
de entender*/
function permutation(s,t){
  if(s.length !== t.length){
    return false;
  }
  return sort(s) === sort(t);
}

function sort(word){
  return word.split('').sort().join('');
}

//Option 2
/*Contar los caracteres en ambas cadenas y comparar, para contar los
caracteres podemos usar un array o un hash*/
function permutation(s,t){
  var countS = countChars(s);
  var countT = countChars(t);
  
  for(var i = 0; i < countS.length; i++){
    if(countS[i] !== countT[i]){
      return false;
    }
  }
  return true;
}

function countChars(word){
  var array = new Array(26).fill(0);
  var index = 0;
  for(var i = 0; i < word.length; i++){
    index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
    array[index]++;
  }
  return array;
}

s = "dog";
t = "ogd";
console.log(permutation(s,t));