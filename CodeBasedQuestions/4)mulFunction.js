function mul(...args1) {
    // Inner function to handle additional arguments
    function inner(...args2) {
        // Combine all arguments from previous calls and current call
        const allArgs = [...args1, ...args2];

        // Check if all arguments are numbers
        const allNumbers = allArgs.every(arg => typeof arg === 'number');

        if (!allNumbers) {
            throw new Error("All arguments must be numbers");
        }

        // If any argument is an array, return another function for currying
        if (args2.length > 0) {
            return mul(...allArgs);
        }

        // If no additional arguments, calculate the product
        return allArgs.reduce((acc, val) => acc * val, 1);
    }

    return inner();
}

// Usage Examples
console.log(mul(2)(3)(4)); // 24
console.log(mul(2, 3, 4)); // 24
console.log(mul(2)(3, 4)); // 24
console.log(mul(2, 3)(4)); // 24
