function step_color(step, color_range) {
	const COLOR_RANGE = 256

	// create normal color range
	for(var i = 0; i < COLOR_RANGE; i++) {
		color_range.push(i)
	}
	// generate color range by giving `s` step
	return color_range.filter(item => item % step === 0)
}


function rgb_picker(color_range, index_stack, index, res) {
	if(index >= 3) {
		let temp = [...index_stack]
		res.push(temp)
		return
	}

	for (var i = 0; i < color_range.length; i++) {
		index_stack.push(color_range[i])
		rgb_picker(color_range, index_stack, index+1, res)
		index_stack.pop()
	}
}

function algorithm(step) {
	let my_color_range = step_color(step, []) //color range according to gave steps
	let res = [] // my color combinations result
	// pick all possible colors
	rgb_picker(my_color_range, [], 0, res)

	return res
}

export {
	algorithm
}