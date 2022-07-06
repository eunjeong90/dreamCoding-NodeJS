const http = require('http');
const fs = require('fs');
// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  // 한글을 쓰고 싶을 때
  // res.writeHead(200,{'content-Type':'text/html; charset=utf-8'});
  
  const url = req.url;
  const index = fs.createReadStream('./html/index.html', {flags: 'r'});
  const courses = fs.createReadStream('./html/courses.html', {flags: 'r'});
  const notFound = fs.createReadStream('./html/not-found.html', {flags: 'r'});
  if(url === '/') {
    res.setHeader('Content-Type', 'text/html');
    index.pipe(res);
  } else if(url === '/courses') {
    res.setHeader('Content-Type', 'text/html');
    courses.pipe(res)
  } else {
    res.setHeader('Content-Type', 'text/html');
    notFound.pipe(res)
  };
  // res.end();
});

// create한 server를 listen으로 포트와 연결시킨다
server.listen(8080);