// A function to generate a random integer within a range and convert it to a character
const getChar = (min, max) => {
    const number = Math.floor(Math.random()*(max - min + 1)) + min;
    return String.fromCharCode(number);
}

// A function to randomly execute another function that generates a charcter 
const getRemainingChars = () =>{

    // Define an array of function calls, each generate a valid character
    const getCharArray = [ getChar(65, 90), getChar(97, 122), getChar(48, 57), getChar(33, 47), getChar(58, 64), getChar(91, 96) ];

    const size = getCharArray.length;
    // Generate a random index to make a function call
    const index = Math.floor(Math.random()*(size));
    const passwordChar = getCharArray[index];
    return passwordChar;
} 

// A function to create a password that contains:  uppercase, lowecase letter, number, special character.
const getPassword = (passwordLength) =>{
    let password = '';
    if(passwordLength < 4) return false;
    else{
        // Fulfil the required criteria for creating a password.
        password+=getChar(65, 90); // Include a uppercase character
        password+=getChar(97, 122); // Include a lowercase character
        password+=getChar(48, 57); // Include a number
        password+=getChar(33, 47); // Include a special character

        const remaining_char = passwordLength - 4;
        for(let i=1; i<=remaining_char; i++){
            password+=getRemainingChars();

        }
        return password;
    }
}
const passwordLength = 13;

const password = getPassword(passwordLength);

if(password) console.log(password);
else console.log('Cannot generate password below length 4.')