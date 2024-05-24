// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    // Check if base and height are positive numbers
    if (base > 0 && height > 0) {
      // Calculate the area using the formula
      let area = 0.5 * base * height;
      return area;
    } else {
      return 'Base and height must be positive numbers';
    }
  }
  
  // Example usage
  let base = 10; // Replace with the base of the triangle
  let height = 5; // Replace with the height of the triangle
  
  let area = calculateTriangleArea(base, height);
  console.log(`The area of the triangle with base ${base} and height ${height} is ${area}`);
  