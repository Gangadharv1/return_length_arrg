function argumentsLength() {
    return Object.keys(arguments).length;
}
console.log(argumentsLength(5)); 
console.log(argumentsLength({}, null, "3")); 

