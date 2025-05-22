import * as http from "http";
import * as fs from 'fs/promises';

const server: http.Server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const url: string | undefined = req.url;
    const headers: http.OutgoingHttpHeaders = { 'Content-Type': 'text/html' };

    if (url === '/') {
        try {
            const data: string = await fs.readFile('index.html', 'utf8')
            res.writeHead(200, headers)
            res.write(data);
            res.end();
    } catch (err: unknown) {
            res.writeHead(500, headers);
            res.write('<h1>500 Internal Server Error</h1><p>Could not read file.</p>');
            res.end();
        }
    } else if (url === '/about') {
        try {
          const data: string = await fs.readFile('about.html', 'utf8');
          res.writeHead(200, headers);
          res.write(data);
          res.end();
        } catch (err: unknown) {
          res.writeHead(500, headers);
          res.write('<h1>500 Server Error</h1><p>Could not read file.</p>');
          res.end();
        }
      } else {
        res.writeHead(404, headers);
        res.write('<h1>404 Not Found</h1><p>The page you requested does not exist.</p>');
        res.end();
    }
})

server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})