// FUNCTIONS

const addSum = (a: number, b: number) => {
   return a + b;
};

console.log(addSum(4, "2"));
// error: Argument of type 'string' is not assignable to parameter
// of type 'number', although console shows 42

// ARRAYS

const names = ["tushar", "santu"];
names.push(92);
console.log(names);

// error: Argument of type 'number' is not assignable to parameter of type 'string'.
// although console shows ['tushar', 'santu', 92]

// OBJECTS

const person = {
   name: "Tushar",
   age: 17,
   isHandsome: true,
};

person.age = "seventeen";
// Type 'string' is not assignable to type 'number'.
// Although console shows: {name: 'Tushar', age: 'seventeen', isHandsome: true}

person.subject = "bba";
// Error: Property 'subject' does not exist on type
// '{ name: string; age: number; isHandsome: boolean; }'.
// Although console shows:
// {name: 'Tushar', age: 'seventeen', isHandsome: true, subject: 'bba'}

console.log(person);
