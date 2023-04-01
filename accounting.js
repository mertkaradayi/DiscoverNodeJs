class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  credit(amount) {
    this.balance += amount;
  }
  describe() {
    return `Owner: ${this.owner}, balance: ${this.balance}`;
  }

  myOwnerName() {
    return this.owner;
  }
  myOwnerBalance() {
    return this.balance;
  }
}

module.exports = Account;
