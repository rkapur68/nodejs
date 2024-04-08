// function declaration
module.exports.function1 = function function1(msg){
    console.log(msg)
}

//function expression
module.exports.function2 = function(msg){
    console.log(msg)
}

//arrow function
module.exports.function3 = (msg) =>{
    console.log(msg)
}

//  methods in object
module.exports.function4 = {
    displaymsg:function(msg){
        console.log(msg)
    }
}

// method in object constructor
module.exports.function5 = function(msg){
    this.msg = msg,
    this.displaymsg = function(){
        console.log(this.msg)
    }
}