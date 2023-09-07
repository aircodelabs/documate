const fsPromises = require('fs/promises');
const path = require('path');

const axios = require('axios');
const { glob } = require("glob");
const Spinnies = require('spinnies');

const handleError = (spinnies, name, error) => {
  let message = '';
  if (error && error.response && error.response.data) {
    message = error.response.data.error;
  } else {
    message = error.message;
  }
  spinnies.fail(name, { text: `Failed: ${message}`, successColor: 'redBright' });
  return;
}

const uploadFiles = async (uploadUrl, files) => {  
  const spinnies = new Spinnies();

  spinnies.add('preparing', {
    text: 'Preparing...',
  });
  try {
    // Currently, we refresh the knowledge base every time.
    await axios.post(uploadUrl, {
      operation: 'clean',
    });

    spinnies.succeed('preparing', { text: 'OK. Start uploading.' });
  } catch (error) {
    return handleError(spinnies, 'preparing', error);
  }
  
  spinnies.add('uploading', {
    text: `Uploading files: 0/${files.length}`
  });
  try {
    let uploadedFilesNum = 0;  

    for (const file of files) {
      await axios.post(uploadUrl, {
        operation: 'add',
        path: file.fileName,
        content: file.content,
      });

      uploadedFilesNum += 1;
      spinnies.update('uploading', {
        text: `Uploading files: ${uploadedFilesNum}/${files.length}`
      });
    }

    spinnies.succeed('uploading', { text: 'Uploading files success.' });
  } catch (error) {
    return handleError(spinnies, 'uploading', error);
  }
  
  spinnies.add('generating', {
    text: 'Generating knowledge base...'
  });
  try {
    await axios.post(uploadUrl, {
      operation: 'generate',
    });
    spinnies.succeed('generating', { text: 'Knowledge base generated. Now you can try to Ask AI in you doc site.' });
  } catch (error) {
    return handleError(spinnies, 'generating', error);
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
