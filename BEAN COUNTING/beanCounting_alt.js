/*
    <h1>BEAN COUNTING</h1>
    <p>
        You can get the Nth character, or letter, from a string by writing "string"[N].
        The returned value will be a string containing only one character (for example,
        "b"). The first character has position 0, which causes the last one to be found at
        position string.length - 1. In other words, a two-character string has length
        2, and its characters have positions 0 and 1.<br />
        Write a function countBs that takes a string as its only argument and returns
        a number that indicates how many uppercase “B” characters there are in the
        string.<br />
        Next, write a function called countChar that behaves like countBs, except
        it takes a second argument that indicates the character that is to be counted
        (rather than counting only uppercase “B” characters). Rewrite countBs to
        make use of this new function.
        <h3>Solution:</h3>
        <code>
            <ol>
                <li>
                function countBs(string) {
                    let count = 0, numBs = 0;
                    while (count < string.length) {
                        if (string[count]=="B" )
                        numBs ++;
                        count++; 
                    } 
                    return numBs; 
                }
                </li>
                <li>
                    function countChar(string, char) {
                        let count = 0, numChars = 0;
                        while (count < string.length) { 
                            if (string[count]==char) 
                            numChars ++; 
                            count ++; 
                        } 
                        return numChars; 
                    }
                </li>
            </ol>
        </code>
    </p>
*/
        function countBs(string) {
            let count = 0, numBs = 0;
            while (count < string.length) {
                if (string[count] == "B")
                numBs ++;
                count++;
            }
            return numBs;
        }

        function countChar(string, char) {
            let count = 0, numChars = 0;
            while (count < string.length) {
                if (string[count] == char)
                numChars ++;
                count ++;
            }
            return numChars;
        }

        console.log(countChar("hello", "o"));
