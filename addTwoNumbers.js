// We are passed two linked lists. The lists will be in the form of an array. The lists will represent a number. The number will be reversed. The arrays passed will not have any special characters for us to worry about, letters or indexes. The numbers will not start with 0 either.

// Return the sum of the two linked lists. Reverse the order, sum the two lists, get the result and then return the result as a reversed list. Similar to the parameters passed.

var addTwoNumbers = function(l1, l2) {
    // reverse the two lists, join them and make them into numbers. 
    let list1 
    let list2

    // if both arrays are 1 element long no need to reverse
    if (l1.length === 1 && l2.length === 1 ){
        list1 = l1
        list2 = l2
    } else if (l1.length > 1 && l2.length === 1) {
        list1 = l1.reverse().join('')
        list2 = l2
    } else if (l1.length === 1 && l2.length > 1) {
        list1 = l1
        list2 = l2.reverse().join('')
    } else {
        list1 = l1.reverse().join('')
        list2 = l2.reverse().join('')
    }

    // add the two l1sts
    let result =  +list1 + +list2
    let resNum = String(result).split('').reverse()
    let ans = resNum.map(x=> +x)

    // split the answer and return in reverse as an array
    return ans
};

// examples

console.log(addTwoNumbers([2,4,3], [5,6,4]), [7,0,8])
console.log(addTwoNumbers([0], [0]), [0])
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]), [8,9,9,9,0,0,0,1])
