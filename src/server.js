import * as http from 'http';
import React from 'react';
import SVGTest from './svg_test';

var dom = React.renderToStaticMarkup(<SVGTest/>);
console.log(dom);

const PORT = 8000;

// let server = http.createServer(function(req, res) {
//     console.log(`${req.method}: ${req.url}`);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('This is working and stuff');
//     res.end();
// });

let server = http.createServer();

server.on('request', function(req, res) {
    if (req.url === '/favicon.ico') return;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dom);
    res.end();
    console.log(`${req.method}: ${req.url}`);
});

server.listen(PORT);
console.log('Listening on port ', PORT);
