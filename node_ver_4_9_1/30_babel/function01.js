// function declaration
module.exports.myfunction1 = function myfunction1(msg){
    console.log(msg)
}

//function expression
module.exports.myfunction2 = function(msg){
    console.log(msg)
}

//arrow function
module.exports.myfunction3 = (msg)=>{
    console.log(msg)
}

// methods in objects
module.exports.myfunction4 =  {
    displaymsg:function(msg){
        console.log(msg)
    }
}

// object constructor
module.exports.myfunction5 = function myfunction5(msg){
    this.msg = msg
    this.displaymsg = function(){
        console.log(this.msg)
    }
}