// Works fine due to Global Context
// Once the function is registered then that function is wrapped up and put inside global context.
// So when the code executes, it is aware of those functions. That's why it is not giving error.
sayHello();

function sayHello() {
    console.log("Hello Akshay!");
}




