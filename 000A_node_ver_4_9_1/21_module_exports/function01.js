//function declaration
module.exports.myfunction1 = function myfunction01(msg){
    console.log(msg)
}

// function expression
module.exports.myfunction2 = function(msg){
    console.log(msg)
}

// arrow function
module.exports.myfunction3 = (msg)=>{
    console.log(msg)
}

// method in an object
module.exports.myfunction4 = {
    displaymsg:function(msg){
        console.log(msg)
    }
}

// constructor function
module.exports.myfunction5 = function(msg){
    this.msg = msg
    this.displaymessage = function(){
        console.log(this.msg)
    }
}