function celsiusToFahrenheit (celsius){
    var x = celsius;
    var fahrenheit = x * 9/5 + 32;
   
    return fahrenheit;
}
console.log(Math.floor( celsiusToFahrenheit(100)));


//second function
function fahrenheitTocelsius(fahren){
    y = fahren
    var celsius = (y -32) * 5/9;
    return celsius
}console.log(Math.floor(fahrenheitTocelsius(70)));
