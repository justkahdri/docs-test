const path = require('path');
const fs = require('fs').promises;

async function getMarkdownFiles() {
  const files = await fs.readdir(path.join(__dirname));
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(__dirname, file));
}

module.exports = getMarkdownFiles;
