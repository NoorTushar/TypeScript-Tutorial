## Ternary Operator

```ts
const age: number = 18;
const isAdult: boolean = age >= 18 ? true : false;
console.log(isAdult); //true
```

## Nullish Coalescing Operator

Aita abar ki ??

Aita hoilo, `Null` ba `Undefined` value pele amra ki korbo sheita set korar jonne use kori.

Example,

```ts
const isAuthenticated = null;

const result1 = isAuthenticated ?? "Guest";
console.log({ result1 }); // Output: 'Guest'
```

Moja hoilo tahole `NOR` er `moddhe` ar Nullish er moddhey `difference` ki roilo?

Difference hoilo, `NOR` falsy jekono value nibe, kintu `NULLISH` only `undefined` and `null` value niye kaaj korbe

```ts
const isAuthenticated = "";

const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated || "Guest";

console.log({ result1 }); // Output: ''
console.log({ result2 }); // Output: 'Guest'
```

Aikhane example e dekhtesi je empty string falsy kintu undefined ba null na taile, first result1 ta amra isAuthenticated e paitesi.

## Optional Chaining + Nullish Combo

Amra aikhane question mark 3 jaegae use korsi

-  1. Optional type declare korte
-  2. Optional chaining use korte
-  3. Nullish Coalescing operator e

```ts
type User = {
   name: string;
   address: {
      city: string;
      permanentAddress?: string;
      currentAddress: string;
   };
};

const user: User = {
   name: "Tushar",
   address: {
      city: "Dhaka",
      currentAddress: "Eskaton",
   },
};

const permanentAddress =
   user?.address?.permanentAddress ?? "No permanent address";

console.log({ permanentAddress }); // { permanentAddress: 'No permanent address' }
```
