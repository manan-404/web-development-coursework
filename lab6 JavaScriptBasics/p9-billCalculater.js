
function calculateBill({ amount, tipPercent = 15, people = 1 }) {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Amount must be a positive number");
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

// Happy path
console.log(calculateBill({ amount: 2400, tipPercent: 10, people: 3 }));

// Failing call 1: bad amount
try {
  calculateBill({ amount: -1 });
} catch (error) {
  console.error(error.message);
}

// Failing call 2: people: 0
try {
  calculateBill({ amount: 2400, people: 0 });
} catch (error) {
  console.error(error.message);
}