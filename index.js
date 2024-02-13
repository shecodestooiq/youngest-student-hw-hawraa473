const students = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 2 },
    { name: 'Charlie', age: 21 },
];



function getYoungestStudents(students) {
    if(students.length === 0 ) {
        console.log("No students provided");
    }
    let youngestStudent = { age: students[0].age, name: "" };
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.age < youngestStudent.age) {
            youngestStudent = student;
        }
    }
    return youngestStudent;
}

console.log(getYoungestStudents(students));

module.exports = getYoungestStudents;