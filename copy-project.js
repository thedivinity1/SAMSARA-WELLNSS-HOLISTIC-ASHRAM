const fs = require('fs');
const path = require('path');

const source = __dirname;
const destination = 'C:\\samsara-wellness-temp';

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') {
      continue;
    }

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.error(`Failed to copy ${srcPath}: ${err.message}`);
      }
    }
  }
}

console.log(`Copying from ${source} to ${destination}...`);
copyRecursive(source, destination);
console.log('Copy complete!');
