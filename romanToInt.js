// We will be getting passed a string. The string will contain specific letters that represent Roman numerals. The string passed will not contain any special cases. The string passed will be uppercase. Don't have to take into account lower case values. No numbers, arrays or objects, just a string. The string passed will only be one word. The length of the word will be at least 1 character long but no longer than 15 characters. We are only concerned about going from roman numerals to numbers and not vice versa. 

// values

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

// IV = 4
// IX = 9
// XL = 40
// XC = 90
// CD = 400
// CM = 900

// Return the value that the roman numerals represent

var romanToInt = function(s) {
    // declare a variable to hold the total
    let sum = 0
    // take string and separate the elements
    let newS = s.split('')
    // go through each element and replace it with a value
    for (let i = 0; i <newS.length; i++) {
        if (newS[i] === "C" && newS[i+1] === "M") { sum += 900}
        else if (newS[i] === "C" && newS[i+1] === "D") {sum += 400}
        else if (newS[i] === "X" && newS[i+1] === "C") {sum += 90}
        else if (newS[i] === "X" && newS[i+1] === "L") {sum += 40}
        else if (newS[i] === "I" && newS[i+1] === "X") {sum += 9}
        else if (newS[i] === "I" && newS[i+1] === "V") {sum += 4}
        else if (newS[i] === "M" && newS[i-1] !== "C") {sum += 1000}
        else if (newS[i] === "D" && newS[i-1] !== "C") {sum += 500}
        else if (newS[i] === "C" && newS[i-1] !== "X") {sum += 100}
        else if (newS[i] === "L" && newS[i-1] !== "X") {sum += 50}
        else if (newS[i] === "X" && newS[i-1] !== "I") {sum += 10}
        else if (newS[i] === "V" && newS[i-1] !== "I") {sum += 5}
        else if (newS[i] === "I") {sum++}
        console.log(i)
        console.log(sum)
    }
    // // return the sum of all values 
    return sum

    //REFRACTOR IT

    // return newS.reduce( (pv, cv, i, newS ) => {
    //     if (newS[i] === "C" && newS[i+1] === "M") { cv += pv + 900}
    //     else if (newS[i] === "C" && newS[i+1] === "D") {cv += pv + 400}
    //     else if (newS[i] === "X" && newS[i+1] === "C") {cv += pv + 90}
    //     else if (newS[i] === "X" && newS[i+1] === "L") {cv += pv + 40}
    //     else if (newS[i] === "I" && newS[i+1] === "X") {cv += pv + 9}
    //     else if (newS[i] === "I" && newS[i+1] === "V") {cv += pv + 4}
    //     else if (newS[i] === "M" && newS[i-1] !== "C") {cv += pv + 1000}
    //     else if (newS[i] === "D" && newS[i-1] !== "C") {cv += pv + 500}
    //     else if (newS[i] === "C" && newS[i-1] !== "X") {cv += pv + 100}
    //     else if (newS[i] === "L" && newS[i-1] !== "X") {cv += pv + 50}
    //     else if (newS[i] === "X" && newS[i-1] !== "I") {cv += pv + 10}
    //     else if (newS[i] === "V" && newS[i-1] !== "I") {cv += pv + 5}
    //     else if (newS[i] === "I") {cv += pv++}
    // }  , 0 )
};

// console.log(romanToInt("III"), 3)
// console.log(romanToInt("LVIII"), 58)
// console.log(romanToInt("MCMXCIV"), 1994)
console.log(romanToInt("MCDLXXVI"), 1476)
