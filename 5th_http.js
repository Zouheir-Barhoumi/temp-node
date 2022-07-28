const http = require('http')

const server = http.createServer((req, res) => {
  //   res.write('Welcome to my server')
  //   //   End the writing stream with a final writable
  //   res.end('!!!')
  if (req.url === '/') {
    res.end('Welcome to my homepage!!!')
  }
  if (req.url === '/about') {
    res.end("Here is my web server's short history")
  }
  res.end(`<h1>Oops!</h1>`)
})
server.listen(3000)
