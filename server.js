const http = require('http');

const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hi! This is node')
    res.end();
});
const host = 'localhost';
const port = '8080';
server.listen(port,host, ()=>{
    console.log('Listening at http://${http}:${port}');
})
