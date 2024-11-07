// Example 1: just bujhar jonne key of diye ki create hoy

interface IPerson {
   name: string;
   age: number;
}

type TPersonKeys = keyof IPerson;
// TPersonKeys mane "age" | "name" type

const test: TPersonKeys = "age";
const test2: TPersonKeys = "name";

// Example 2: key of ke kibhabe kaaj e lagaite pari
// akta object dilam, and tar against e jate bhul key na dei, shei khetre use korte pari

const getValue = <T>(obj: T, key: keyof T) => {
   console.log(obj[key]);
};

getValue({ id: 1, mail: "something" }, "mail");
