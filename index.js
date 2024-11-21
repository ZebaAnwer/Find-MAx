// 1. reverseString Function
function reverseString(str) {
    // Split the string into an array of characters
    const charArray = str.split('');
  
    // Reverse the array
    const reversedArray = charArray.reverse();
  
    // Join the reversed array back into a string
    const reversedString = reversedArray.join('');
  
    return reversedString;
  }
  
  // 2. findMax Function
  function findMax(numbers) {
    // Initialize a variable to store the maximum number
    let max = numbers[0];
  
    // Iterate through the array to find the maximum
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  // Example usage
  const reversed = reverseString("hello");
  console.log(reversed); // Output: "olleh"
  
  const largestNumber = findMax([10, 5, 20, 15, 8]);
  console.log(largestNumber); // Output: 20
