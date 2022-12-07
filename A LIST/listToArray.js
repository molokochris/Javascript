function listToArray (list) {
    let alist = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: {
                    value: 4,
                    rest: {
                        value: 5,
                        rest: null
                    }
                }
            }
        }
    };
    let array = [], i = 1;
    for (let node = list; node; node = node.rest) {
        array.push(i);
        i++;
    }
    

    return array;
}

console.log(listToArray({
    value: 1,rest: {value: 2,rest: {value: 3,rest: {value: 4,rest: {value: 5,rest: null}}}}}));