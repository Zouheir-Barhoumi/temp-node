/** Read from files 'first.txt' and 'second.txt' synchronously
 * Write/append the result into a new file 'result-file.txt'
 */

const { readFileSync, writeFileSync } = require('node:fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// write with append flag
writeFileSync(
  './content/result-file.txt',
  `Here is the result: ${first} —— ${second}... `,
  { flag: 'a' }
)
