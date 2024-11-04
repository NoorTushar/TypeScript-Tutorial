class Person {
   getSleep() {
      console.log(`i am sleeping for 8 hours a day`);
   }
}

class Student extends Person {
   getSleep() {
      console.log(`i am sleeping for 7 hours a day`);
   }
}

class Developer extends Person {
   getSleep() {
      console.log(`i am sleeping for 6 hours a day`);
   }
}

const getSleepingHours = (person: Person) => {
   console.log(person.getSleep());
};

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person1); // i am sleeping for 8 hours a day
getSleepingHours(person2); // i am sleeping for 7 hours a day
getSleepingHours(person3); // i am sleeping for 6 hours a day

class Shape {
   getArea(): number {
      return 0;
   }
}

class Circle extends Shape {
   radius: number;

   constructor(radius: number) {
      super();
      this.radius = radius;
   }
   getArea(): number {
      return Math.PI * this.radius * this.radius;
   }
}

class Rectangle extends Shape {
   height: number;
   width: number;

   constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
   }

   getArea(): number {
      return this.height * this.width;
   }
}

const rectangleArea = new Rectangle(5, 5);
const circleArea = new Circle(5);

const getShapeArea = (shape: Shape) => {
   console.log(shape.getArea());
};

getShapeArea(rectangleArea); // 25
getShapeArea(circleArea); // 78.53981633974483
