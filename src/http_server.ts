import * as http from "http";

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const headers: http.OutgoingHttpHeaders = { 'Content-Type': 'text/plain' };
    res.writeHead(200, headers)
    res.write('<h1>Welcome to my TypeScript Server!</h1>');
    res.end();
})

server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})