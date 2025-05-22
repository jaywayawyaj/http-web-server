import * as http from "http";

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const url: string | undefined = req.url;
    const headers: http.OutgoingHttpHeaders = { 'Content-Type': 'text/plain' };

    if (url === '/') {
        res.writeHead(200, headers)
        res.write('<h1>Welcome to the home page!</h1>');
    } else if (url === '/about') {
        res.writeHead(200, headers)
        res.write('<h1>About page</h1><p>This is the about page</p>')
    } else {
        res.writeHead(404, headers);
        res.write('<h1>404 Not Found</h1><p>The page you requested does not exist.</p>');
    }
    res.end();
})

server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})