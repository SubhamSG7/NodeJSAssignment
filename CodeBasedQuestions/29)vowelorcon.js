function checkLetter(letter){
    letter=letter.toLowerCase();
    switch(letter){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log(`${letter} is Vowel`);    // checking if the data is vowel
            break;
        default:
            if(letter>="a" && letter<="z"){
                console.log(`${letter} is Consonant`);   // checking if the letter is consonant
            }
            else console.log(`Invalid Input`);   // if it invalid char
    }
}
checkLetter("b")