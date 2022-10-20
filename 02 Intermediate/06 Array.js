var countries = ["India", "Sri Lanka", "USA", "Russia"]

var states = new Array("Maharashtra", "Punjab", "Jammu-kashmir", "Assam");
// console.log(states);
// console.log(states[0]);
// console.log(states.length);
states[2] = "Kerala"
// console.log(states);


var user = ["Akshay", "akshay@gmail.com", 3, 22, true]
// console.log(user);

user.pop()
user.pop()
// console.log(user);
user.unshift("New Value")
// console.log(user);

user.shift()
// console.log(user);

user.push("Hello")
user.push("World")
console.log(user);

console.log(user.indexOf("Hello"));
console.log(user.indexOf("hello"));


// Converting string to array
console.log(Array.from("Akshay"));