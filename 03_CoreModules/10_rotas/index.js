const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = q.pathname.substring(1);

    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {
            fs.readFile(filename, function(err, data) {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 Not Found");
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("404 Not Found");
            return res.end();
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("404 Not Found");
        return res.end();
    }
});

server.listen(8080);
