const fs = require('fs');

// ๐ฉ
// ์ฌ์ฉ ์ค์ธ ๋ฉ๋ชจ๋ฆฌ์ ์ํ ์ ์ฅ
const beforeMem = process.memoryUsage().rss;
// file.txt๋ฅผ ์ ๋ถ ์ฝ๊ณ 
fs.readFile('./file.txt', (_, data) => {
  // ๊ทธ ๋ด์ฉ์ file2์ ์ ๋๋ค
  fs.writeFile('./file2.txt', data, () => {});
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});