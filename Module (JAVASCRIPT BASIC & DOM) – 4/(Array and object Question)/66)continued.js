// How can a page be forced to load another page in JavaScript?

// In JavaScript, you can force a page to load another page by using the window.location 
// object. This object provides various methods and properties that can be used to control 
// the URL of the browser. 

// Using window.location.href:

// This property sets or gets the entire URL of the current page. By setting it to a new URL, 
// the browser will navigate to that URL.
window.location.href = "https://www.example.com";

// Using window.location.assign():

// This method loads a new document at the specified URL.
window.location.assign("https://www.example.com");

