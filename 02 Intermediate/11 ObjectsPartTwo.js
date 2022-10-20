var user = {
    firstName: "Akshay",
    lastName: "Sajgule",
    role: "user",
    loginCount: 31,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    }
}

console.log(user.getCourseCount());
user.buyCourse("React")
user.buyCourse("Javascript")
console.log(user.getCourseCount());