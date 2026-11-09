
const products = [
  { id: 1, title: "Keyboard", price: 4500, category: "peripherals", inStock: true },
  { id: 2, title: "Mouse",    price: 1800, category: "peripherals", inStock: false },
  { id: 3, title: "USB Hub",  price: 1200, category: "cables",      inStock: true },
];

// groupBy(products, "category") with reduce → { peripherals: [...], cables: [...] }
const groupByCat = products.reduce( (acc, p) => {
    const groupKey = p["category"];
    if (!acc[groupKey]) {
        acc[groupKey] = [];
    }   

  acc[groupKey].push(p);
    return acc;
}, {});

console.log("Products grouped by category:", groupByCat);