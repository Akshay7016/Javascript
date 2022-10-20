var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;

        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;

        case "testprep":
            return `${name} is test prep with access to create and delete tests`;

        case "user":
            return `${name} is user with access to consume content`;

        default:
            return `${name} is trial user`
    }
}

console.log(getUserRole("Akshay", "testprep"));