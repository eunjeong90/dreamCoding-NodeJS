const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const name = 'Ellie';
const courses = [
  {name: 'HTML'}, 
  {name: 'CSS'}, 
  {name: 'JS'}, 
  {name: 'Node'},
  {name: 'Frontend'},
]
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
  // const courses = fs.createReadStream('./html/courses.html', {flags: 'r'});
  const notFound = fs.createReadStream('./html/not-found.html', {flags: 'r'});
  if(url === '/') {
    ejs
    .renderFile('./template/index.ejs', {name})
    .then(data => res.end(data));
  } else if(url === '/courses') {
    ejs
    .renderFile('./template/courses.ejs', {courses})
    .then(data => res.end(data));
  } else {
    ejs
    .renderFile('./template/not-found.ejs', {name})
    .then(data => res.end(data));
  };
  // res.end();
});

// create한 server를 listen으로 포트와 연결시킨다
server.listen(8080);