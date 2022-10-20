// Majorly used with object

let symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook"
}

for (const n in symbols) {
    console.log(`Key is: ${n} and Value is: ${symbols[n]}`);
}

// Key is: yt and Value is: youtube
// Key is: ig and Value is: instagram
// Key is: fb and Value is: facebook