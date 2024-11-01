Generic Array:

Generalize kora.

Mane ki aktu bujhi.

Shobar first e amra kichu array declare kori.

```ts
const rollNumbers: number[] = [2, 4, 7];
const mentors: string[] = ["X", "Y", "Z"];
const booleanArray: boolean[] = [true, false, true];
```

Bhalo kotha, amra aibhabeo chaile lekhte pari:

```ts
const rollNumbers: Array<number> = [2, 4, 7];
const mentors: Array<string> = ["X", "Y", "Z"];
const booleanArray: Array<boolean> = [true, false, true];
```

Okay, now amra aibhabe chaile lekhte pari?

```ts
type GenericArray = Array<string>;
const mentors: GenericArray = ["X", "Y", "Z"];
```

Yes pari, kintu aro reusable way te lekhar way hocchey aibhabe:

Using param which behaves like taking an argument.

```ts
type GenericArray<param> = Array<param>;

const mentors: GenericArray<string> = ["X", "Y", "Z"];
const rollNumbers: GenericArray<number> = [2, 4, 7];
const booleanArray: GenericArray<boolean> = [true, false, true];
```

But industry practice e amra param na lekhe `T` lekhi. `T` for typeScript, T for Type. As amra Type pass kortesi tai `T`

```ts
type GenericArray<T> = Array<T>;

const mentors: GenericArray<string> = ["X", "Y", "Z"];
const rollNumbers: GenericArray<number> = [2, 4, 7];
const booleanArray: GenericArray<boolean> = [true, false, true];
```

Same bhabe `object` o banaite pari amra.

```ts
type GenericArray<T> = Array<T>;

const user: GenericArray<{ name: string; age: number }> = [
   {
      name: "Tushar",
      age: 17,
   },
   {
      name: "Mezba",
      age: 117,
   },
];
```

## 🟪 Generic Tuples

Example, aita aktu bhinno way te `Generic` kora hoy

```ts
// kibhabe banaite hoy
type GenericTuple<X, Y> = [X, Y];

// example 1
const users: GenericTuple<string, number> = ["Tushar", 80];

// example 2
const developer1: GenericTuple<number, { name: string; email: string }> = [
   1234,
   { name: "Tushar", email: "t@t.com" },
];
```
