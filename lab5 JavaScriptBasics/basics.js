
const course = "Web Engineering";

console.log(course);

//const course = "Other"; This cause an error because 'course' has already been declared with 'const'  
console.log(course);

const count = 0;
// count += 1; this also causes an error because 'count' is a constant and cannot be reassigned

console.log(0 == false); // true because 0 is falsy
console.log(0 === false); // false because they are of different types
console.log([] == false); // true because [] is falsy