function areaOfTriangle( x ,y,z){
     let  s = (x + y+z)/2
     let Area =  Math.sqrt(s*((s-x)*(s-y)*(s-z)));
        console.log(Area);
    }
areaOfTriangle(10,7,11);
