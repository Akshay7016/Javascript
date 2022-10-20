var user = {
    firstName: "Akshay",
    lastName: "Sajgule",
    role: "user",
    loginCount: 31,
    facebookSignedIn: true
}

console.log(user.firstName);
console.log(user["lastName"]);

console.log("before updation = ", user)
user.role = "Admin"
user.loginCount = 45
console.log("after updation = ", user)