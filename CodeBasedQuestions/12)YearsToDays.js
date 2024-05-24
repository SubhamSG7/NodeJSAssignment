// Function to convert years to days
function convertYearsToDays(years) {
    const daysInYear = 365; 
    return years * daysInYear;
  }
  
  // Function to convert days to years
  function convertDaysToYears(days) {
    const daysInYear = 365; 
    return days / daysInYear;
  }
  
  // Example usage
  let years = 2; // Replace with the number of years you want to convert
  let days = 730; // Replace with the number of days you want to convert
  
  let daysFromYears = convertYearsToDays(years);
  console.log(`${years} years is approximately ${daysFromYears} days.`);
  
  let yearsFromDays = convertDaysToYears(days);
  console.log(`${days} days is approximately ${yearsFromDays.toFixed(2)} years.`);
  