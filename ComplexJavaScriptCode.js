/* 

   Filename: ComplexJavaScriptCode.js

   Description: This complex JavaScript code demonstrates a sophisticated and elaborate example of an e-commerce website shopping cart functionality.

*/

// Product class representing a single product
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  displayProductDetails() {
    console.log(`Product ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Quantity: ${this.quantity}`);
    console.log(`Total Price: $${this.getTotalPrice()}`);
  }
}

// Shopping cart class managing the overall shopping experience
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter(product => product.id !== productId);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].getTotalPrice();
    }
    return totalPrice;
  }

  displayCartDetails() {
    console.log("===== Shopping Cart Details =====");
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].displayProductDetails();
      console.log("------------------------");
    }
    console.log(`Total Price: $${this.getTotalPrice()}`);
    console.log("===============================");
  }
}

// Sample code usage

// Creating products
const product1 = new Product(1, "Mobile Phone", 799.99, 2);
const product2 = new Product(2, "Laptop", 1499.99, 1);
const product3 = new Product(3, "Headphones", 129.99, 3);

// Creating shopping cart instance
const shoppingCart = new ShoppingCart();

// Adding products to the shopping cart
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);

// Displaying shopping cart details
shoppingCart.displayCartDetails();

// Removing a product from the shopping cart
shoppingCart.removeProduct(2);

// Displaying updated shopping cart details
shoppingCart.displayCartDetails();

// Adding a new product to the shopping cart
const product4 = new Product(4, "Smartwatch", 299.99, 1);
shoppingCart.addProduct(product4);

// Displaying final shopping cart details
shoppingCart.displayCartDetails();

// Output:
// ===== Shopping Cart Details =====
// Product ID: 1
// Name: Mobile Phone
// Price: $799.99
// Quantity: 2
// Total Price: $1599.98
// ------------------------
// Product ID: 2
// Name: Laptop
// Price: $1499.99
// Quantity: 1
// Total Price: $1499.99
// ------------------------
// Product ID: 3
// Name: Headphones
// Price: $129.99
// Quantity: 3
// Total Price: $389.97
// ------------------------
// Total Price: $3489.94
// ===============================
// ===== Shopping Cart Details =====
// Product ID: 1
// Name: Mobile Phone
// Price: $799.99
// Quantity: 2
// Total Price: $1599.98
// ------------------------
// Product ID: 3
// Name: Headphones
// Price: $129.99
// Quantity: 3
// Total Price: $389.97
// ------------------------
// Total Price: $1989.95
// ===============================
// ===== Shopping Cart Details =====
// Product ID: 1
// Name: Mobile Phone
// Price: $799.99
// Quantity: 2
// Total Price: $1599.98
// ------------------------
// Product ID: 3
// Name: Headphones
// Price: $129.99
// Quantity: 3
// Total Price: $389.97
// ------------------------
// Product ID: 4
// Name: Smartwatch
// Price: $299.99
// Quantity: 1
// Total Price: $299.99
// ------------------------
// Total Price: $2289.94
// ===============================