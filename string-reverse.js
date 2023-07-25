const reverseString = (inputString) => {
    let reversedString = '';
    for(let i = inputString.length - 1; i>=0; i-- )
    {
        reversedString+=inputString[i];
    }
    return reversedString;
}

const inputString = "&^$5"; 
console.log(reverseString(inputString));