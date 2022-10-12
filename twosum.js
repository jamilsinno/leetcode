// Passed an array and a number. The array will be in a specific order. The order doesn't actually matter, but the values in the array will be all numbers. There will be no special cases in the array. No strings or special characters. The array will always have a minimum length of 2

// We will also be passed a target number to determine if two values from the original array add up to the target value

// Return the index of both numbers if no numbers exist return false

var twoSum = function(nums, target) {
    // create a hashmap
    let hashmap = {}

    // loop through the array and determine if the difference shows up in the hashmap
    for (element in nums) {
        let otherNum = target - nums[element]
        console.log(nums[element])
        // set each element in the array to its index
        if(otherNum in hashmap){
            return [+hashmap[otherNum], +element]
        }
        hashmap[nums[element]] = element
    }

    return false

};

console.log(twoSum([2,7,11,15], 9), [0,1])
console.log(twoSum([3,2,4], 7), [0,2])
console.log(twoSum([3,3], 6), [0,1])