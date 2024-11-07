# Keywords

1. `as`
2. `type`
3. `interface`
4. `extends`

## 1. Type define korte pari

## 2. Akta type jar type limited kichu jinish e hobe - UNION

## 3. Type der jora dite pari - INTERSECTION

## 4. Nullable, Unknown, Never

-  nullable: null value
-  unknown: akhon janina ki type hobe
-  never: kokhono kono value e return korbena

## 5. Amra jor kore type ASsign korte pari - type assertion using `as`

## 6. intersection using interface e `extends` use kori

Etey kore, amra merge korte pari multiple types

## 7. Ki type hobe oita dynamically kono variable set korar time e bolte pari. - using `< >`

amra ai angle bracket er moddhey type pass korte pari.

Amra dynamically object er property r value r o type declare korte pari:

```ts
interface IUser<T> {
   address: T;
}

const user: IUser<{ street: string; road: number }> = {
   address: {
      road: 2,
      street: "Eskaton",
   },
};
```

## 8. Function generic bananor way aktu alada.

```ts
const createArrayWithGeneric = <T>(param: T): T[] => [param];

const resultGenObj = createArrayWithGeneric<{ name: string; age: number }>({
   name: "tushar",
   age: 16,
});
```

## 9. `Extends` er arek use case, `Constraints` create kora.

## 10. `Keyof` operator for generic constraints

amra akta type er key gula nite pari. niye union create korte pari
