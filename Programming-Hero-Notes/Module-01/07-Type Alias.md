## What and Why

Type alias bolte pari amra akta schema r moto arki.

Amader nijeder akta `type` banabo and oitar akta `alias` dibo.

FIRST POINT, keno korbo?

Okay bujhi ken amra type alias declare korbo. Agey problem ta bujhi.

Nicher duita object observe koro agey. Dekho je amra duita person declare korar time e almost same property names e bebohar korsi. Kintu type declaration ta kemon akta repetitive process.

Amra jodi abar arekta person declare kori, same amader abar type declare korte hobe.

```ts
const person1: {
   name: string;
   age: number;
   contact: string;
} = {
   name: "Tushar",
   age: 18,
   contact: "0169999999",
};

const person2: {
   name: string;
   age: number;
   contact: string;
   email: string;
} = {
   name: "Mafia",
   age: 18,
   contact: "0169999999",
   email: "mafia@mafia.com",
};
```

So ai problem tai solve korbo amra `type alias` er maddhome.

## Rewriting the previous code: Object Type Alias

```ts
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
```

akhon person1 er type hocchey hoilo Person and person2 er type o hocchey akhon Person

## String Type Alias

```ts
type Name = string;

const userName: Name = "Tushar";
```

## Boolean Type Alias

```ts
type IsAdmin = boolean;
const isAdmin: IsAdmin = true;
```

## Function Type Alias

Agey amra kibhabe kortam?

```ts
const addArrow = (num1: number, num2: number): number => {
   return num1 + num2;
};
```

Aibhabe tai na? Aitake kibhabe type aliasing kora jae dekhi.

```js
type AddFn = (num1: number, num2: number) => number;

const addArrow: AddFn = (num1, num2) => num1 + num2;

console.log(addArrow(4, 5)); // output: 9
```
