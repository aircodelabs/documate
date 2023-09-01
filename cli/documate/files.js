const { glob } = require("glob");
const fsPromises = require('fs/promises');
const path = require('path');

const _readFilesRecursivelyFromPath = async (dirPath) => {
  let results = [];

  const files = await fsPromises.readdir(dirPath);
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fsPromises.stat(filePath);

    if (stats.isDirectory()) {
      results = results.concat(await _readFilesRecursivelyFromPath(filePath));
    } else {
      if (!filePath.endsWith('.md')) {
        continue;
      }
      const content = await fsPromises.readFile(filePath, 'utf8');
      if (content.length !== 0) {
        results.push({ fileName: path.relative(dirPath, filePath), content });
      }
    }
  }

  return results;
};

const _readFilesFromFileNames = async (fileNames) => {
  const results = [];
  for (const fileName of fileNames) {
    const content = await fsPromises.readFile(fileName, 'utf8');
    if (content.length !== 0) {
      results.push({ fileName, content });
    }
  }
  return results;
};

const readFiles = async (config = {}) => {
  let files;

  if (config.include) {
    const fileNames = await glob(config.include, { ignore: 'node_modules/**' })
    files = await _readFilesFromFileNames(fileNames);
  } else {
    console.log(`Documate:Couldn't locate documate.json in ${process.cwd()}. Files will be sourced from CLI arguments; if none provided, the current directory will be used.`);
    const path = process.argv[3] || process.cwd();
    console.log('Documate:path:: ', path);
    files = await _readFilesRecursivelyFromPath(path);
  }
  
  console.log('Documate:files nums:: ', files.length);
  return files;
};

module.exports = readFiles;
