// @babel/core is the engine that powers Babel

// @babel/cli is the command-line tool that lets you use Babel from your terminal

// @babel/preset-env is a preset that automatically determines the Babel plugins you need 
// based on your supported environments

// @babel-node is a CLI that works exactly the same as the Node.js CLI, 
// with the added benefit of compiling with Babel presets and plugins before running it

// Node 4.x: No specific preset found. You can use babel-preset-es2015.
// Node 5.x: babel-preset-node567
// Node 6.x: babel-preset-node689
// Node 7.x: babel-preset-node710
// Node 8.x: babel-preset-node811
// Node 9.x: No specific preset found. You can use @babel/preset-env
// Node 10.x: No specific preset found. You can use @babel/preset-env
// Node 11.x: No specific preset found. You can use @babel/preset-env
// Node 12.x: babel-preset-latest-node



// Babel 6.x
// Introduced the concept of presets and plugins1.
// Configuration was typically done in a .babelrc file or babel field in package.json.

// Babel 7.x
// Introduced babel.config.json and .babelrc.json as new file formats for configuration.
// Added support for JavaScript configuration files with .js and .cjs extensions.
// Introduced the concept of a “root” directory, which defaults to the current working directory.
// Project-wide configuration can be done in babel.config.* files.
// File-relative configuration can be done in .babelrc.* files.


// Babel 7.7.0
// Added support for .babelrc.json and babel.config.json file formats.

// Babel 7.8.0
// Added support for .babelrc.mjs and babel.config.mjs file formats.

//Babel 7.21.0 (Experimental)
// Added support for .babelrc.cts and babel.config.cts file formats


// step 1: npm init -y
// step 2: npm install --save-dev babel-cli@6 babel-preset-es2015
// step 3: .babelrc file --- see file
// step 4: add this line in package.json under scripts
//         "start": "babel-node --presets es2015 index.js"
// in this example we will still not transpile

// Node.js releases supported by each Babel release:

//      Babel Version	Supported Node.js Releases
//          Babel 6	    use any version before node 8.x.x
//          Babel 7	    Node.js 8 and later
//          Babel 8	    Node.js 16.20.0, 18.16.0, and 20.0.0 and later2



const {function1,function2,function3,function4,function5}=require('./myfunction')
const msg = 'Hello World!'
function1(msg)
function2(msg)
function3(msg)
function4.displaymsg(msg)
new function5(msg).displaymsg()