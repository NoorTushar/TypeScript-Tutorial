## 🟪 Nullable Type

Let's say amra akta function e dekhbo je string name pass korle 'searching' lekha uthbe ar naile kichui na pathaile, (NULL Pathaile), 'nothing to search' lekha ashbe.

```ts
const searchName = (value: string | null): string => {
   return value ? "Searching" : "Nothing to Search";
};
console.log(searchName("Tushar")); // output: "Searching"
console.log(searchName(null)); // output: "Nothing to Search"
```

## 🟪 Unknown Type

-  First e unknown akta person unknown thake, pore kintu known hoy.

-  Similarly, akhon amra janina value type er bepare, kintu run time er por hoyto type ta janbo.

-  Run time e type er upor base kore amra akta decision nibo.

Example

```ts
const getSpeedInMeterPerSecond = (value: unknown) => {
   if (typeof value === "number") {
      const convertedValue = (value * 1000) / 3600;
      console.log(`the speed is ${convertedValue} m/s`);
   } else if (typeof value === "string") {
      const [speed] = value.split(" ");
      const convertedValue = (parseFloat(speed) * 1000) / 3600;
      console.log(`the speed is ${convertedValue} m/s`);
   }
};

getSpeedInMeterPerSecond(1000); // the speed is 2.777
getSpeedInMeterPerSecond("1000 km/h"); // the speed is 2.777
```

Aikhane based on the type later during the runtime, amra decision nite parsi.

Unknown type dile amader code e kono error dibena as amra janina value ta ki hobe.

## 🟪 Never Type

Never type tokhon e define kori jokhon amra 100% sure je akta function kono kichu return korbena.

When a function is declared to return never, the TypeScript compiler expects that the function’s execution cannot logically reach the end without throwing an error or getting stuck in an endless loop. If there’s any possible exit from the function, the function cannot return never.

```ts
function throwError(message: string): never {
   throw new Error(message); // No end point is reached
}
```

Here, throwError has no reachable endpoint because it always throws an error, which matches the never return type.

If the function has an exit path, it does not qualify as a never function. For example:

```ts
function mightThrow(message: string): never {
   if (message) {
      throw new Error(message); // This works fine
   }
   // TypeScript will show an error because there is a reachable end point here
}
```

In this case, if message is falsy, there is a reachable endpoint, so TypeScript will complain because mightThrow cannot guarantee a never return type.
