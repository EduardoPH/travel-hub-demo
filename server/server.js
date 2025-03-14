import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../src/pages')));

app.get('*', (req, res) => {
  const page = req.params[0];
  const pagePath = path.join(__dirname, `../src/pages/${page}`);

  const pageExists = fs.existsSync(pagePath) && fs.lstatSync(pagePath).isDirectory();

  if (pageExists) {
    res.sendFile(path.join(pagePath, 'index.html'));
  } else {
    const notFoundPath = path.join(__dirname, '../src/pages/404/index.html');
    res.status(404).sendFile(notFoundPath);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
