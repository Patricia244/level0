function findvowel(word) {
  var found = '';
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  for (var i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      found += word[i];
      if (word.length - 1 !== i) found +=  ',';
    }
  }
  return found.toLowerCase()
      .split(',') 
      .filter(function(item,pos,self){
      return self.indexOf(item) == pos;
      })
      .join(',');
      
}

console.log(findvowel('Umumzi'));
