/*
Given a string, write a function to check if it is a permutation of
a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A
permutation is a rearrangement of letters. The palindrome does not need to be limited to just
dictionary words.

No debe de haber más de una letra que tenga conteo de más de un
número impara que sea un palíndrome,
*/

function isPermutationOfPalindrome(phrase) {
  let hash = {};
  let foundOdd = false; 
  
  hash = createHash(phrase);
  console.log(hash);
  
  // Count the number of characteres, we should not have
  // more than 1 odd number (numero impar)
  for(let prop in hash) {
   if(hash[prop] % 2 !== 0) {
     if(foundOdd) {
       return false;
      } else {
       foundOdd = true;
      }
    }
  }
  return true;
}

// Count the numbers of letters
function createHash(phrase) {
  let hash = {};
  for(let i = 0; i < phrase.length; i++) {
     if(isLetter(phrase[i])) {
       if(phrase[i] in hash) {
         hash[phrase[i]]++;
        } else {
         hash[phrase[i]] = 1;
        }
      }
    }
  
  return hash;
}

function isLetter(character) {
  return character >= 'a' && character <= 'z'
}

phrase = "tact coa";
console.log(isPermutationOfPalindrome(phrase));