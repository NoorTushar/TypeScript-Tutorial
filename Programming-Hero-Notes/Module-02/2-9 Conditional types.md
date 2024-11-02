## What is Conditional Type:

Akta type arekta type er upor depend kore tar type ta nirdharon kore.

Example:

```ts
type A1 = null;
type B1 = undefined;

type X = A1 extends null ? true : false;
// here: type of X depends on type of A1

const letsSee: X = true;
```

Let us do more nested conditional:

```ts
type A1 = string;
type B1 = undefined;

type X = A1 extends null ? true : B1 extends undefined ? undefined : any;
// here: type of X depends on type of A1
// aikhane A1 jehutu null na tahole bhitorer condition e dhukbe.
// B1 jehutu undefine tahole X ta amader undefined hobe

const letsSee: X = true; // ai line e akhon error dibe cause type of X is now undefined
```

### More example

```ts
type Sheikh = {
   car: string;
   bike: string;
   ship: string;
};

type CheckVehicle<T> = T extends "car" | "bike" | "ship" ? true : false;

type HasTractor = CheckVehicle<"tractor">; // will return false
```

Now T extends manually aibhabe na lekhe we can simply use `key of`:

```ts
type Sheikh = {
   car: string;
   bike: string;
   ship: string;
};

type CheckVehicle<T, X> = T extends keyof X ? true : false;

type HasTractor = CheckVehicle<"tractor", Sheikh>; // will return false
type HasCar = CheckVehicle<"car", Sheikh>; // will return true
```
