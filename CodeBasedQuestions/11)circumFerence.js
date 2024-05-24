function calculateRectanglePerimeter(length, width) {
    if (length > 0 && width > 0) {
      let perimeter = 2 * (length + width);
      return perimeter;
    } else {
      return 'Length and width must be positive numbers';
    }
  }
  
  // Example usage
  let length = 10; // Replace with the length of the rectangle
  let width = 5; // Replace with the width of the rectangle
  
  let perimeter = calculateRectanglePerimeter(length, width);
  console.log(`The perimeter of the rectangle with length ${length} and width ${width} is ${perimeter}`);
  