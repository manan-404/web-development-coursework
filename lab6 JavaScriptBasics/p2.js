
const students = [
    { name: "Ali", score: 92, active: true },
    { name: "Sara", score: 78, active: true },
    { name: "Bilal", score: 45, active: false }
];

// students.some(s => s.score > 90) and students.every(s => s.score > 40) — log both
console.log("Some students scored above 90:", students.some(s => s.score > 90)); // Output: true
console.log("All students scored above 40:", students.every(s => s.score > 40)); 
// both conditions combined
console.log("Some students scored above 90 and all students scored above 40:", students.some(s => s.score > 90) && students.every(s => s.score > 40));
