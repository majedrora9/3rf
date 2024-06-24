const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('I am alive!');
}).listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port ' + (process.env.PORT || 3000));
});