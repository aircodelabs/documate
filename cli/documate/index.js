#!/usr/bin/env node
const { program } = require('commander');
const package = require('./package.json');

const init = require('./init');
const upload = require('./upload');

const parseArgs = async () => {
  const { command, options } = await new Promise((res, rej) => {
    program
      .name('@documate/documate')
      .description('Documate is a open source project designed to seamlessly integrate AI chat functionality into your documentation site.')
      .version(package.version);

    program.command('init')
      .description('Initialize documate.json file.')
      .option('-f, --framework <framework>', 'vue or react')
      .action((options) => {
        res({ command: 'init', options } || { command: 'init' });
      });
    ;

    program.command('upload')
      .description('Upload your content to backend and generate the knowledge base.')
      .option('-t, --token <token>', 'access token')
      .option('-b, --backend <backend>', 'upload url')
      .option('-i, --include <include>', 'include docs')
      .option('-e, --exclude <exclude>', 'exclude docs')
      .action((options) => {
        let config = {}; // root, include , exclude, backend

        try {
          config = require(`${process.cwd()}/documate.json`);
        } catch (error) {
          console.log(`Documate:Couldn't locate documate.json, we will use CLI arguments instead.`);
        }

        options.backend = options.backend || config.backend;
        if (!options.backend) {
          throw new Error('backend is required');
        }
        options.include = options.include || config.include;
        options.exclude = options.exclude || config.exclude;
        options.token = options.token || config.token;
        options.root = config.root || process.cwd();
        res({ command: 'upload', options } || { command: 'upload' });
      });

    program.parse();
  });

  return {
    command,
    options,
  };
};

const main = async () => {
  const { command, options } = await parseArgs();

  if (command === 'init') {
    await init(options);
  } else if (command === 'upload') {
    await upload(options);
  }
}

main();
