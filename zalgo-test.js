// zalgo-test.js

let Zalgo = require("./zalgo.js")
let zalgo = new Zalgo({
	up: true,
	down: true,
	middle: false,
	intensity: .5,
	// debug: true
})
console.log("summoning...")
let output = zalgo("hello world")
console.log("\n\n\n", output, "\n\n\n")