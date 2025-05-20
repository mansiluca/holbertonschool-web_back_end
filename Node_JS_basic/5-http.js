const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    const message = 'This is the list of our students';

    try {
      const studentData = await countStudents(databasePath);
      res.end(`${message}\n${studentData}`);
    } catch (error) {
      res.end(`${message}\n${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
