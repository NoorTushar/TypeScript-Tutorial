type NormalUser = {
   name: string;
};

type AdminUser = {
   name: string;
   role: "admin";
};

const getUser = (user: NormalUser | AdminUser): string => {
   if ("role" in user) {
      return `Hi! My name is ${user.name} and I am an ${user.role}`;
   } else {
      return `Hi! My name is ${user.name}.`;
   }
};

const user1: NormalUser = {
   name: "Tushar",
};

const user2: AdminUser = {
   name: "Persian",
   role: "admin",
};

console.log(getUser(user1)); // Hi! My name is Tushar.
console.log(getUser(user2)); // Hi! My name is Persian and I am an admin
