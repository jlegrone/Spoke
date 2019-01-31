import {
  readdirSync,
  readFileSync
} from 'fs'
import path from 'path'

const schema = []

const normalizedPath = path.join(__dirname, './definitions')

readdirSync(normalizedPath).forEach((file) => {
  schema.push(readFileSync(path.join(normalizedPath, file)).toString())
})

module.exports = {
  schema
}
