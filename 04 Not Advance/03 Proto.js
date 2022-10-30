// __proto__ is used to link two objects in javascript

var Animal = {
    name: "foo",
    age: 9
}

var Dog = {
    owner: "Koo",
    canRun: true
}

// Here we are linking Animal object with Dog object
Dog.__proto__ = Animal;
// Here name property is came from Animal Object
console.log(Dog.name)



// For-in loop will all keys in Dog Object
for (const p in Dog) {
    console.log(p)
}
// owner
// canRun
// name
// age



// Object.keys() will print it's own properties
console.log(Object.keys(Dog));
// [ 'owner', 'canRun' ]