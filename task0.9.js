function findvowel(word) {
  var found = "";
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
 
  for (var i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      found += word[i];
      if (word.length - 1 !== i) found += ',';
    }
  }
  return found
}

console.log(findvowel('slindile'));