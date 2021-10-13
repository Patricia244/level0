function commonLetters(str1, str2) {
  let sameLetters = "";
  let strArr1 = str1.toLowerCase().split("");
  let strArr2 = str2.toLowerCase().split("");

  for (let letter of strArr1)
    if (strArr2.includes(letter)) sameLetters += letter + ",";
  let char = sameLetters
    .split(",")
    .filter(function (item, pos, self) {
      return self.indexOf(item) === pos;
    })
    .join(",")
    .replace(/,(\s+)?$/, "");
  console.log(`Common letters: ${char}`);
}
commonLetters("houses", "computers");
