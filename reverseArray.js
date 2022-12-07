function reverseArray(array) {
    let result = [], i = array.length;
    let count = 0;

    while (i > 0) {
        i--;
        result[count] = array[i];
        count++;
    }
    
    return result;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));