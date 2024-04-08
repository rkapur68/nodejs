// Method 3 - Functions can also be defined as methods within an object
const myObject = {
    myMethod:function(msg){
        console.log('Hello World!')
    }
}

module.exports=myObject.myMethod;