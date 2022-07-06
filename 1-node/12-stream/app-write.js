const fs = require('fs');

const writesStream = fs.createWriteStream('./file3.txt');
writesStream.on('finish', () => {
  console.log('finished!');
})

writesStream.write('hello!');
writesStream.write('world!');
writesStream.end();