// now to use babel, read why babel is needed 21_module_exports
// step 1: check npm version with command npm -v
// step 2: if npm version greater than 5.2.0, npx will be present
// step 3: check by using command npx -v
// step 4: if npx is missing then use command npm install -g npx
// step 5: to check location of global directory use command npm root -g
// step 6: npm init -y
// Install Babel 6**: Since Babel 7 requires Node.js 6.9.0 or later, 
// you'll need to use Babel 6. Install Babel 6 CLI and the ES2015 preset:
// step 7: npm install --save-dev babel-cli@6 babel-preset-es2015
// step 8: create .babelrc file with entriee - check whats in file
// step 9: modify package.json with to run code without transpiling
// meaning create seperate file that will be comaptible with node 4.9.1
//    "scripts": {
//    "start": "babel-node --presets es2015 index.js"
// }
// step 9: npm start
// next exercise we will use 2nd approach without transpiling

const {myfunction1,myfunction2,myfunction3,myfunction4,myfunction5}=require('./function01')

myfunction1('Hello World!')
myfunction2('Hello World!')
myfunction3('Hello World!')
myfunction4.displaymsg('Hello World!')
const msg = new myfunction5('Hello World!')
msg.displaymsg()
