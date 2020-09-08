function RGB_Range() {
	let res = []
	for (var i = 1; i <= 256; i++) {
		if(i % 8 === 0) {
			res.push(i)
		}
	}
	return res
}



function RGB_Generator(n, res, func) {
	if (typeof n !== 'number' | typeof n === 'undefined') {
		throw new Error('number required')
	}

	if (n < 3) {
		throw new Error('must equal or greater than 3')
	}

	if (res.constructor !== Array | res.length > 0) {
		throw new Error('empty array type required')
	}	


	const data_range = func();
	const k = 3; // RGB color
	// start from 1 1 1
	let nums = [1, 1, 1];
	//signal not to add number to ones digit
	let noUpdate = false;

	while (1) {
		//add valid rgb color (cut off extra)
		// if (!nums.includes(n+1)) { res.push([...nums]) };
		if (!nums.includes(n+1)) { res.push([data_range[nums[0]], data_range[nums[1]], data_range[nums[2]]]) };

		//[1, 1, 1] from left to right keep adding unitl to [n+1, n+1. n]
		if (nums[k-3] > n) {
			break;
		}

		// tens digit up to n + 1 (since from tens will 
		// calculate one more round to cover all the 
		// possibilities)
		while (nums[k-2] > n) {
            nums[k-2] = 1;
            nums[k-3] += 1;
            noUpdate = true;
		}

		// ones digit up to n
		while (nums[k-1] === n) {
			nums[k-1] = 1;
			nums[k-2] += 1;
			noUpdate = true;
		}

		if (noUpdate) {
			noUpdate = false;
			continue;
		}

		//add 1 to ones digit place
		nums[k-1] += 1;
	}

	return res;
}

export {
	RGB_Range,
	RGB_Generator,
}
