const express = require('express');
const homeRoutes = require('./routes/home');
const secretSectionMiddleware = require('./middleware/secretSection');

const app = express();
const port = 80;
const hostname = '0.0.0.0';
var msg = '';

app.use('/', secretSectionMiddleware);
app.use('/', homeRoutes);

// LISTENING TO PORT
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
} );


/*
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
https://http.dev/webdav 
*/

// THIS WILL GET CALLED FOR EVERY EXPRESS HTTP METHOD used in your code of route '/'
// will not be called for /route1, /route2, etc. 
// app.all means here only EXPRESS HTTP METHODS USED IN your code
app.all('/',(req, res, next) => {
  msg = 'Middleware: Accessing the secret section ...';
  next(); 
});  

// MOST COMMON HTTP METHODS = EXPRESS ROUTING METHODS
// GET HTTP METHOD = EXPRESS app.get() METHOD
// can be tested by running: curl -X GET http://localhost:port
app.get('/', (req, res) => {
 msg = msg + '\nGET request to the homepage\n';
  res.send(msg);
}   );  

// POST HTTP METHOD = EXPRESS app.post() METHOD
// can be tested by running: curl -X POST http://localhost:port
app.post('/', (req, res) => {
  msg = msg + '\nPOST request to the homepage\n';
  console.log(msg);
  res.send(msg);
}  ); 

// DELETE HTTP METHOD = EXPRESS app.delete() METHOD
// can be tested by running: curl -X DELETE http://localhost:port
app.delete('/', (req, res) => {
  msg = msg + '\nDELETE request to the homepage\n';
  console.log(msg);
  res.send(msg);
}  );

// PUT HTTP METHOD = EXPRESS app.put() METHOD
// can be tested by running: curl -X PUT http://localhost:port
app.put('/', (req, res) => {
  msg = msg + '\nPUT request to the homepage\n';
  console.log(msg);
  res.send(msg);
}  );

// PATCH HTTP METHOD = EXPRESS app.patch() METHOD
// can be tested by running: curl -X PATCH http://localhost:port
app.patch('/', (req, res) => {
  msg = msg + '\nPATCH request to the homepage\n';
  console.log(msg);
  res.send(msg);
}  ); 

//WebDAV HTTP Methods
// PROPFIND HTTP METHOD = EXPRESS app.propfind() METHOD
// can be tested by running: curl -X PROPFIND http://localhost:port
app.propfind('/', (req, res) => {
  msg = msg + '\nPROPFIND request to the homepage\n';
  console.log(msg);
  res.send(msg);
}  );





