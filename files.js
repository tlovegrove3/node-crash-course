// reading files
const { log } = require('console');
const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log('Last line');


// writing files

// fs.writeFile('./docs/blog2.txt', 'Hello, world 2', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('File was written');
// });

// directories

// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('Directory created');
//   });
// }else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('Directory removed');
//   });
// }

// deleting files

// if (fs.existsSync('./docs/deleteme.txt')) { 
//   fs.unlink('./docs/deleteme.txt', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('File deleted');
//   });
// }