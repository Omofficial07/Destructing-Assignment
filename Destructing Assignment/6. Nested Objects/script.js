function extractNameAndStreet(person) {
    // Destructure to extract name and street from the nested address object
    const { name, address: { street } } = person;

    // Return an object with the extracted properties
    return { name, street };
}

// Example usage
const person = {
    name: "Ganesh",
    age: 30,
    address: {
        street: 'B6, Block C , Industrial Area.',
        city: 'sector 65, Noida',
        state: 'Uttar Pradesh',
        zip: '270000'
    }
};


const result = extractNameAndStreet(person);
console.log(result); 

//Output - { name: 'Ganesh', street: 'B6, Block C , Industrial Area.' }