function arrayToList(array) {
    let i = 0, index = array.length - 1;
    let list = {};

    while (i < array.length) {
        list = {
            value: array[index],
            rest: list
        };

        if (i == 0) list.rest = null;

        index--;
        i++;
    }
    return list;
}

function prepend(x, list) {

    for (node = list; node; node.rest) {
        
    }
    return list;
}

console.log(arrayToList([1, 2, 3]));



/*
{value: 1, rest: {…}}
    rest:
        rest:
            rest: null
            value: 3
            __proto__: Object
        value: 2
        __proto__: Object
    value: 1
    __proto__: Object 
*/