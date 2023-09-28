const nums = [1,2,3,4]

const findMax = (nums) => {
    let max = -Infinity;
    
    if(nums === null || nums === undefined || nums.length < 1) {
    	console.log('Nums is empty')
	    return
    }
    
		if(!Array.isArray(nums)) {
        console.log(`You need a valid list of numbers, not a ${typeof nums}`)
        
            return
        }
   
      nums.forEach(num => {
        if (num > max) max = num;
      })
    
    return max;
}

findMax(nums)