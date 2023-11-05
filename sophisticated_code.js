// Filename: sophisticated_code.js

/*
This code is a complex example of a simulated banking system.
It demonstrates various features like account creation, transaction logging,
balance summary, and transfer of funds between accounts.
*/

// Class representing a bank account
class BankAccount {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`Deposit: $${amount}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(`Withdrawal: $${amount}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalanceSummary() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Current Balance: $${this.balance}`);
  }
}

// Class representing a bank
class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(accountNumber, accountHolder, initialBalance) {
    const account = new BankAccount(accountNumber, accountHolder, initialBalance);
    this.accounts.push(account);
  }

  transferFunds(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.accounts.find(acc => acc.accountNumber === fromAccountNumber);
    const toAccount = this.accounts.find(acc => acc.accountNumber === toAccountNumber);

    if (!fromAccount || !toAccount) {
      console.log("Invalid account number(s)");
      return;
    }

    if (fromAccount.balance >= amount) {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
      console.log("Funds transferred successfully");
    } else {
      console.log("Insufficient funds");
    }
  }

  displayTransactionLog(accountNumber) {
    const account = this.accounts.find(acc => acc.accountNumber === accountNumber);
    if (!account) {
      console.log("Invalid account number");
      return;
    }

    console.log(`Transaction Log for Account ${accountNumber}`);
    account.transactions.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction}`);
    });
  }
}

// Usage example
const bank = new Bank();

bank.createAccount("A001", "John Doe", 5000);
bank.createAccount("A002", "Jane Smith", 10000);

bank.accounts[0].deposit(1000);
bank.accounts[1].deposit(2000);

bank.transferFunds("A001", "A002", 1500);
bank.transferFunds("A002", "A001", 3000);

bank.displayTransactionLog("A001");
bank.displayTransactionLog("A002");

bank.accounts[0].getBalanceSummary();
bank.accounts[1].getBalanceSummary();
