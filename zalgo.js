// zalgo.js

let zalgoText = require("./og/dist/index.js").default









function Zalgo(config = {}) {

	// CREATE //
	this.create = function(string, customConfig = {}) {

		for (let [key, val] of Object.entries(customConfig)) {
			if (val !== undefined) config[key] = val
		}

		let options = {
			directions: {
				up: config.up,
				down: config.down,
				middle: config.middle,
			},
			intensity: clamp(config.intensity),
			seed: config.seed
		}

		if (!config.up && !config.middle && !config.down) {
			// config.up = true
			// config.down = true
			// config.middle = true
			options.directions = undefined
		}
		console.log(options)
	


		let output = zalgoText(string, options)

		console.log(output)
		return output
	}


	function clamp(num) {
		if (num > 1) return 1
		else return num
	}

	return this.create
}


let zalgo = new Zalgo()



zalgo("sdfs", {
	// up: true,
	// down: true,
	// middle: true
})