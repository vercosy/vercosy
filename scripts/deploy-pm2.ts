import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.resolve(__dirname, '../.next')
const standaloneDir = path.resolve(outDir, 'standalone')

execSync(`cp -r ${path.join(outDir, 'static')} ${path.join(standaloneDir, 'static')}`)
execSync(`cp -r ${path.join(__dirname, '..', 'public')} ${path.join(standaloneDir, 'public')}`)
