/*
 Using the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays
*/

let arrayArray = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

let newArray = arrayArray.reduce((a, b) => a.concat(b));


//OR in function form:

function flattenArray(arrayArray) {
    return arrayArray.reduce((a, b) => a.concat(b));
}