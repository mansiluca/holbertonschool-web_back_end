const fs = require('fs');

const pathdb = './database.csv';

function countStudents(path = pathdb) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      return headers.reduce((student, header, index) => (
        { ...student, [header]: values[index] }), {});
    });

    const studentsCount = students.length;

    console.log(`Number of students: ${studentsCount}`);

    const csStudents = students.filter((student) => student.field === 'CS');
    const csFirstNames = csStudents.map((student) => student.firstname || student.firstName).join(', ');
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csFirstNames}`);

    const sweStudents = students.filter((student) => student.field === 'SWE');
    const sweFirstNames = sweStudents.map((student) => student.firstname || student.firstName).join(', ');
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNames}`);
    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
