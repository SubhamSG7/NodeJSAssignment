//finding max among 3
function getMax(a,b,c){
    let max=(a>b)?((a>c)?a:c):((b>c)?b:c)
    console.log(max);
}

getMax(80,60,40)

// finding min among 3
function getMin(a,b,c){
    let min=(a<b)?((a<c)?a:c):((b<c)?b:c);
    console.log(min);
}
getMin(10,20,15)