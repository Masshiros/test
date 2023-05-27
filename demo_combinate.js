const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function main() {
  try {
    const content1 = await readFile('file1.txt', 'utf8');
    const content2 = await readFile('file2.txt', 'utf8');

    const combinedContent = content1.trim() + ' ' + content2.trim();
    await writeFile('file3.txt', combinedContent);

    const file3Content = await readFile('file3.txt', 'utf8');
    console.log('Content of file3.txt:', file3Content);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();