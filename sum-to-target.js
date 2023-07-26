const sumToTarget = (numbers, target) => {
    const size = numbers.length;
    if (size == 0 || size == 1) return false;
    else {
        for (let i = 0; i < size - 1; i++) {
            if (numbers[i] > target) return false;
            else {
                let difference = target - numbers[i];          // Find the difference of the current element with target
                let secondIndex = numbers.indexOf(difference, i + 1);    // Find if the remaining number is in the array
                if (secondIndex > -1) return [i, secondIndex]; // Indices of numbers that add up to target
            }

        }
        return false;   // Array doesn't contain numbers that add up to target

    }

}

const numbers = [-3, -2, -1, 0, 1, 2, 3];
const target = -1;

const indices = sumToTarget(numbers, target);

if(indices) console.log(indices);
else console.log('No such numbers.')