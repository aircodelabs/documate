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

const TEMPLATES = [
  {
    name: 'vitepress',
    display: 'vitepress',
    color: green,
  }
]

async function main () {

  const cwd = process.cwd()
  const root = path.join(cwd)

  const defaultProjectName = 'vitepress-documate-starter'

  async function init() {

    const options = program.opts()
    let projectName = options.projectName || program.args[0]
    let template = options.template

    let questions = []

    if (!projectName) {
      questions.push({
        type: projectName ? null : 'text',
        name: 'projectName',
        message: reset('Project name:'),
        initial: options.projectName || defaultProjectName,
      })
    }

    if (!template) {
      questions.push({
        type: 'select',
        name: 'template',
        message:`Please select a template from below: `,
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
      template = template || (result.template ? result.template.name : null);
      projectName = projectName || result.projectName

      } catch (cancelled) {
        console.log(cancelled.message)
        return
      }
    }
  
    const templatePath = path.join(__dirname, 'templates', template)
    const destinationPath = path.join(process.cwd(), projectName)
  
    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath)
    }
  
    fs.copy(templatePath, destinationPath)
      .then(() => {
        console.log(`\nScaffolding project ${projectName} with ${template} template in ${root}...`)
        console.log(`\nDone. cd ${projectName}, run:\n`)
  
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
      })
      .catch(err => console.error('err: '+ err))
  }

  program
  .option('--project-name <project-name>', 'Name of the project')
  .option('--template <template>', 'Which template to use')
  .action(() => {
    init()
  })

  await program.parseAsync()

}

main().catch(err => {
  console.error(err)
})
