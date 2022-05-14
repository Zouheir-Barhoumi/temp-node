/**Read from files 'first.txt' and 'second.txt' asynchronously
 * Write result into a new file 'result-async.txt'
 */
const { readFile, writeFile } = require('node:fs')

// Read the first file
console.log('1.Starting')
readFile('./content/first.txt', 'utf-8', (err, res) => {
  if (err) {
    console.log(err)
    return
  }
  const first = res

  // Read the second file
  readFile('./content/second.txt', 'utf-8', (err, res) => {
    if (err) {
      console.log(err)
      return
    }
    const second = res

    // Write to first and second to 'result-async.txt'
    writeFile(
      './content/result-async.txt',
      `Here is the async result: ${first} —— ${second}... `,
      { flag: 'a' },
      (err, res) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('2.Done with the task')
      }
    )
  })
})
console.log('3.Starting next task')
