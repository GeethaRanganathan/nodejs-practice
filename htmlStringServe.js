const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    const htmlTemplate =`
    <html>
        <head>
            <title>Serving node JS </title>
        </head>
        <body>
            <h1>Hello! This is NodeJS server!!!</h1>
        </body>
    </html>
    `;
    res.write(htmlTemplate);
    res.end();

});
server.listen('3000', 'localhost', () =>{
    console.log('Listening at http://localhost:3000');
});