const os = require('node:os')

// console.log(`My cpu info ${JSON.stringify(os.cpus()[1], ['speed'], 3)}`)

// console.log(`My cpu info //os.cpus: ${JSON.stringify(os.cpus(), null, 2)}`)

/* info about the current user */
const user = os.userInfo()
const username = os.userInfo().username
// console.log(user)
console.log(username)

// method return the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: Math.floor(os.totalmem() / 1000000) + ' MB',
  freeMem: parseInt(os.freemem / 1000000) + ' MB',
}

console.log(currentOS)
