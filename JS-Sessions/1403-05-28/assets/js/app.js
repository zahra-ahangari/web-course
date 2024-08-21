
const numbers = [];
console.log("Empty array: ", numbers);
console.log("Empty array length: ", numbers.length);


numbers[0] = 2;
numbers[1] = 4;
numbers[2] = 6;
numbers[3] = 8;
numbers[7] = 19;

console.log("Full array: ", numbers);
console.log("Full array length: ", numbers.length);

function sum(firstName, lastName) {
    return firstName + lastName;    
}

fullName = sum("Zahra", "Ahangari");
console.log("My nama is: ", fullName);

updatedNumbers = numbers.map((item) => {
    return item * 10;
});
console.log("Updated numbers: ", updatedNumbers);