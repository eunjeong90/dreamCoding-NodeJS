const fs = require('fs');

// 3가지 형태
// rename(..., callback(error, data)) 비동기형태
// try {renameSync(...)} catch(e) {} 블러킹
// promises.rename().then().catch(0)

try {
  fs.renameSync('./test.txt', './test-new.txt');
} catch (error) {
  console.log(error);
}
// console.log('hello');

fs.rename('./test-new.txt', './test.txt', (error) => {
  console.log(error);
})
console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt') //
  .then(() => console.log('Done!'))
  .catch(console.error);