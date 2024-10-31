## Nullable Type

Let's say amra akta function e dekhbo je string name pass korle 'searching' lekha uthbe ar naile kichui na pathaile, (NULL Pathaile), 'nothing to search' lekha ashbe.

```ts
const searchName = (value: string | null): string => {
   return value ? "Searching" : "Nothing to Search";
};
console.log(searchName("Tushar")); // output: "Searching"
console.log(searchName(null)); // output: "Nothing to Search"
```

## Unknown Type

first e unknown thake, pore kintu known hoy.

Similarly, akhon amra janina value type er bepare kintu run time er por hoyto type ta janbo.
