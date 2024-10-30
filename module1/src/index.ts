const employee: {
   readonly companyName: "Programming Hero"; // aita akta Literal type. aita kintu string na
   firstName: string;
   secondName?: string;
   lastName: string;
} = {
   companyName: "Programming Hero",
   firstName: "Noor",
   lastName: "Khan",
};

employee.companyName = "";
