function wordCount(text) {
    // Convert the text to lowercase to ensure case-insensitivity
    text = text.toLowerCase();

    // Split the text into words using spaces
    const words = text.split(" ");

    // Create a Map to store the word counts
    const wordCounts = new Map();

    // Iterate through the words and count their occurrences
    words.forEach(word => {
        // Increment the count if the word already exists in the Map
        if (wordCounts.has(word)) {
            wordCounts.set(word, wordCounts.get(word) + 1);
        } else {
            // Initialize the count to 1 for a new word
            wordCounts.set(word, 1);
        }
    });

    return wordCounts;
}

// Example usage
const inputText = "This is a test This is only a test";
const result = wordCount(inputText);

// Print the result
result.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});


