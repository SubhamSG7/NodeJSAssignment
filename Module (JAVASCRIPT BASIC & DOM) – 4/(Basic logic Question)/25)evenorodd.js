function eveorodd(number){
     // %2 will always give me the reminder even number always gives 0 as reminder
    (number%2===0)?console.log(`${number} is even`):console.log(`${number} is odd`);  
}

let number=3;
eveorodd(number)