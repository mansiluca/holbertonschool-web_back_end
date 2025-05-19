const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n')
      .filter((line) => line.trim() !== '')
      .slice(1);

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let totalStudents = 0;

    for (const line of lines) {
      const [firstName, lastName, age, field] = line.split(',');
      if (firstName && lastName && age && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents += 1;
      }
    }

    let result = `Number of students: ${totalStudents}`;
    for (const [field, names] of Object.entries(students)) {
      result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const databasePath = process.argv[2];
      const message = 'This is the list of our students';

      try {
        const studentData = await countStudents(databasePath);
        res.end(`${message}\n${studentData}`);
      } catch (error) {
        res.end(`${message}\n${error.message}`);
      }
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
