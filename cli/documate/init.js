import fsPromises from 'fs/promises';
import { detect } from 'detect-package-manager';
import Spinnies from 'spinnies';
import { $ } from 'execa';
import prompts from 'prompts';

const cwd = process.cwd();

const installWithUserPackageManager = async (framework)=> {
  const frameworkPkg = `@documate/${framework}@latest`
  const cli = `@documate/documate@latest`

  let pkgManager = await detect();
  if (!pkgManager) pkgManager = 'npm';

  switch (pkgManager) {
    case 'yarn':
      await $`yarn add ${frameworkPkg}`;
      await $`yarn add ${cli} -D`;
      break
    case 'pnpm':
      await $`pnpm i ${frameworkPkg}`;
      await $`pnpm i ${cli} -D`;
      break
    case 'bun':
      await $`bun add ${frameworkPkg}`;
      await $`bun add ${cli} -D`;
      break
    default:
      await $`npm i ${frameworkPkg}`;
      await $`npm i ${cli} -D`;
      break
  }
}

const injectScript = async () => {
  const packageJsonPath = `${cwd}/package.json`;
  const data = await fsPromises.readFile(packageJsonPath, 'utf-8');
  const packageJsonData = JSON.parse(data);
  if (!packageJsonData.scripts) {
    packageJsonData.scripts = {};
  }
  packageJsonData.scripts['documate:upload'] = 'documate upload';
  await fsPromises.writeFile(
    packageJsonPath,
    JSON.stringify(packageJsonData, null, 2),
    'utf8'
  );
}

const generateDocumateJson = async () => {
  const filePath = `${cwd}/documate.json`;
  try {
    await fsPromises.access(filePath);
  } catch (error) {
    await fsPromises.writeFile(filePath, JSON.stringify({
      "root": ".",
      "include": [ "**/*.md", "**/*.mdx" ],
      "backend": ""
    }, null, 2))
  }
};

const init = async (options) => {
  console.log('Start initializing the project with Documate.\n');

  const spinnies = new Spinnies();

  let { framework } = options;
  if (!framework) {
    const result = await prompts({
      type: 'select',
      name: 'framework',
      message: 'Which framework are you using?',
      choices: [
        { title: 'Vue', value: 'vue' },
        { title: 'React', value: 'react' },
      ],
    });
    framework = result.framework;
  }

  spinnies.add('installing', { text: 'Installing dependencies...' });
  try {
    await installWithUserPackageManager(framework);
    spinnies.succeed('installing', { text: 'Dependencies installed.' });
  } catch (error) {
    spinnies.fail('installing', { text: 'Dependencies installation failed.' });
    throw error;
  }

  spinnies.add('config', { text: 'Generating documate.json...' });
  try {
    await generateDocumateJson();
    spinnies.succeed('config', { text: 'documate.json generated.' });
  } catch (error) {
    spinnies.fail('config', { text: 'documate.json generation failed.' });
    throw error;
  }

  spinnies.add('injecting', { text: 'Adding script to package.json...' });
  try {
    await injectScript();
    spinnies.succeed('injecting', { text: 'Script added to package.json.' });
  } catch (error) {
    spinnies.fail('injecting', { text: 'Script injection failed.' });
    throw error;
  }

  console.log('\nDone.');
  console.log('To learn how to build and connect your backend, please visit https://documate.site/getting-started/backend.')
};

export default init;
