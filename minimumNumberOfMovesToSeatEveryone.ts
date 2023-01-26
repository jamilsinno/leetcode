// We are passed two arrays of numbers. In the arrays one of the arrays indicates assigned student seating and the second array indicates their current seating assignment. We need to arrange the students so that they satisfy the seats array arrangement. No two seats can be occupied at the same time. The arrays that are passed to us will only contain numbers. The numbers represented by the seats array indicates the seating arrangement of the students array.

// Return the total number of steps needed to satisfy the seating arrangement (counter)

function minMovesToSeat(seats: number[], students: number[]): number {
    // use a variable to count your steps
    let count: number = 0;

    // sort the arrays in ascending order.
    seats = seats.sort( ( a, b ) => a - b);
    students = students.sort( ( a, b ) => a - b);

    // iterate over the arrays counting the difference between the current assigned seating and the desired seating
    for ( let i:number = 0; i < seats.length; i++ ) {
        count += Math.abs(seats[i] - students[i])
    }

    return count
};