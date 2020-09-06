const k = 3 // RGB color
const p = 32 //possibilities 
res = [] //RGB data array


function solution(n, res) {
	// start from 1 1 1
	nums = [1, 1, 1]
	//signal not to add number to ones digit
	noUpdate = false

	while (1) {
		//add valid rgb color (cut off extra)
		if (!nums.includes(n+1)) { res.push([...nums]) }

		//[1, 1, 1] from left to right keep adding unitl to [n+1, n+1. n]
		if (nums[k-3] > n) {
			break
		}

		// tens digit up to n + 1 (since from tens will 
		// calculate one more round to cover all the 
		// possibilities)
		while (nums[k-2] > n) {
            nums[k-2] = 1
            nums[k-3] += 1
            noUpdate = true
		}

		// ones digit up to n
		while (nums[k-1] == n) {
			nums[k-1] = 1
			nums[k-2] += 1
			noUpdate = true
		}

		if (noUpdate) {
			noUpdate = false
			continue
		}

		//add 1 to ones digit place
		nums[k-1] += 1
	}

	return res
}
