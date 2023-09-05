const fsPromises = require('fs/promises');
const path = require('path');

const axios = require('axios');
const { glob } = require("glob");
const Spinnies = require('spinnies');

const uploadFiles = async (uploadUrl, files, token = '') => {  
  const spinnies = new Spinnies();

  try {
    const concurrency = 6;
    let activePromises = [];
    let uploadedFilesNum = 0;
    
    spinnies.add('uploading', {
      text: `uploading files: 0/${files.length}`
    });
    for (const file of files) {
      const promise = axios.post(uploadUrl, {
        state: 'uploading',
        content: file.content,
        fileName: file.fileName,
      }, {
        headers: { token },
      });

      activePromises.push(promise);

      if (activePromises.length === concurrency) {
        await Promise.race(activePromises).then(() => {
          uploadedFilesNum += 1;
          spinnies.update('uploading', {
            text: `uploading files: ${uploadedFilesNum}/${files.length}`
          });
          activePromises = activePromises.filter(p => p !== promise);
        });
      }
    }

    await Promise.all(activePromises);
    spinnies.succeed('uploading', { text: 'Uploading Files Success!', successColor: 'greenBright' });

    await axios.post(uploadUrl, {
      state: 'finish',
      mode: 'all',
    }, {
      headers: {
        token,
      }
    });
  } catch (error) {
    spinnies.fail('uploading', { text: `Uploading Files Failed Because ${error.message}!`, successColor: 'redBright' });

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
  const files = await readFiles(config);
  await uploadFiles(config.backend, files, config.token);
};

module.exports = upload;
