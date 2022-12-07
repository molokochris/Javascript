function reverseArrayInPlace(array) {
    let index = 0, i = (array.length) / 2;
    let tHand;
    let down = array.length - 1;

    while (index < i) {
        tHand = array[index];
        array[index] = array[down];
        array[down] = tHand;

        down--;
        index++;
    }
    return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9]));