#!/usr/bin/env node
import { program } from 'commander';

import init from './init.js';
import upload from './upload.js';

const main = async () => {
  program
    .name('@documate/documate')
    .description('Documate is an open source project designed to seamlessly integrate AI chat functionality into your documentation site.')
  
  program.command('init')
    .description('Initialize Documate for your current project.')
    .option('-f, --framework <framework>', 'vue or react')
    .action(init);
  
  program.command('upload')
    .description('Upload your content to backend and generate the knowledge base.')
    .option('-t, --token <token>', 'access token')
    .option('-b, --backend <backend>', 'upload url')
    .option('-i, --include <include>', 'include docs')
    .option('-e, --exclude <exclude>', 'exclude docs')
    .action(upload);
  
  await program.parseAsync(process.argv);
}

main().catch(err => {
  console.error(err)
})

