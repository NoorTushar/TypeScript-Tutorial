# 💎 Module 1 ✅

-  🟨 install ✅
-  🟨 configure ✅
-  🟨 basic data type ✅

   highlighted for me:

   -  tuple
   -  readonly boshano property name er agey

-  🟨 functions ✅

   highlighted for me:

   -  parameter keo optional kora jae
   -  default parameter value set korte pari
   -  map method

-  🟨 spread and rest ✅

   highlighted for me:

   -  REST operator (array create kore individual elements diye)

-  🟨 destructure ✅

   highlighted for me:

   -  nested object destructure syntax:
      employee er bhitore address ase, abar address er bhitore house ase.

   ```ts
   const {
      address: {
         house: { building },
      },
   } = employee;

   console.log(building);
   ```

-  🟨 type alias ✅

   highlighted for me:

   -  Function Type Alias

-  🟨 union and intersection ✅

   highlighted for me:

   -  Intersection, merge kora type gulake. Jodi common property name thake, oigula aktai ashbe and baki gula merge hobe.

-  🟨 ternary, optional chaining and nullish ✅

   highlighted for me:

   -  Optional Chaining + Nullish Combo

-  🟨 never, unknown, nullable type ✅

# 💎 Module 2

-  🟨 Type assertion Or type narrowing ✅

   highlighted for me:

   -  syntax: `as`

   ```ts
   const result = kgToGm("900") as string;
   ```

   -  error message in try catch block

   ```ts
   type CustomError = {
      message: string;
   };

   try {
   } catch (error) {
      console.log((error as CustomError).message);
   }
   ```

-  🟨 Interface, type vs interface ✅

   highlighted for me:

   -  interface diye intersect korte gele we use `extends` keyword
   -  array interface kora
   -  function interface kora

   -  advantage: can merge properties with same interface type name

-  🟨 Introduction to generics ✅
-  🟨 Generic with Interface ✅
-  🟨 Generic Functions ✅
-  🟨 Constraints

   highlighted for me:

   -  Constraints korar way hocchey to use `extends` keyword

-  🟨 Constraint using key of
-  🟨 Utility types
-  🟨 Asynchronous typescript
-  🟨 Conditional types
-  🟨 Mapped types

# 💎 Module 3

-  Class and Object
-  Inheritance
-  Type guard using typeof & in
-  Instanceof Guard
-  Access modifiers
-  Getter and setter
-  Statics in OOP
-  Polymorphism
-  Abstraction in OOP
-  Encapsulation in OOP

```

```
