// 노드 모듈을 불러와서 노드모듈이라는 걸 알려줌
const fs = require('fs');

// nodeJS에서 global은 웹에서의 window와 같음

console.log(global);
// 커맨드 : node 1-global/app

global.hello = () => {
  console.log('hello');
}

hello();
