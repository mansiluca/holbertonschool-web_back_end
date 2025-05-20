const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const studentsByField = {};

    students.forEach((student) => {
      const fields = student.split(',');
      const firstName = fields[0];
      const field = fields[3];

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    return { totalStudents: students.length, studentsByField };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
