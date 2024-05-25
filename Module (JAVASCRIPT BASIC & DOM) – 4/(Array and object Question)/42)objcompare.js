function deepEqual(obj1, obj2) {
    // Check if both values are strictly equal
    if (obj1 === obj2) {
      return true;
    }
  
    // Check if both values are objects and not null
    if (obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false;
    }
  
    // Get the keys of both objects
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
  
    // Check if common keys have equal values
    for (let key of keys1) {
      if (keys2.includes(key) && !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    for (let key of keys2) {
      if (keys1.includes(key) && !deepEqual(obj2[key], obj1[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  const objA = { a: 1, b: { c: 3 }, d: 4 };
  const objB = { a: 1, b: { c: 3 }, e: 5 };
  const objC = { a: 1, b: { c: 4 } };
  
  console.log(deepEqual(objA, objB)); // true, because common keys (a, b) have the same values
  console.log(deepEqual(objA, objC)); // false, because common key b has different values
  