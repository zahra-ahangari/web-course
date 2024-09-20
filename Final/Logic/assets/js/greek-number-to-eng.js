
/** 
 * javascript comment 
 * @Author: Zahra Ahangari 
 * @Date: 2024-09-20 23:21:50 
 * @Desc: Convert Greek numbers to English numbers
 */
function greekToEnglishNumbers(greekNumber) {
    const greekNumberSrc = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let result = 0;
    let prevValue = 0;

    for (let i = greekNumber.length - 1; i >= 0; i--) {
        const currentValue = greekNumberSrc[greekNumber[i]];
        if (currentValue >= prevValue) {
            result += currentValue;
        } else {
            result -= currentValue;
        }
        prevValue = currentValue;
    }
    return result;
}

/** 
 * javascript comment 
 * @Author: Zahra Ahangari 
 * @Date: 2024-09-20 23:32:15 
 * @Desc: Convert English numbers to Greek numbers
 */
function englishToGreekNumbers(englishNumber) {
    const greekKeyValues = new Map([
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], 
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], 
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ]);
    let result = '';

    for (let [symbol, value] of greekKeyValues) {
        while (englishNumber >= value) {
            result += symbol;
            englishNumber -= value;
        }
    }
    return result;
}

/** 
 * javascript comment 
 * @Author: Zahra Ahangari
 * @Date: 2024-09-20 23:33:53 
 * @Desc: Conver numbers from English to Greek and vise versa
 */
function numberConvertor(number, desLanguage){
    let result;
    if (desLanguage === "English"){
        result = greekToEnglishNumbers(number);
    }
    else if (desLanguage === "Greek"){
        result = englishToGreekNumbers(number);
    }
    else{
        console.log("Please enter the destination language!");
    }
    return result;
}


// Please sepcify your destination and input number using these two variables:
const desLanguage = "English";
const number = "LXXIV";

console.log(`Your number in ${desLanguage} is: `, numberConvertor(number, desLanguage));




