
        let size = 8, x = 0;

        while (size > 0) {
            while (x < 4) {
                if ((size % 2) != 0) {
                    console.log("#");
                    console.log(" ");
                } else {
                    console.log(" ");
                    console.log("#");
                }
                x++;
            }
            console.log ("\n");
            x = 0;
            size--;
        }
