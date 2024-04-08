// here you will see 32_babel will work
// without babel as we are now in node 8.17.0
// where destructuring is supported , hence no need of babel

const {function1,function2,function3,function4,function5} = require('./myfunctions')
const msg = 'Hello World!'

function1(msg)
function2(msg)
function3(msg)
function4.displaymsg(msg)
new function5(msg).displaymsg()