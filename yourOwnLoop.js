/* A higher-order function 'loop' that function something like 'for loop statement'
1. It takes a:  - value,
                - a test function,
                - an update function, and
                - a body function
2. Each iteration, 
    (a) it first takes the test function on the current loop value and stops if it returns false
    (b) it calls the body function, giving it the current value
    (c) it calls the update function, to create a new value
    (d) starts from the beginning
*/

function loop(value, test, updater, body) {
    let currentValue = value;

    while (test(currentValue)) {
        body(currentValue);
        currentValue = updater(currentValue);
    }
}


loop(5, i => i > 0, n => n - 1, alert);