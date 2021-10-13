function numberToTime(number) {
  let  hours = Math.floor(number / 60);
  let  minutes = Math.floor(number % 60);
  if (hours === 0 && minutes === 0) return `${hours} hours, ${minutes} minutes`;
  if (hours === 1 && minutes === 1) return `${hours} hour, ${minutes} minute`;
  if (hours > 1 && minutes > 1) return `${hours} hours, ${minutes} minutes`;
  if (hours > 1 && minutes === 0) return `${hours} hours, ${minutes} minutes`;
  if (hours === 0 && minutes > 1) return `${hours} hours, ${minutes} minutes`;
  if (hours > 1 && minutes === 1) return `${hours} hours, ${minutes} minute`;
  if (hours === 1 && minutes >=0) return `${hours} hour, ${minutes} minutes`;
  if (hours >= 0 && minutes === 1) return `${hours} hours, ${minutes} minute`;
}
console.log(numberToTime(0));
console.log(numberToTime(30));
console.log(numberToTime(500));
