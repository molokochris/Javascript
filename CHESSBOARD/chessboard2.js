
        for (let size = 8; size > 0; size--) {
            for (let x = 0; x < 4; x++) {
                if ((size % 2) != 0) {
                    console.log("#");
                    console.log(" ");
                } else {
                    console.log(" ");
                    console.log("#");
                }
            }
            console.log("\n");
        }
