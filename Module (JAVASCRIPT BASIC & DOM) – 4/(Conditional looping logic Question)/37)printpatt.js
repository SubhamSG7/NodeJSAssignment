// Q)Use console.log() and escape characters to print the following pattern in JS?
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
for(i=1;i<=5;i++){
    console.log(`${i} 1 ${i} ${i*i} ${i*i*i}`);
}

// 1
// 1 0
// 1 0 1
// 1 0 1 0 
// 1 0 1 0 1 

for(i=1;i<=5;i++){
    let line=""
    for(j=1;j<=i;j++){
        line+=(j%2===1?"1":"0")
    }
    console.log(line);
}


// A 
// B C
// D E F
// G H I J 
// K L M N O

let currentcharCode=65;

for(let i=1;i<=5;i++){
    let line="";
    for(let j=1;j<=i;j++){
        line+=String.fromCharCode(currentcharCode)+" ";
        currentcharCode++
    }
    console.log(line);
}

// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
for(i=1;i<=5;i++){
    let start="";
    for(j=1;j<=i;j++){
        start+=j+" ";
    }
    console.log(start);
}

// *
// * *
// * * *
// * * * *
// * * * * *
for(i=1;i<=5;i++){
    let str="";
    for(j=1;j<=i;j++){
        str+="*"+" "
    }
    console.log(str);
}