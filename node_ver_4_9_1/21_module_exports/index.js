// Destructuring Assignment doesn't work in node 4.9.1
// leaving error, now we need babel
// Babel is a JavaScript compiler that lets you convert code from ES6/ESNext 
// to a backward-compatible version of JavaScript that can run in older browsers or environments.

const {myfunction1,myfunction2,myfunction3,myfunction4,myfunction5} = require('./function01')

myfunction1('Hello World!')

myfunction2('Hello World!')


myfunction3('Hello World!')


myfunction4.displaymsg('Hello World!')

const msg = new myfunction5('Hello World!') 
msg.displaymessage()