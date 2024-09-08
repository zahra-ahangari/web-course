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

console.log("--------Calculating BMI--------");

function CalculateBmi(height, weight) {
    return weight / (height * height);
}

bmi = CalculateBmi(1.7, 76);
console.log("bmi value: ", bmi);

if (bmi < 18.5) {
    console.log("Under: You're not OK ");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normal: You're normal");
} else if (bmi >= 25) {
    console.log("Over: You're far from OK");
} else {
    console.log("Something went worng :(");
}

array1 = [1, 2, 3, 4];
array2 = [1, 2, 3, 5, 6];

function MergeArrays(firstArray, secondArray) {
    mergedArray = firstArray.concat(secondArray);
    console.log("Merged arrays: ", mergedArray);

    distinctArray = [...new Set(mergedArray)];
    console.log("Distinct arrays: ", distinctArray);

    multiplied = distinctArray.map((item) => {
        return item * 2;
    });
    return multiplied;
}

result = MergeArrays(array1, array2);
console.log("Final result: ", result);
