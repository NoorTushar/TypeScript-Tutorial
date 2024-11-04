class BankAccount {
   readonly id: number;
   name: string;
   protected _balance: number;

   constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
   }

   addBalance(amount: number) {
      this._balance += amount;
   }

   getBalance() {
      return this._balance;
   }
}

class StudentAccount extends BankAccount {
   test() {
      this._balance;
   }
}

const goribManusherAccount = new BankAccount(111, "Gorib Bhai", 20);

goribManusherAccount.addBalance(100);
console.log(goribManusherAccount.getBalance()); // 120
