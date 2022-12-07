function sum(array) {
    let sumNum = 0;
    for (let i = 0; i <array.length; i++) {
        sumNum += array[i];
    }
    return sumNum;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));