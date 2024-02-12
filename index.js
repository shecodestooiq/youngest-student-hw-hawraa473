const students = [
    { name: 'Hawraa' , age: 21 },
    { name: 'Amna' , age: 22 } ,
    { name: 'Fatima' , age: 19 } ,
] ; 

function getYoungestStudents(students) {
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

//module.exports = showYoungestStudent;