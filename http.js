const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello everybody')
    }else if(req.url === '/about') {
        res.end('here is the short history')
    } else {
        res.end(`
    <h1>oops</h1>
    <p>Cannot find the page you are looking for</p>
    <a href="/">Home</a>
    `)
    }
})
server.listen(5000)
