// For all regular function calls, this points to window object

// this will give {}
console.log("LINE 4", this)

var user = {
    firstName: "Akshay",
    courseCount: 4,
    getCourseCount: function () {
        // this will print current object. As function call is related to object
        console.log("LINE 11", this)


        function sayHello() {
            console.log("Hello");
            // As these is regular function call(i.e. not related to object). So this will give
            // window object
            console.log("LINE 18", this);
        }
        // Regular function call
        sayHello();
    }
}

// function call related to object
user.getCourseCount()