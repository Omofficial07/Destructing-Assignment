function extractElements(arr) {
    // Destructure the array to get the first, second, and last elements
    const [first, second, , ...rest] = arr;
    const last = arr[arr.length - 1];

    // Return an array with the first, second, and last elements
    return [first, second, last];
}

// Example usage
const inputArray = [1, 2, 3, 4, 5];
const result = extractElements(inputArray);

console.log(result); // Output: [1, 2, 5]
