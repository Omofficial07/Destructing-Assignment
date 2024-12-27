function findMaxMin(arr) {
    // Use the spread operator to pass the array elements to Math.max and Math.min
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Return an object with the max and min values
    return { max, min };
}

// Example usage
const inputArray = [5, 2, 7, 1, 9];
const result = findMaxMin(inputArray);

console.log(result); // Output: { max: 9, min: 1 }
