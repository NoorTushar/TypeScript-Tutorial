"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2 = 5) => {
    return num1 + num2;
};
const poorPerson = {
    name: "Nike",
    balance: 0,
    addBalance(balance) {
        this.balance += balance;
        return `My new balance is ${this.balance}`;
    },
};
poorPerson.addBalance(90);
console.log(poorPerson);
