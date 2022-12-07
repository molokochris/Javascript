function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    } else {
        if ((typeof(value1)) && (typeof(value2)) == "object") {
            for (let properties of Object.keys(value1)) {
                if ((properties in value2) && (Object.keys(value1).length == (Object.keys(value2).length))) {
                   
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    } 
}

let object1 = {
    name: "Chris",
    age: 24,
    country: "South Africa"
};

let object2 = {
    name: "Chris",
    age: 24,
    country: "South Africa"
};

/*for (let property of Object.keys(object1)) {
    if ((property in object2) && (Object.keys(object1).length == (Object.keys(object2).length))) {
        console.log(property);
    } else {
        console.log("epic fail!!!");
    }
}*/

for (let property of Object.keys(object1)) {
    console.log(property);
}