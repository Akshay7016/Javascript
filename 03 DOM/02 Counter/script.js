var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers")

let count = 1;

setInterval(() => {
    if (count < 450) {
        count++;
        counter.innerText = count;
    }
}, 1)

setTimeout(() => {
    followers.innerText = "Followers on Instagram"
}, 3000)
