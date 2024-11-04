// idea - idea pacchi aikhane. kintu janina ashole aigula ki kaaj e dibe.
interface Vehicle1 {
   startEngine(): void;
   stopEngine(): void;
   move(): void;
}

// real implementation - aikhane amra define kortesi je kontar ki kaaj
class Car implements Vehicle1 {
   startEngine(): void {
      console.log(`car is starting`);
   }

   stopEngine(): void {
      console.log("car has stopped");
   }

   move(): void {
      console.log("car is moving");
   }

   test(): void {
      console.log("testing");
   }
}

const car = new Car();

abstract class Vehicle2 {
   abstract startEngine(): void;
   abstract stopEngine(): void;
   abstract moveEngine(): void;
}

class Car2 extends Vehicle2 {
   startEngine(): void {
      console.log(`car is starting`);
   }

   stopEngine(): void {
      console.log("car has stopped");
   }

   moveEngine(): void {
      console.log("car is moving");
   }

   test(): void {
      console.log("testing");
   }
}

const toyota = new Car2();

toyota.stopEngine(); // car has stopped
