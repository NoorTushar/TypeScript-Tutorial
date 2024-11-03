Type Guard also know as Type Narrowing

## Typeof Guard

Example in a function:

```ts
type AlphaNumeric = string | number;

const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
   if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
   } else {
      return param1.toString() + param2.toString();
   }
};

const result1 = add(4, 5);
console.log(result1); // 9
const result2 = add("100", "50");
console.log(result2); // 10050
```

## In Guard

In guard hoilo kono akta property name ki include kore naki akta object e?

Ai example e amra check kortesi user ki admin naki na. Kibhhabe bujhbo? jodi role property thake then bujhbo aita Admin Type user.

```ts
type NormalUser = {
   name: string;
};

type AdminUser = {
   name: string;
   role: "admin";
};

const getUser = (user: NormalUser | AdminUser): string => {
   if ("role" in user) {
      return `Hi! My name is ${user.name} and I am an ${user.role}`;
   } else {
      return `Hi! My name is ${user.name}.`;
   }
};

const user1: NormalUser = {
   name: "Tushar",
};

const user2: AdminUser = {
   name: "Persian",
   role: "admin",
};

console.log(getUser(user1)); // Hi! My name is Tushar.
console.log(getUser(user2)); // Hi! My name is Persian and I am an admin
```
