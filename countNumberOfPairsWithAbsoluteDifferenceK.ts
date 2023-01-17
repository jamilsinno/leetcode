function countKDifference(nums: number[], k: number): number {
    // create a counter for the total number of pairs
    let pairs: number = 0;

    // step into the array and start calculating the difference between the current element and the next element.
    for (let i = 0; i < nums.length; i++) {
        // Use another loop to compare your current index to the next index.
        for (let j = i + 1; j < nums.length; j++){
            // if the difference in indices is the same as our target, add to our counter.
            if ( Math.abs(nums[i] - nums[j])  === k ) {
                pairs += 1
            }
        }
    }
    // return the total number of pairs
    return pairs
    
    // let map={} 
	// for(let i of nums){
	// 	map[i]?map[i]++:map[i]=1
	// }
    // console.log(map,'one')
	// let count =0; 
	// for(let i=0;i<nums.length;i++){
	// 	if(map[nums[i]-k]) count +=map[nums[i]-k]
    //     console.log({i}, map[nums[i]-k], {count}, 'two')
	// }
	// return count;
};