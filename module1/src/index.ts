{
   type Employee = {
      id: number;
      name: string;
      position: string;
      address: {
         city: string;
         state: string;
         zip: string;
         house: {
            building: string;
            flatNo: string;
         };
      };
   };

   const employee: Employee = {
      id: 101,
      name: "Bob",
      position: "Developer",
      address: {
         city: "San Francisco",
         state: "CA",
         zip: "94103",
         house: {
            building: "Eastern Tower",
            flatNo: "25N",
         },
      },
   };

   const {
      address: {
         house: { building },
      },
   } = employee;

   console.log(building);
}
