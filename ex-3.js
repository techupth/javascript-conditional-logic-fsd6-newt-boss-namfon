//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
message = (lightBulbStatus === "on") ? "Light bulb is On."
            : (lightBulbStatus === "Broken") ? "Light bulb is Broken."
            : "“Please choose the correct input (On/Off/Broken)”";
console.log(message);