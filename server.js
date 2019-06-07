'use strict';

const express = require('express');
const fetch = require('node-fetch');
const secretModule = require('./secretm');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
//process.env.NODE_ENV = 'prod';

(async () => {
  await secretModule.loopSecrets();

  // App
  const app = express();
  app.get('/', (req, res) => {
    res.send('my secrets are: ' + process.env.MAILGUN_KEY + '\n');
  });

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
})();
