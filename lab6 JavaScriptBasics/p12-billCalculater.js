
function calculateBill({ amount, tipPercent = 15, people = 1 }) {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Amount must be a positive number");
  }
  if (typeof tipPercent !== "number" || tipPercent < 0) {
    throw new Error("Tip percent must be a non-negative number");
  }
  if (people < 1) {
    throw new Error("There must be at least one person");
  }

  const tip = amount * (tipPercent / 100);
  const total = amount + tip;

  return {
    tip: Number(tip.toFixed(2)),
    total: Number(total.toFixed(2)),
    perPerson: Number((total / people).toFixed(2)),
  };
}

function formatBill(result) {
  return `Tip: ${result.tip}
Total: ${result.total}
Per Person: ${result.perPerson}`;
}

// Happy path
const bill1 = calculateBill({ amount: 2400, tipPercent: 10, people: 3 });
console.log(formatBill(bill1));

// Default tip (15%) kicks in
const bill2 = calculateBill({ amount: 1000, people: 2 });
console.log(formatBill(bill2));

// Failing call: bad amount
try {
  calculateBill({ amount: -1 });
} catch (error) {
  console.error(error.message);
}

// Failing call: people 0
try {
  calculateBill({ amount: 2400, people: 0 });
} catch (error) {
  console.error(error.message);
}

// Failing call: non-number tipPercent
try {
  calculateBill({ amount: 2400, tipPercent: "abc" });
} catch (error) {
  console.error(error.message);
}