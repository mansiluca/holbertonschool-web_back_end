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

    const studentsByField = {};
    let totalStudents = 0;

    for (const line of lines) {
      const [firstName, , , field] = line.split(',');
      if (firstName && field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
        totalStudents += 1;
      }
    }

    let result = `Number of students: ${totalStudents}`;
    for (const [field, names] of Object.entries(studentsByField)) {
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
    res.write('This is the list of our students\n');

    try {
      const data = await countStudents(process.argv[2]);
      res.end(data);
    } catch (error) {
      res.end(`${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
