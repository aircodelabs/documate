const { glob } = require("glob");
const fsPromises = require('fs/promises');
const path = require('path');

const _readFilesFromFileNames = async (rootPath, fileNames) => {
  const results = [];
  for (const fileName of fileNames) {
    const content = await fsPromises.readFile(path.join(rootPath, fileName), 'utf8');
    if (content.length !== 0) {
      results.push({ fileName, content });
    }
  }
  return results;
};

const readFiles = async (config = {}) => {
  let ignore = [];
  if (config.exclude) {
    ignore = Array.isArray(config.exclude) ? config.exclude : [config.exclude];
  }
  ignore.push('node_modules/**');

  const include = config.include || '**';

  const fileNames = await glob(include, { ignore, cwd: config.root })
  const files = await _readFilesFromFileNames(config.root, fileNames);
  
  console.log('Documate:files nums:: ', files.length);
  return files;
};

module.exports = readFiles;
