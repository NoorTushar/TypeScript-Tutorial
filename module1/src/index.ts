class Counter {
   public static counter: number = 0;

   static increment() {
      return (Counter.counter = Counter.counter + 1);
   }

   static decrement() {
      return (Counter.counter = Counter.counter - 1);
   }
}

// const instance1 = new Counter();
// const instance2 = new Counter();

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
