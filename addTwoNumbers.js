// We are passed two linked lists. The lists will be in the form of an array. The lists will represent a number. The number will be reversed. The arrays passed will not have any special characters for us to worry about, letters or indexes. The numbers will not start with 0 either.

// Return the sum of the two linked lists. Reverse the order, sum the two lists, get the result and then return the result as a reversed list. Similar to the parameters passed.

// var addTwoNumbers = function(l1, l2) {
//     // reverse the two lists, join them and make them into numbers. 
//     let list1 
//     let list2

//     // if both arrays are 1 element long no need to reverse
//     if (l1.length === 1 && l2.length === 1 ){
//         list1 = l1
//         list2 = l2
//     } else if (l1.length > 1 && l2.length === 1) {
//         list1 = l1.reverse().join('')
//         list2 = l2
//     } else if (l1.length === 1 && l2.length > 1) {
//         list1 = l1
//         list2 = l2.reverse().join('')
//     } else {
//         list1 = l1.reverse().join('')
//         list2 = l2.reverse().join('')
//     }

//     // add the two l1sts
//     let result =  +list1 + +list2
//     let resNum = String(result).split('').reverse()
//     let ans = resNum.map(x=> +x)

//     // split the answer and return in reverse as an array
//     return ans
// };

// Real solution 

var addTwoNumbers = function(l1, l2) {
    
    // Initialize your sum
    let sum = 0;
    // Initialize your the head of the result list 
    let current = new ListNode(0);
    // Set the result list as your head node.
    let result = current;
    

    // Run through the lists and add them to your sum. 
    while(l1 || l2) {
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        // Place the remainder of the sum into your next result list node. This is because we are dealing with each value individually. 
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        // if the sum is greater than 9 we to carry forward the 1. So instead of starting our next iteration at sum = 0, we start at sum = 1.
        sum = sum > 9 ? 1 : 0;
    }
    
    // If there still remains a remainder because our final digits were grater than 9, put the extra 1 into a final node.
    if(sum) {
        current.next = new ListNode(sum);
    }
    
    // Result is still pointing outside of the result linked list, so we must step into the head of the list and return. Returning the head of a singly linked list will return the full list.
    return result.next;
};



// examples

console.log(addTwoNumbers([2,4,3], [5,6,4]), [7,0,8])
console.log(addTwoNumbers([0], [0]), [0])
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]), [8,9,9,9,0,0,0,1])
