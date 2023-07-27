const romanToNumber = (roman) => {
    // Define a mapping of roman units to integer numbers
    const romanSymbolToNumber = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }


let number = 0;
for(let i = 0; i<roman.length; i++)
{
    // Collect two adjacent characters in the string representing roman
    const romanChar = roman[i];
    const value = romanSymbolToNumber[romanChar];
    const nextRomanChar = roman[i+1];
    const nextValue = romanSymbolToNumber[nextRomanChar];

    // As for roman numbers, 
    /* 
    If symbols representing smaller digit is at the front, 
    they are subtracted from the bigger one follwing it to make the whole number.
    If symbols representing bigger digits are at the front, 
    the smaller ones following it will add to it to make the whole number in integer.
    
    */
    if(nextValue > value) number-=value;
    else number+=value;
}

return number;




}

console.log(romanToNumber('IV'));
console.log(romanToNumber('I'));
console.log(romanToNumber('XXI'));