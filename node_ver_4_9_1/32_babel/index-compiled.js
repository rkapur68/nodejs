'use strict';

// check package.json
// here we create new file
// which can be run using node command
// which was earlier not possible


var _require = require('./myfunctions'),
    function1 = _require.function1,
    function2 = _require.function2,
    function3 = _require.function3,
    function4 = _require.function4,
    function5 = _require.function5;

var msg = 'Hello World!';
function1(msg);
function2(msg);
function3(msg);
function4.displaymsg(msg);
new function5(msg).displaymsg();
