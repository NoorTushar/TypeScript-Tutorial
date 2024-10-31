"use strict";
{
    //
    const user = {
        name: "Alice",
        age: 30,
        city: "New York",
    };
    // Destructure properties from the user object
    const { name: userName, age, city } = user;
    console.log(userName); // Output: Alice
    console.log(age); // Output: 30
    console.log(city); // Output: New York
    const employee = {
        id: 101,
        name: "Bob",
        position: "Developer",
        address: {
            city: "San Francisco",
            state: "CA",
            zip: "94103",
        },
    };
    const { name, address: { city: cityName, state }, } = employee;
    console.log(name, cityName, state); //Output: Bob San Francisco CA
    //
}
const footballers = ["messi", "ronaldo", "zidane", "beckham"];
const [, second, ...others] = footballers;
console.log(second); // messi
console.log(others);
