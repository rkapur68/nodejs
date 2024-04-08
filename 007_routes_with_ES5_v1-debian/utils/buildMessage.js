//ES5 CommonJS Approach
var msg = '';
function buildMessage(){
    return msg = 'Middleware: Accessing the secret section ...\n';
}

module.exports = {
  msg: msg,
  buildMessage: buildMessage
};