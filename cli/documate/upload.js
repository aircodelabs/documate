const axios = require('axios');
const { glob } = require("glob");
const fsPromises = require('fs/promises');
const path = require('path');

const uploadFiles = async (uploadUrl, files, token = '') => {  
  try {
    // Only accepts 30 requests per second
    const chunkSize = 30;
    for (let startIndex = 0; startIndex < files.length; startIndex += chunkSize) {
      const startTime = Date.now();
  
      console.log('Documate:uploading files');
      const subArray = files.slice(startIndex, startIndex + chunkSize);
  
      const promises = subArray.map((file) => {
        return axios.post(uploadUrl, {
          state: 'uploading',
          content: file.content,
          fileName: file.fileName,
        }, {
          headers: {
            token,
          }
        });
      });
  
      await Promise.all(promises);
      const processIndex = startIndex + chunkSize > files.length ? files.length : startIndex + chunkSize;
      console.log(`Documate:upload files:: ${processIndex}/${files.length}, duration: ${Date.now() - startTime} ms`);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    await axios.post(uploadUrl, {
      state: 'finish',
      mode: 'all',
    }, {
      headers: {
        token,
      }
    });
    console.log('Documate:uploaded all files');
  } catch (error) {
    console.error(error);
    await axios.post(uploadUrl, {
      state: 'finish',
      mode: 'clear',
    }, {
      headers: {
        token,
      }
    });
  }
};

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

const upload = async (config = {}) => {
  const files = await readFiles(options);
  await uploadFiles(options.backend, files, config.token);
};

module.exports = upload;
