ffunction commonletters(str1, str2) {
    var intersection = "";
    var strarr1 = str1.toLowerCase().split('');
    var strarr2 = str2.toLowerCase().split('');

    for (let letter of strarr1)
            if (strarr2.includes(letter)) intersection += letter +',';
    return intersection
    .split(',') 
    .filter(function(item,pos,self){
    return self.indexOf(item) == pos;
     })
    .join(',')
    .replace(/,(\s+)?$/, '.');
}

console.log(commonletters('houses', 'computers'));
