const { promisify } = require('util');
const fs = require('fs');

const copyFile = promisify(fs.copyFile);

async function main() {
  try {
    await copyFile('file.txt', 'copyfile.txt');
    console.log('File is copied!');
  } catch (err) {
    throw err;
  }
}

main();