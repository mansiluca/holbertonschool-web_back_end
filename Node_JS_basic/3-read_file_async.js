const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const response = [];
    let msg;

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    msg = `Number of students: ${students.length}`;
    console.log(msg);
    response.push(msg);

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
      msg = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      console.log(msg);
      response.push(msg);
    }

    return response;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
