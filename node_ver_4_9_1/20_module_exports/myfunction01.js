module.exports.myfunction1 = function myfunction1(msg){
    console.log(msg)
}

module.exports.myfunction2 = myfunction2 = function(msg){
    console.log(msg)
}

module.exports.myfunction3 = myfunction3 = (msg) => {
    console.log(msg)
}


module.exports.myfunction4 = myfunction4 = {
    displaymsg:function(msg){
        console.log(msg)
    }
}

module.exports.myfunction5 = function myfunction5(msg){
    this.msg = msg;
    this.displaymsg=function(){
        console.log(this.msg)
    }
}