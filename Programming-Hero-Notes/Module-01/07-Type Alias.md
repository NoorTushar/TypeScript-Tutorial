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
