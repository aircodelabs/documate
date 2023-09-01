#!/usr/bin/env node
const readFiles = require('./files');
const upload = require('./upload');

const readUploadUrl = (config = {}) => {
  const uploadUrl = config.backend || process.argv[2];

  if (!uploadUrl) {
    throw new Error('uploadUrl is required');
  }

  console.log('Documate:uploadUrl:: ', uploadUrl);
  return uploadUrl;
}

const main = async () => {
  let config = {};

  try {
    config = require(`${process.cwd()}/documate.json`);
  } catch (error) {
    console.log(`Documate:Couldn't locate documate.json, we will use CLI arguments instead.`);
  }
  const uploadUrl = readUploadUrl(config);
  const files = await readFiles(config);
  await upload(uploadUrl, files, config.token);
}

main();
