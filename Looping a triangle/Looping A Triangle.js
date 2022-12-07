/*
    <h2>This is a loop that makes seven calls to console.log 
        to output the following triangle:</h2>
    <p>
        #<br />
        ##<br />
        ###<br />
        ####<br />
        #####<br />
        ######<br />
        #######<br /></p>
*/
        let counter, i = 1, numH;

        for (counter = 0; counter < 7; counter++) {
            for (numH = 0; numH < i; numH++) {
                console.log("#");
            }
            i++;
            console.log("\n");
        }
