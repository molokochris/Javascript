function iterate(array) {
    let i = 0, index = array.length - 1;
    let list = {};

    while (i < array.length) {
        list = {value: array[index],
                rest: list};

                if (i == 0) list.rest = null;

        index--;
        i++;
    }
    return list;
}

console.log(iterate([1, 2, 3, 4, 5]));