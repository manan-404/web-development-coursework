
const students = [
    { name: "Ali", score: 92 },
    { name: "Sara", score: 78 },
    { name: "Bilal", score: 45 }
];

const passingScore = 60;

// 1. Class Average
const totalScore = students.reduce( (sum, s) => sum + s.score, 0)
const classAverage = totalScore / students.length;

// 2. Highest Scorer
const highestScorer = students.reduce( (top, s) => s.score > top.score ? s  : top
);

// 3. Lowest Scorer
const lowestScorer = students.reduce( (bottem, s) => s.score < bottem.score  ? s : bottem
);

// 4. Pass rate
const passCount = students.filter(s => s.score >= passingScore);
const passRate = (passCount.length / students.length) * 100;

// 5. Names sorted high -> low
const namesSortedHighToLow = students
    .slice()
    .sort( (a, b) => b.score - a.score)
    .map(s => s.name);

console.log("Class Average:", classAverage.toFixed(2));
console.log("Highest Scorer:", highestScorer);
console.log("Lowest Scorer:", lowestScorer);
console.log("Pass Rate:", passRate.toFixed(1) + "%");
console.log("Names sorted high -> low:", namesSortedHighToLow);