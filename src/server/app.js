const express = require('express');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const getView = require('./getView');

const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
}

app.use('/dist', express.static('dist'));

app.get('/favicon.ico', (req, res) => {
  res.send();
});

app.get('*', async (req, res, next) => {
  try {
    const manifest = fs.readFileSync(path.join(__dirname, '../../dist/manifest.json'), { encoding: 'utf-8' });
    const assets = JSON.parse(manifest);
    const html = getView('VICE', assets);
    res.send(html);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

app.listen(PORT, () => console.log(`App running on ${PORT}`));