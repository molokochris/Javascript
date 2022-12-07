/*
 this is the 7 day log entries showing my niece's activities
*/

let journal = [
    {
        activities: ["watch cartoons", "play around for hours",
            "eat", "bathed", "play music"],
        sleepEarly: true},
    {
        activities: ["woke up early", "bathed", "went to school",
             "watched cartoons", "homework"],
        sleepEarly: true},
    {
        activities: ["watch cartoons", "play around for hours",
            "eat", "bathed", "play around for hours", "dance to music"],
        sleepEarly: false},
    {
        activities: ["watch cartoons", "play around for hours", "candies",
            "eat", "bathed", "play around for hours"],
        sleepEarly: false},
    {
        activities: ["woke up early", "bathed", "went to school", "watched cartoons",
            "play around for hours", "homework", "snacks"],
        sleepEarly: true},
    {
        activities: ["watch cartoons", "play around for hours",
            "eat", "play around for hours", "go out", "homework", "candies"],
        sleepEarly: false},
];

//Adding entries into the journal
//Well, my last entry

function addEntry(activities, sleepEarly) {
    journal.push({activities, sleepEarly});
}

addEntry(["Woke up early", "Walk around", "Eat snacks",
    "candies", "Shops", "watch cartoons", "play around for hours", "candies",
    "eat", "bathed", "play around for hours", "church", "read"], true);

console.log(journal);

//Now that i made entries for 7 days, i want to use statistics to find the correlation
//I'm going to use the phi table to find the correlation

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
            (n01 + n11) * (n00 + n10));
}

function tableFor(activity, journal) {
    let table = [0, 0, 0, 0];
    for (let entry of journal) {
        let index = 0;
        if (entry.activities.includes(activity)) index++;
        if (entry.sleepEarly) index +=2;
        table[index]++;
    }
    return table;
}
console.log(tableFor("play around for hours", journal));
console.log(phi([0, 3, 1, 3]));

/*
We're now computing the correlation ffor each and every activity that occurs in the data set
We first find the activities in the journal, find those that are already available
and add them in the activities array if they dont already exist.
*/

function journalActivities(journal) {
    let activities = [];
    for (let entry of journal) {
        for (let activity of entry.activities) {
            if (!activities.includes(activity)) 
            activities.push(activity);
        }
    }
    return activities;
}

console.log(journalActivities(journal));

//We then use that journalActivities function to get the correlations of the activities to early sleeping

for (let activity of journalActivities(journal)) {
    console.log(activity + ":", phi(tableFor(activity, journal)));
}

console.log("\n");

//we now filter the results to find which have a correlation > 0.1 && < -0.1

for (let activity of journalActivities(journal)) {
    let correlation = phi(tableFor(activity, journal));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(activity + ":", correlation);
    }
}

console.log("\n");

