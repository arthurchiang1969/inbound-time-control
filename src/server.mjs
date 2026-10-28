import { createServer } from 'node:http';
import { renderApp } from './ui.mjs';
const port = Number(process.env.PORT || 3000);
createServer((request, response) => { if (request.url !== '/') { response.writeHead(404); return response.end('Not found'); } response.writeHead(200, {'content-type':'text/html; charset=utf-8'}); response.end(renderApp()); }).listen(port, () => console.log(`入庫時間控制展示版：http://localhost:${port}`));
