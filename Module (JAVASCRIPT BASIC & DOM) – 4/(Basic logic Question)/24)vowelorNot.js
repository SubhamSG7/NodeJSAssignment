

function checkVowel(letter){
     letter=letter.toLowerCase();    // this will make the letter in lower case
    let vowels=["a","e","i","o","u"];
    if(vowels.includes(letter)) console.log(`letter ${letter} is Vowel`);  //includes will iterate through the loop to check weather letter is present in array or not
    else console.log(`letter ${letter} is not vowel`);

}
let letter="A";
checkVowel(letter);