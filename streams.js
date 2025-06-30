const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// readStream.on('data', (chunk) => {
//   console.log('----- New chunk received: -----');
//   console.log(chunk);

//   writeStream.write('\n----- New chunk received: -----\n');
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);

// readStream.on('end', () => {
//   console.log('Stream ended');
//   writeStream.end();
// });