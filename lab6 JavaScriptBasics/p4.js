
const student = {
    name: "Ayesha",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Sukkur",
        country: "Pakistan"
    }
}
    const { name, skills} = student;
    console.log(skills);

    const { role = "student" } = student;
    console.log(role); // Output: "student"
    
    const { address: { city } } = student;
    console.log(city); // Output: "Sukkur"


    console.log(Object.keys(student));
    console.log(Object.entries(student));
    
