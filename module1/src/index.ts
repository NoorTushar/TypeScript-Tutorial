// const arrOfNumbers: number[] = [1, 3, 5];

// const arrOfStrings: string[] = arrOfNumbers.map((element: number): string =>
//    element.toString()
// );

// console.log(arrOfStrings); // [ '1', '3', '5' ]

type AreaNumber = {
   height: number;
   width: number;
};

type Height = AreaNumber["height"];

// type AreaString = {
//    height: string;
//    width: string;
// };

type AreaString<T> = {
   [index in keyof T]: T[index];
};

const area1: AreaString<{ height: number; width: string }> = {
   height: 100,
   width: "50",
};
