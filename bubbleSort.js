// The algorithm

const bubbleSort = function (numbers) {
    const length = numbers.length;

    for (let loop = 0; loop < length; loop++) {
        for (let position = 0; position < length; position++) {
            if (numbers[position] > numbers[position + 1]) {
                //swap
                const smallerNumber = numbers[position + 1];
                numbers[position + 1] = numbers[position];
                numbers[position] = smallerNumber;
            }
        }
    }
    return numbers;
}


// Testing

let testArray = [42, 65, 11, 17, 35];

console.log("Sorted:", bubbleSort(testArray));