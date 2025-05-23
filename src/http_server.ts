import * as http from "http";
import * as fs from 'fs/promises';

const server: http.Server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const url: string | undefined = req.url;
    const method: string = req.method || "GET";
    const headers: http.OutgoingHttpHeaders = { 'Content-Type': 'text/html' };

    if (url === '/' && method === 'GET') {
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
      } else if (url === '/submit' && method === 'POST') {
        let body: string = '';
        req.on('data', (chunk: Buffer) => {
            body += chunk.toString();
        })
        req.on('end', () => {
            res.writeHead(200, headers);
            res.write(`<h1>Received POST Data</h1><p>Data: ${body}</p>`);
            res.end();
        })
      }else {
        res.writeHead(404, headers);
        res.write('<h1>404 Not Found</h1><p>The page you requested does not exist.</p>');
        res.end();
    }
})

server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})