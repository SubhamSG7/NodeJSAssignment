function daysUntilNextChristmas() {
    // Get the current date
    const today = new Date();
    
    // Get the current year
    const currentYear = today.getFullYear();
    
    // Create a date object for this year's Christmas
    let christmas = new Date(currentYear, 11, 25); // Month is 0-indexed (11 is December)
  
    // If today's date is after this year's Christmas, calculate for next year's Christmas
    if (today > christmas) {
      christmas = new Date(currentYear + 1, 11, 25);
    }
  
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = christmas - today;
    
    // Convert milliseconds to days
    const daysLeft = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    
    return daysLeft;
  }
  
  // Example usage
  const daysLeft = daysUntilNextChristmas();
  console.log(`There are ${daysLeft} days left until next Christmas.`);
  