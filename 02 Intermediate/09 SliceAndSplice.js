var users = ["Tim", "Ted", "Ton", "Sam", "Sor", "Sod"]

// slice(start index , end index)
// console.log(users.slice(1, 4))

// splice(start index, delete count, elements to add)
users.splice(2, 2)
console.log(users)

users.splice(2, 1, "Hi", "Hello", "Akshay")
console.log(users);

users.splice(3)
console.log(users)