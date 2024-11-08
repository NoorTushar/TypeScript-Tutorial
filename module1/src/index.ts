type Circle = {
   shape: "circle";
   radius: number;
};

type Rectangle = {
   shape: "rectangle";
   width: number;
   height: number;
};

type TShapeArea = Circle | Rectangle;

const calculateShapeArea = (shape: TShapeArea) => {
   if (shape.shape === "circle") {
      return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
   } else if (shape.shape === "rectangle") {
      return shape.height * shape.width;
   }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.54
