// type use korle:

type Add1 = (num1: number, num2: number) => number;

const add1: Add1 = (num1, num2) => num1 + num2;

interface Add2 {
   (num1: number, num2: number): number;
}

const add2: Add2 = (num1, num2) => num1 + num2;
