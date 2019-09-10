var http = require('http');
const url = require('url');
const querystring = require('querystring')
const start = (route,handle) =>{
    http.createServer((req,res)=>{
        res.writeHead(200,{'content-type':'text/plain'});
        // if(querystring.parse(req.url).name === 'login' ){
        //     res.write('login page')
        //     res.end();
        //     route('login')
        // }else if(querystring.parse(req.url).name === 'registry' ){
        //     res.write('registry page')
        //     res.end();
        //     route('registry')
        // }else{
        //     res.write('hello');
        //     res.end();
        //     console.log('hello')
        // }
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle,pathname)
        res.write('hello')
        res.end();
    }).listen(3000)
    console.log('server has start')
}
exports.start = start;

// http.createServer((req,res)=>{
//     // if(req.query.action==='login'){
//     //     res.writeHead(200,{'content-type':'text/plain'});
//     //     res.write('hello');
//     //     res.end();
//     // }
//     res.writeHead(200,{'content-type':'text/plain'});
//     res.write('hello');
//     res.end();
//     console.log(req.url);
//     console.log(res)
// }).listen(3000)
// console.log('server has start')