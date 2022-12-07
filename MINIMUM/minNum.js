/*
    <h1>MINIMUM</h1>
    <p>
        The previous chapter introduced the standard function Math.min that returns
        its smallest argument. We can build something like that now. Write a function
        min that takes two arguments and returns their minimum.
        <h3>Solution</h3>
        <code>
            function min(a,b) {
            if (a < b) return a; 
            else return b; 
            }
        </code>
    </p>
*/
        function min(a,b) {
            if (a < b)
            return a;
            else
            return b;
        }
        console.log(min(10,3));
