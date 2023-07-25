const reverseString = (inputString) => {
    let reversedString = '';
    for(let i = inputString.length - 1; i>=0; i-- )
    {
        reversedString+=inputString[i];
    }
}

const inputString = "Hello World"; 