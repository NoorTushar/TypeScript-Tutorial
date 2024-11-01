const getSpeedInMeterPerSecond = (value: unknown) => {
   if (typeof value === "number") {
      const convertedValue = (value * 1000) / 3600;
      console.log(`the speed is ${convertedValue} m/s`);
   } else if (typeof value === "string") {
      const [speed] = value.split(" ");
      const convertedValue = (parseFloat(speed) * 1000) / 3600;
      console.log(`the speed is ${convertedValue} m/s`);
   }
};

getSpeedInMeterPerSecond(1000); // the speed is 2.777
getSpeedInMeterPerSecond("1000 km/h"); // the speed is 2.777
