//Install express server
const express = require('express');
const path = require('path');

const app = express();

// All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });