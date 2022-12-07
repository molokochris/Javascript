function sum(array) {
    let sumNum = 0;
    for (let i = 0; i < array.length; i++) {
        sumNum += array[i];
    }
    return sumNum;
}

function range(start, end, step = 1) {
    if (step < 0) step = step * -1;
    let numbers = [];
    if (start <= end) for (let i = start; i <= end; i += step) numbers.push(i);
    else for (let i = start; i >= end; i -= step) numbers.push(i);
    return numbers;
}

console.log(sum(range(5, 2, -2)));