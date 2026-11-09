
const students = [
    { name: "Ali", score: 92, active: true },
    { name: "Sara", score: 78, active: true },
    { name: "Bilal", score: 45, active: false }
];

const averageScore = students.reduce( (sum, s) => sum + s.score, 0) / students.length;
const topStudents = students
    .filter(s => s.score > averageScore)
    .map(s => s.name);

console.log(topStudents); // Output: ["Ali", "Sara"]

