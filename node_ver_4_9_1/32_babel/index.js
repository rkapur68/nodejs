// check package.json
// here we create new file
// which can be run using node command
// which was earlier not possible
// you can see when we run npm run build-and-run
// new file will be created index-compiled.js
// look in that code, code is changed that can
// run on node v 4.9.1
// below code on line 11 is called destructuring
// which is not fully supportrd till node release 6.0.0
// also called ECMAScript6(ES6)

const {function1,function2,function3,function4,function5}=require('./myfunctions')
const msg = 'Hello World!'
function1(msg)
function2(msg)
function3(msg)
function4.displaymsg(msg)
new function5(msg).displaymsg()