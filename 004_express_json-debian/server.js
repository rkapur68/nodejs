const express=require('express');
const hostname='0.0.0.0';
const port=80;
const app=express();

app.post('/',(req,res)=>{
  // access data from the request
  const jsonData=req.body;
  console.log('Received JSON data: ',jsonData);
  // send a response
  res.send('Data received');
} );

app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
} );
