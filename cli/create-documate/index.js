#!/usr/bin/env node
const { program } = require('commander')
const fs = require('fs-extra')
const path = require('path')
const prompts = require('prompts')

const {
  green,
  lightBlue,
  red,
  reset,
} = require('kolorist')

function pkgFromUserAgent(userAgent) {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  }
}

const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

const cwd = process.cwd()

const TEMPLATES = [
  {
    name: 'vitepress',
    display: 'VitePress',
    color: green,
  },
]

const DEFAULT_PROJECT_NAME = 'documate-vitepress-starter'

async function create(name, options) {
  let projectName = name
  let template = options.template

  let questions = []

  if (!projectName) {
    questions.push({
      type: 'text',
      name: 'projectName',
      message: reset('Enter project name:'),
      initial: DEFAULT_PROJECT_NAME,
    })
  }

  if (!template) {
    questions.push({
      type: 'select',
      name: 'template',
      message: 'Select a template:',
      initial: 0,
      choices: TEMPLATES.map((template) => {
        const templateColor = template.color || lightBlue
        return {
          title: templateColor(template.display || template.name),
          value: template,
        }
      }),
    })
  }

  if (questions.length > 0) {
    try {
      result = await prompts(
        questions,
        {
          onCancel: () => {
            throw new Error(red('✖') + ' Operation cancelled')
          },
        },
      )

      // user choice associated with prompts
      template = template || result.template.name
      projectName = projectName || result.projectName

    } catch (cancelled) {
      console.log(cancelled.message)
      return
    }
  }

  const templatePath = path.join(__dirname, 'templates', template)
  const destinationPath = path.join(cwd, projectName)

  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath)
  }

  fs.copy(templatePath, destinationPath)
    .then(() => {
      console.log(`\nScaffolding project ${projectName} in ${cwd}...`)
      console.log(`\nDone.\n`)

      console.log('  cd', projectName)

      switch (pkgManager) {
        case 'yarn':
          console.log('  yarn')
          console.log('  yarn docs:dev')
          break
        case 'pnpm':
            console.log('  pnpm install')
            console.log('  pnpm docs:dev')
            break
        default:
          console.log(`  ${pkgManager} install`)
          console.log(`  ${pkgManager} run docs:dev`)
          break
      }

      console.log('\nVisit https://documate.site for more information.')
    })
    .catch(err => console.error('err: '+ err))
}

async function main () {
  program
    .name('create-documate')
    .argument('[project-name]')
    .option('-t, --template <template>', 'Which template to use')
    .action(create)

  await program.parseAsync(process.argv)
}

main().catch(err => {
  console.error(err)
})
