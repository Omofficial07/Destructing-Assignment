function swapValues(x, y) {
    // Swap values using destructuring assignment
    [x, y] = [y, x];
    return [x, y];
}

// Example usage
let x = 5;
let y = 10;

const swapped = swapValues(x, y);
console.log(swapped); // Output: [10, 5]
