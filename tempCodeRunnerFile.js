const romanToNumber = (roman) => {
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
    const romanChar = roman[i];
    const value = romanSymbolToNumber[romanChar];
    const nextRomanChar = roman[i+1];
    const nextValue = roman[nextRomanChar];

    if(nextValue > value) number-=value;
    else number+=value;
}

return number;



