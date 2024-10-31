## Destructuring Objects

NOTE ONE THING IN BELOW EXAMPLES:

We can not use type annotation while destructuring, because it will be used as defining 'Aliases'

### Simple Object

```ts
const user = {
   name: "Alice",
   age: 30,
   city: "New York",
};

// Destructure properties from the user object
const { name: userName, age, city } = user;

console.log(userName); // Output: Alice
console.log(age); // Output: 30
console.log(city); // Output: New York
```

### Nested Object

```ts
const employee = {
   id: 101,
   name: "Bob",
   position: "Developer",
   address: {
      city: "San Francisco",
      state: "CA",
      zip: "94103",
   },
};

const {
   name,
   address: { city: cityName, state },
} = employee;

console.log(name, cityName, state); //Output: Bob San Francisco CA
```

## Destructuring Arrays

```ts
const footballers = ["messi", "ronaldo", "zidane", "beckham"];

const [first, second] = footballers;

console.log(first, second); // messi ronaldo
```

Example 2:

```ts
const footballers = ["messi", "ronaldo", "zidane", "beckham"];

const [, second, ...others] = footballers;

console.log(second); // ronaldo
console.log(others); // [ 'zidane', 'beckham' ]
```

Note, amra kintu rest operator use korsi `others` variable create korar jonne, tai return e ki paisi? - ARRAY!
