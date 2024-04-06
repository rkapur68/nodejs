const express = require('express');
const path = require('path');
const hostname = '0.0.0.0';
const port = 80;
const app = express();


app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
} );

