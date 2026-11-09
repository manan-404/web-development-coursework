
const products = [
  { id: 1, title: "Keyboard", price: 4500, category: "peripherals", inStock: true },
  { id: 2, title: "Mouse",    price: 1800, category: "peripherals", inStock: false },
  { id: 3, title: "USB Hub",  price: 1200, category: "cables",      inStock: true },
];

// inStock titles via filter + map

const inStockTitles = products
    .filter(p => p.inStock)
    .map(p => p.title);

console.log("In-stock product titles:", inStockTitles); // Output: ["Keyboard", "USB Hub"]