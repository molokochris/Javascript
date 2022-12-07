
        //Creating An Array
        let lisOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(lisOfNumbers[2]);

        //Some JS Properties
        console.log(lisOfNumbers.length);
        console.log(Math.max(lisOfNumbers[0], lisOfNumbers[9]));

        //JS Methods
        let me = "Chris";
        console.log(typeof me);
        console.log(typeof me.toUpperCase);
        console.log(me.toUpperCase());
        console.log(me.toLowerCase());

        lisOfNumbers.push(11);
        console.log(lisOfNumbers);
        lisOfNumbers.pop();
        console.log(lisOfNumbers);

        /*
        JS Objects
        
        Goal 01: Representation of a set of daily log entries to see what makes my niece
        sleep early some days and late on others

        Firstly to demostrate how we are going to create this logs, i will create
        an object to contain my niece's first day activities
        */

        let monday = {
            activities: ["woke up early", "watch cartoons", "play around for hours",
             "eat", "bathed", "play around for hours"],
            sleepEarly: false
        };
        console.log(monday.activities);
        console.log(monday.sleepEarly);
        
        //I think sleeping during the day contributes too
        monday.sleepDaylight = true;

        console.log(monday);
        console.log(monday.sleepDaylight);
        console.log("sleepDaylight" in monday);

        //But remembered she does'nt do that
        delete monday.sleepDaylight;
        console.log(monday.sleepDaylight);
        console.log(monday);
        console.log("sleepDaylight" in monday);

        console.log(Object.keys(monday));

        /*
        *thinking* what if i assign new properties to monday,
           ill and school(due to covid-19, they dont go to school everyday)
        */
        Object.assign(monday, {ill: false, school: false});
        console.log(monday);

        //maybe ill shouuld leave
        delete monday.ill;
        console.log(Object.keys(monday));
