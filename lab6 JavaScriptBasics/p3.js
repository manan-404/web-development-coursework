
const students = [
    { name: "Ali", score: 92, active: true },
    { name: "Sara", score: 78, active: true },
    { name: "Bilal", score: 45, active: false }
];

// Sort a copy high→low by score — do not mutate the original ([...students].sort(...))

const highLowByScore = [...students].sort( (a, b) => b.score - a.score);

console.log("Students sorted high→low by score:", highLowByScore);