// Express is a Route Handler and MiddleWare
// Routing: Matching URLs to specific functions (route handlers).
// Middleware: Customizable code that executes during each request,
//             allowing for pre-processing, post-processing, and
//             error handling.
const express = require("express");
const app = express();
const hostname = "0.0.0.0";
const port = 80;

app.get("/", (req, res) => {
  res.send("Hello, World from Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
