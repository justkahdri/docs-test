const path = require('path');
const fs = require('fs').promises;

async function getMarkdownSlugs() {
  const files = await getFiles(__dirname, 3);
  return files
    .filter(file => file.endsWith('.md') && !file.endsWith("README.md"))
    .map(file => path.basename(file, '.md'));
}

async function getAbsolutePath(name) {
  const files = await getFiles(__dirname, 3);
  return files.find(file => path.basename(file, '.md') === name)
}

async function getFiles(folder, depth) {
  let files = [];
  if(depth > 0) {
    const folderContent = await fs.readdir(folder);
    files = await Promise.all(folderContent.map(async name => {
      const file = path.resolve(folder, name);
      return (await fs.stat(file)).isDirectory() ? getFiles(file, depth - 1) : file;
    }));
    files = files.flat();
  }
  return files;
}

module.exports = {
  getMarkdownSlugs,
  getAbsolutePath
};
