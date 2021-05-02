const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');

  res.setHeader('Content-Type', 'application/json');

  const data = JSON.stringify([
    { name: 'Tommy', age: 35 },
    { name: 'Arthur', age: 40 },
  ]);
  
  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write('<h1>Hello world!</h1>');
  // res.write('<p>My name is Yauhen</p>');


  res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
