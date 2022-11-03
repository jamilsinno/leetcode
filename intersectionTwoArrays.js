// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// I will be getting passed two arrays. The arrays numbers only. No negative numbers but can be 0. The arrays can be different lengths but won't matter.

// I will be retuning an array of integers. These integers appear in both passed arguments. The order of the return array does not matter.

const intersection = function(nums1, nums2) {
    // // create an answer array
    // let arr = []
    // // iterate over nums1 
    // for (let i =0; i<nums1.length; i++) {
    // // if the value exists in nums 2, add it to an answer array if it doesn't exist in the answer array
    //     if (nums2.includes(nums1[i]) && !arr.includes(nums1[i])) {
    //         arr.push(nums1[i])
    //     }
    // }
    // // return the answer    
    // return arr


    let hashmap = {}
    let hashmap2 = {}
    let ans = []

    for (let i = 0; i<nums1.length; i++) {
        if(!hashmap.hasOwnProperty(nums1[i])){
            hashmap[nums1[i]] = 1
        }
    }

    for (let i=0; i<nums2.length; i++){
        if (hashmap.hasOwnProperty(nums2[i]) && !hashmap2.hasOwnProperty(nums2[i])){
            hashmap2[nums2[i]] = 1
            ans.push(nums2[i])
        }
    }
    console.log(hashmap, hashmap2)
    return ans
};

console.log(intersection([1,2,3,4],[2,3]), [2,3])
console.log(intersection([6,32,1000,2],[32,1000]), [32,1000])
console.log(intersection([6,32,1000,2,32],[32,1000,32]), [32,1000])
