function doAddition(x) {
    return function (y) {
        return x + y;
    }
}

let add5 = doAddition(5);
console.log(add5(5));

// 2nd method to call
console.log(doAddition(5)(5));

// doAddition()()() //currying