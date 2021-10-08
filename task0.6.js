function maximum(num1,num2,num3) {
  let max = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max){
     max = arguments[i];
    }
  }
  return max;
}
console.log(maximum(30, 90, 9, 100,22,130));
