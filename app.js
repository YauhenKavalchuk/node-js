const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt');
const compressStream = zlib.createGzip();

// readStream.on('data', (chunk) => {
//   console.log('---------');
//   console.log(chunk.toString());
//   writeStream.write('\n ---CHUNK START--- \n');
//   writeStream.write(chunk);
//   writeStream.write('\n ---CHUNK END--- \n');
// });

const handleError = () => {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error...');
};

readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError);
