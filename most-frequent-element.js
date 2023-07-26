const mostFrequentNumber = (numbers) =>{
    const arraySize = numbers.length; 
    let frequency = new Array(10).fill(0);

    for(let i = 0; i<arraySize; i++){
        frequency[numbers[i]]++;
    }

    /*
    Checks each element in the frequency array and if the value of the element 
    at mostFrequent index is less than the current element, 
    then mostFrequent is updated to hold the currentIndex. 
    */
    const mostFrequent = frequency.reduce((mostFrequent, currentCount, currentIndex)=> frequency[mostFrequent] < currentCount ? currentIndex : mostFrequent, 0)
    return mostFrequent;
}
const numbers = [3, 4, 4, 4, 3, 3, 1, 4, 5];
console.log("Most frequent number in the array:",mostFrequentNumber(numbers));
