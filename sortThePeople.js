// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.


// Passed two parameters. The parameters represent arrays. Person and height arrays. Person array is strings and height is integers. Just one name, Uppercase included. Integer array whole numbers only. Always at least greater than 1. Array lengths willbe the same

// Return the array of names sorted in descending order by their heights.  


var sortPeople = function(names, heights) {
    // create an object
    let ans = []
    // store the index as key and the value as the height
    for (let i =0; i<names.length; i++) {
        ans.push({names: names[i], heights: heights[i]})
    }
    // sort based on height
    ans.sort( (a,b) => b.heights - a.heights)
    // return the object
    return ans.map( (el) => el = el.names )
};

console.log(sortPeople(['Jamil', 'Jarrod', 'Ned'],[176, 173, 190]), ['Ned', 'Jamil','Jarrod'])
// console.log(sortPeople(['Jamil', 'Jarrod', 'Ned'],[150, 160, 155]), ['Jarrod', 'Ned', 'Jamil'])