const fs = require('fs');

// 💩
// 사용 중인 메모리의 상태 저장
const beforeMem = process.memoryUsage().rss;
// file.txt를 전부 읽고
fs.readFile('./file.txt', (_, data) => {
  // 그 내용을 file2에 적는다
  fs.writeFile('./file2.txt', data, () => {});
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});