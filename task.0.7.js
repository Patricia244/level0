function convertTemp(celsius){
    var x = celsius;
    var fahrenheit = x * 9/5 + 32;
   
    return fahrenheit;
}
console.log(Math.floor(convertTemp(100)));


//second function
function convertTemperature(fahren){
    y = fahren
    var celsius = (y -32) * 5/9;
    return celsius
}console.log(Math.floor(convertTemperature(70)));