const students = [
    { name: "Alice", age: 22, grade: "A", major: "Computer Science" },
    { name: "Bob", age: 20, grade: "B", major: "Mathematics" },
    { name: "Charlie", age: 23, grade: "A", major: "Physics" },
    { name: "Diana", age: 21, grade: "B", major: "Computer Science" },
    { name: "Eve", age: 19, grade: "C", major: "Biology" }
];
const names = students.map(student => student.name);
const grades = students.filter(student =>student.grade=="A")
const succeeding_students = grades.map(student => student.name);
const ages = students.map(student => student.age);
const totalAge = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const av_age = totalAge / ages.length;
const names_upper = names.join(",").toUpperCase()
const youngest_student = students.reduce((young, current) =>{return young.age<current.age?young:current},students[0])


console.log(names)
console.log(succeeding_students)
console.log(av_age)
console.log(names_upper)
console.log(youngest_student)