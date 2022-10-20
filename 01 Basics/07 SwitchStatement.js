var role = "subadmin";

switch (role) {
    case "admin":
        console.log("gets full access");
        break;

    case "subadmin":
        console.log("gets access to create/delete courses");
        break;

    case "testprep":
        console.log("gets access to create/delete tests");
        break;

    case "user":
        console.log("gets access to consume courses");
        break;

    default:
        console.log("Trial user");
        break;
}

let sum = "5" + 9;
console.log(typeof sum);