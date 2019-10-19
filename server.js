//Install express server    
const express = require('express');
const path = require('path');   
const app = express();   

// Serve only the static files form the dist directory    


app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});