// zalgo.js

let zalgoText = require("./og/dist/index.js").default

function Zalgo(config = {}) {
	let debug = config.debug

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
			options.directions = undefined
		}
		let output = zalgoText(string, options)
		if (debug) {
			console.log(options)
			console.log(output)
		}
		return output
	}


	function clamp(num) {
		if (num > 1) return 1
		else return num
	}

	return this.create
}


module.exports = Zalgo