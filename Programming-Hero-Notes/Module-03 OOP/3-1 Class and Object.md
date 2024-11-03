## Creating a class and an object:

```ts
class Animal {
   name: string;
   species: string;
   sound: string;

   constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
   }

   makeSound() {
      console.log(`The animal ${this.name} is making sound ${this.sound}`);
   }
}

const cat = new Animal("Kenzo", "cat", "meow");

cat.makeSound(); // The animal Kenzo is making sound meow
```

## But typescript is making things way way easier.

THe below code serves the same purpose as the initial above code.

```ts
class Animal {
   constructor(
      public name: string,
      public species: string,
      public sound: string
   ) {}

   makeSound() {
      console.log(`The animal ${this.name} is making sound ${this.sound}`);
   }
}

const cat = new Animal("Kenzo", "cat", "meow");

cat.makeSound(); // The animal Kenzo is making sound meow
```
