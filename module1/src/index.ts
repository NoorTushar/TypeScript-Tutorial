type Person = {
   name: string;
   age: number;
   contact: string;
   email?: string;
};

const person1: Person = {
   name: "Tushar",
   age: 18,
   contact: "0169999999",
};

const person2: Person = {
   name: "Mafia",
   age: 18,
   contact: "0169999999",
   email: "mafia@mafia.com",
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

type AddFn = (num1: number, num2: number) => number;

const addTwo: AddFn = (num1, num2) => num1 + num2;

console.log(addTwo(4, 5)); // output: 9
