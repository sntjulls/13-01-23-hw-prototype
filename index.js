// Cтворіть функцію конструктор Продукт з властивостями:
// назва(рядок), ціна(число), кількість(число - залишок на складі)

// Cтворіть функцію конструктор прототипу Продукту з функціоналом:
// showInfo() - повертає рядок з усіма данними
// setSaleToPrice(value=0) - встановлює знижку і повертає нову ціну
// buyAmountProduct(amountValue) - повертає загальну вартість покупки, якщо є достатня кількість, якщо не має повертаєте - null

// Не забути поєднати Продукт і його прототип!

/**
 *
 * @param {string} name
 * @param {number} price
 * @param {number} quantity
 */

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

function ProductPrototype() {
  this.showInfo = function () {
    return (
      "Product name: " +
      this.name +
      "" +
      ", price: " +
      this.price +
      "" +
      ", quantity in stock - " +
      this.quantity
    );
  };

  this.setSaleToPrice = function (discount = 0) {
    let discountPercent = discount / 100;
    if (Number.isNaN(Number(this.price))) {
      return "error";
    } else {
      let NewPrice = Number(this.price - this.price * discountPercent);
      this.price = NewPrice;
    }
    return this.price;
  };
}

this.buyAmountProduct = function (amountValue) {
  if (this.productQuantity <= amountValue) {
    return null;
  }
};

Product.prototype = new ProductPrototype();

const product1 = new Product("milk", 5, 46);
const product2 = new Product("butter", 8, 29);

console.log(product1.showInfo());
console.log(product2.showInfo());
console.log(product1.setSaleToPrice(6));
console.log(product2.setSaleToPrice(0));
console.log(product1.buyAmountProduct(5));
console.log(product2.buyAmountProduct(2));
