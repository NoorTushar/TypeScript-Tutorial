type Student = {
   id: number;
   name: string;
   email: string;
   course: string;
};

type Phone = {
   //    id: number;
   //    name: string;
   //    email: string;
   //    course: string;
   phone: string;
};

type CompleteStudent = Student & Phone;

const student1: CompleteStudent = {
   id: 2,
   name: "Tushar",
   email: "tushar@gmail.com",
   course: "PH",
   phone: "81515926",
};
