import 'zx/globals'
import path from 'node:path'
import { readdir } from 'node:fs/promises'

const PROJECT_DIR = path.resolve(__dirname, '..')
const TARGET_DIR = path.resolve(PROJECT_DIR, 'templates')
const SOURCE_DIR = path.resolve(PROJECT_DIR, '../../examples')

await $`rm -rf ${TARGET_DIR}`

const templates = (await readdir(SOURCE_DIR, { withFileTypes: true }))
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

for (let template of templates) {
  const templateDir = path.resolve(SOURCE_DIR, template)
  const ignorePath = path.resolve(templateDir, '.gitignore')
  await $`rsync -rv --exclude-from=${ignorePath} ${templateDir} ${TARGET_DIR}`
}
