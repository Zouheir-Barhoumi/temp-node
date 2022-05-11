const path = require('node:path')

console.log(path.delimiter)
console.log(path.sep)

const filepath = path.join('/content/', 'subfolder', 'text.txt')
console.log(filepath)
console.log(path.basename(filepath))

const absolute_path = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'text.txt'
)

console.log(absolute_path)
