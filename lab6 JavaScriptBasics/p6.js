
const products = [
  { id: 1, title: "Keyboard", price: 4500, category: "peripherals", inStock: true },
  { id: 2, title: "Mouse",    price: 1800, category: "peripherals", inStock: false },
  { id: 3, title: "USB Hub",  price: 1200, category: "cables",      inStock: true },
];

const total = products.reduce( (sum, p) => sum + p.price, 0);
console.log("Total product value:", total);