/*
    <h1>RECURSION</h1>
    <p>
        We’ve seen that % (the remainder operator) can be used to test whether a
        number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
        another way to define whether a positive whole number is even or odd:
        <br>
        <ul>
            <li>Zero is even</li>
            <li>One is odd</li>
            <li>For any other number <i>N</i>, is the same as <i>N</i>-2</li>
        </ul>
    </p>
    <p>
        Define a recursive function isEven corresponding to this description. The
        function should accept a single parameter (a positive, whole number) and return
        a Boolean.
        Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
        way to fix this?
        <h3>Solution</h3>
        <code>
            function isEven(n) {
                if (n < 0) {
                    n *=-1;
                } 
                function check(current, target) { 
                    if (n==0 || current==target) { 
                        return true; 
                    } else if (current > target) {
                        return false;
                    } else {
                        return check((current) + 2, target);
                    }
                }
                return check(2, n);
            }
        </code>
    </p>
*/
        function isEven(n) {
            if (n < 0) {
                n *= -1;
            }
            function check(current, target) {
                if (n == 0 || current == target) {
                    return true;
                } else if (current > target) {
                    return false;
                } else {
                    return check((current) + 2, target);
                }
            }
            return check(2, n);
        }
        console.log(isEven(75));
