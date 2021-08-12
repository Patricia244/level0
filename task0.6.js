function  maximum(x, y, z) {
   if (x > y & x >z ){
       return(x)
   }else if( y > x & y> z){
        return(y);

    }
   else{
       return(z)
   }
}
console.log(maximum(30, 90, 9));
