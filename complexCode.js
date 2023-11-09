/* complexCode.js */

// This code shows an example of a sophisticated and complex JavaScript program.
// It simulates a virtual online marketplace where users can buy and sell products.

// Declare necessary variables and arrays
let users = [];
let products = [];
let transactions = [];

// Define classes for User, Product, and Transaction
class User {
  constructor(username, email, address) {
    this.username = username;
    this.email = email;
    this.address = address;
    this.balance = 0;
  }

  addBalance(amount) {
    this.balance += amount;
  }

  deductBalance(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    } else {
      return false;
    }
  }
}

class Product {
  constructor(name, price, seller) {
    this.name = name;
    this.price = price;
    this.seller = seller;
    this.isSold = false;
  }

  sell() {
    this.isSold = true;
  }
}

class Transaction {
  constructor(buyer, product) {
    this.buyer = buyer;
    this.product = product;
    this.seller = product.seller;
    this.price = product.price;
    this.date = new Date();
  }

  processTransaction() {
    if (this.buyer.deductBalance(this.price)) {
      this.seller.addBalance(this.price);
      this.product.sell();
      transactions.push(this);
      console.log("Transaction successful!");
    } else {
      console.log("Insufficient balance, transaction failed.");
    }
  }
}

// Create sample users
const user1 = new User("JohnDoe", "john.doe@example.com", "123 Main St");
users.push(user1);
const user2 = new User("JaneSmith", "jane.smith@example.com", "456 Elm St");
users.push(user2);

// Create sample products
const product1 = new Product("Phone", 500, user1);
products.push(product1);
const product2 = new Product("Laptop", 1000, user2);
products.push(product2);

// Perform a sample transaction
const transaction1 = new Transaction(user2, product1);
transaction1.processTransaction();

// Output user and product information
console.log("User 1:", user1);
console.log("User 2:", user2);
console.log("Product 1:", product1);
console.log("Product 2:", product2);

// Output all transactions
console.log("Transactions:", transactions);