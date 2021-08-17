function  numberToTime(number){
    var hours = Math.floor(number / 60); 
    var minutes = Math.floor(number % 60);
    if (hours > 1 & minutes > 1 ||hours ==0 || minutes ==0){
        return `${hours} hours, ${minutes} minutes`
    } if( hours<2 & minutes<2){
        return `${hours} hour, ${minutes} minute`
    }else if( hours> 1 & minutes<2){
         return `${hours} hours, ${minutes} minute`
    
    }
    else {
        return `${hours} hour, ${minutes} minutes`
    }
    
    }
    console.log(numberToTime(133));
    console.log(numberToTime(60));
    console.log(numberToTime(30));
