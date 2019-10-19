//Install express server    
const express = require('express');
const path = require('path');   
const app = express();   

// Serve only the static files form the dist directory    


app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')) ) ;
