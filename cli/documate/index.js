#!/usr/bin/env node
const { program } = require('commander');
const package = require('./package.json');

const readFiles = require('./files');
const upload = require('./upload');

const parseArgs = async (config = {}) => {
  const options = await new Promise((res, rej) => {
    program
    .name('@documate/cli')
    .description('Documate is a open source project designed to seamlessly integrate AI chat functionality into your documentation site.')
    .version(package.version);

    // program.command('init');

    program.command('upload')
    .description('Upload your content to backend and generate the knowledge base.')
    .option('-t, --token <token>', 'access token')
    .option('-b, --backend <backend>', 'upload url')
    .option('-i, --include <include>', 'include docs')
    .option('-e, --exclude <exclude>', 'exclude docs')
    .action((options) => {
      res(options || {});
    });

    program.parse();
  });

  options.backend = options.backend || config.backend;
  if (!options.backend) {
    throw new Error('backend is required');
  }
  options.include = options.include || config.include;
  options.exclude = options.exclude || config.exclude;
  options.token = options.token || config.token;
  options.root = config.root || process.cwd();

  console.log('Documate:options:: ', options);
  return options;
};

const main = async () => {
  let config = {}; // root, include , exclude, backend

  try {
    config = require(`${process.cwd()}/documate.json`);
  } catch (error) {
    console.log(`Documate:Couldn't locate documate.json, we will use CLI arguments instead.`);
  }

  const options = await parseArgs(config);
  
  const files = await readFiles(options);
  await upload(options.backend, files, config.token);
}

main();
