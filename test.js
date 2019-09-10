const http = require('http');
const url = require('url');

const router = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    res.write('请求的路径是')
    console.log(req.query.name)
    res.end()
})
console.log('server is running....')

exports.router = router