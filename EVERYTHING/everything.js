/*Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.

Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.*/

let arrays = ["moloko", "moloko", "chris", "moloko", "moloko", "moloko", "moloko", "moloko", "moloko"];

function everyLoop(array, lookOut) {
    let count = 0;
    for (let element of array) {
        if (lookOut(element)) count++;
    }
    return (count == array.length) ? true : false;
}

function everySome(array, lookOut) {
    return (array.some(() => )) ? false : true;
}

console.log(every(arrays, n => n == "moloko"));