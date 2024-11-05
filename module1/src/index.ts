{
   type Dev1 = {
      name: string;
      devType1: "frontend";
   };

   type Dev2 = {
      name: string;
      devType2: "backend";
   };

   const proDeveloper: Dev1 & Dev2 = {
      name: "tushar",
      devType1: "frontend",
      devType2: "backend",
   };
}
