function removeDuplicates(arr) {
    // Use a Set to store only unique elements
    return new Set(arr);
}

// Example usage
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = removeDuplicates(inputArray);

console.log(uniqueElements); // Output: Set { 1, 2, 3, 4, 5 }
