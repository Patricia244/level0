function commonLetters(str1, str2) {
  let sameLetters = "";
  let strarr1 = str1.toLowerCase().split("");
  let strarr2 = str2.toLowerCase().split("");

  for (let letter of strarr1)
    if (strarr2.includes(letter)) sameLetters += letter + ",";
  return sameLetters
    .split(",")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join(",")
    .replace(/,(\s+)?$/, ".");
}

console.log(commonLetters("houses", "computers"));
