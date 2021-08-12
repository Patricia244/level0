function  converTime(number){
var hours = Math.floor(number / 60); 
var minutes = Math.floor(number % 60);

return hours + ":" + minutes;
}
console.log(converTime(133));