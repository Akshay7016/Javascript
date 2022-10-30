var User = {
    name: "Akshay",
    getUserName: function () {
        console.log(`User name is: ${this.name}`);
    }
}

var obj = Object.create(User)
// This will give {}, but proto has object properties(name, getUserName)
console.log(obj);

obj.name = "Ram"
obj.getUserName();
// User name is: Ram