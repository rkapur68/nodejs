// Method 5 - constructor object creation
function myFunction(msg){
    this.message = msg;
    this.displayMessage=function(){
        console.log(this.message)
    }
}

module.exports = myFunction