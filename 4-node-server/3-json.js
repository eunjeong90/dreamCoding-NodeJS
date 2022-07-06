const http = require('http');

const courses = [
  {name: 'HTML'}, 
  {name: 'CSS'}, 
  {name: 'JS'}, 
  {name: 'Node'},
  {name: 'Frontend'},
]

const server = http.createServer((req, res) => {
  const url = req.url; // what?
  const method = req.method; // how?, action?
  if(url === '/courses') {
    if(method === 'GET') {
      res.writeHead(200, {'Content-Type' : 'application/json' });
      res.end(JSON.stringify(courses));
      // 브라우저에서는 POST를 확인할 수 있는 방법이 없음
    } else if(method === 'POST') {
      const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(course);
        res.writeHead(201);
        res.end();
      })
    }
  }
});

// create한 server를 listen으로 포트와 연결시킨다
server.listen(8080);