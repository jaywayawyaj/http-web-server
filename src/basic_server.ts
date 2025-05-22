import * as http from "http";

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write("Hello world");
    res.end();
})

server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})