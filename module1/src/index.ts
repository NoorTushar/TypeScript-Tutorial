class BankAccount {
   readonly id: number;
   name: string;
   protected _balance: number;

   constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
   }

   set deposit(amount: number) {
      this._balance += amount;
   }

   get balance() {
      return this._balance;
   }
}

const goribManusherAccount = new BankAccount(111, "Gorib Bhai", 20);

goribManusherAccount.deposit = 100;
console.log(goribManusherAccount.balance); // 120
