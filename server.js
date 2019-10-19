const express = require('express');
const app = express();
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});