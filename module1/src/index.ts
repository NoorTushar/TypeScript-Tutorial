const addCourseToStudent = <T>(param: T) => {
   const course = "Next Level Web Development";

   return {
      ...param,
      course,
   };
};

const student1 = addCourseToStudent<{ name: string; email: string }>({
   name: "Tushar",
   email: "tushar@gmail.com",
});
