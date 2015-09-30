'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _http = require('http');

var http = _interopRequireWildcard(_http);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _svg_test = require('./svg_test');

var _svg_test2 = _interopRequireDefault(_svg_test);

var dom = _react2['default'].renderToStaticMarkup(_react2['default'].createElement(_svg_test2['default'], null));
console.log(dom);

var PORT = 8000;

// let server = http.createServer(function(req, res) {
//     console.log(`${req.method}: ${req.url}`);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('This is working and stuff');
//     res.end();
// });

var server = http.createServer();

server.on('request', function (req, res) {
    if (req.url === '/favicon.ico') return;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(dom);
    res.end();
    console.log(req.method + ': ' + req.url);
});

server.listen(PORT);
console.log('Listening on port ', PORT);