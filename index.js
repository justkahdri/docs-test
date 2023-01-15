const path = require('path');
const fs = require('fs').promises;

async function getMarkdownFiles() {
  const files = await getFiles(__dirname, 3);
  return files.reduce((mdFiles, file) => {
    if (file.endsWith('.md') && !file.endsWith("README.md")) {
      const relativePath = file.slice(__dirname.length + 1);
      mdFiles.push(relativePath);
    }
    return mdFiles;
  }, []);
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

module.exports = getMarkdownFiles;
