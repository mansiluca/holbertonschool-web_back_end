const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';
const dbPath = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    try {
      const studentsData = await countStudents(dbPath);
      res.end(studentsData.join('\n'));
    } catch (error) {
      res.end(`${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(port, host, () => {
  // console.log(`Base: http://${host}:${port}`);
  // console.log(`Students: http://${host}:${port}/students`);
});

module.exports = app;
