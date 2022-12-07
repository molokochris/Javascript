function range(start, end, step = 1) {
    if (step < 0) step = step * -1;
    let numbers = [];
    if (start <= end)
        for (let i = start; i <= end; i += step)
            numbers.push(i);
    else
        for (let i = start; i >= end; i -= step)
            numbers.push(i);

    return numbers;
}
console.log(range(50, 10, -5));