function farenToCelc(faren){
    let celcius=(5/9)*(faren-32);
    return celcius;
}

let faren=30; // value of farenheit
console.log(farenToCelc(faren))