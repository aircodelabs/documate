import fsPromises from 'fs/promises';
import path from 'path';

import axios from 'axios';
import { glob } from 'glob';
import Spinnies from 'spinnies';

const cwd = process.cwd();

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
  
  spinnies.add('uploading', {
    text: `Uploading files: 0/${files.length}`
  });
  try {
    let uploadedFilesNum = 0;  

    for (const file of files) {
      spinnies.update('uploading', {
        text: `Uploading files: ${uploadedFilesNum}/${files.length} ${file.fileName}`
      });

      await axios.post(uploadUrl, {
        operation: 'add',
        path: file.fileName,
        content: file.content,
      });

      uploadedFilesNum += 1;
    }

    spinnies.succeed('uploading', { text: `${files.length} files uploaded.` });
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
    spinnies.succeed('generating', { text: 'Knowledge base generated.' });
  } catch (error) {
    return handleError(spinnies, 'generating', error);
  }

  console.log('\nDone.');
  console.log('Now you can try to Ask AI in you doc site.');
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

  return files;
};

const upload = async (options) => {
  console.log('Start uploading files to backend.\n');

  let config = {}; // root, include , exclude, backend

  try {
    const data = await fsPromises.readFile(`${cwd}/documate.json`, 'utf-8');
    config = JSON.parse(data);
  } catch (error) {
    console.log(`Documate: Couldn't locate documate.json, we will use CLI arguments instead.\n`);
  }

  config.backend = options.backend || config.backend;
  if (!config.backend) {
    throw new Error('The parameter `backend` is required.');
  }
  config.include = options.include || config.include;
  config.exclude = options.exclude || config.exclude;
  config.token = options.token || config.token;
  config.root = options.root || config.root || cwd;

  const files = await readFiles(config);
  await uploadFiles(config.backend, files, config.token);
};

export default upload;
