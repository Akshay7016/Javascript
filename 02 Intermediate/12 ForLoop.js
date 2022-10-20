var states = ["Maharashtra", "Rajasthan", "Assam", 1947, "Punjab", "Madhya Pradesh"];

for (let i = 0; i < states.length; i++) {
    // don't want to print number
    if (typeof states[i] === "number") {
        continue;
    }
    console.log(states[i]);
}