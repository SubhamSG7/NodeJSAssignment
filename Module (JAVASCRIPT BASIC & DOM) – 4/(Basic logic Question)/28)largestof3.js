function largest(a,b,c){
    let max=(a>b)?((a>c)?a:c):((b>c)?b:c);   // using ternary operator
    console.log(max);
}
largest(100,205,25);
console.log(Math.max(30,20,40));   // using Math method


function large(a,b,c){         // using if else statement
    if(a>b&&a>b){
        console.log(a);
    }
    else if(b>c && b>a){
        console.log(b);
    }
    else console.log(c);
}
large(20,40,50)

