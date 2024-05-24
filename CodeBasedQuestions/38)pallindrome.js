function isPalindrome(number) {
    const originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return originalNumber === reversedNumber;
}

function getUserInput() {
    const numbers = [];
    let count = 0;

    while (count < 3) {
        const input = prompt(`Enter number ${count + 1}:`);
        const num = parseInt(input);
        
        if (!isNaN(num)) {
            numbers.push(num);
            count++;
        } else {
            console.log('Invalid input. Please enter a valid number.');
        }
    }

    return numbers;
}

function checkPalindromes(numbers) {
    numbers.forEach(number => {
        if (isPalindrome(number)) {
            console.log(`${number} is a palindrome.`);
        } else {
            console.log(`${number} is not a palindrome.`);
        }
    });
}

// Main execution
const numbers = getUserInput();
checkPalindromes(numbers);
