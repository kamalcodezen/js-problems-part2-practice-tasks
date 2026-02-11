// Task -1:
// Find the lowest number in the array below.


const lowest2 = [167, 190, 120, 165, 137];

let newLowest = Math.min(...lowest2);
console.log(newLowest);

console.log(`---------------------`);

function lowestNumber(numbers) {
    let lowestNum = numbers[0];
    for (let number of numbers) {
        if (number < lowestNum) {
            lowestNum = number;
        }
    }
    return lowestNum;
}

console.log(lowestNumber(lowest2));
