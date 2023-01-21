function getDecimalValue(head: ListNode | null): number {
    let ans: string = '';
    while(head !== null){
        ans += head.val
        head = head.next
    }
    return parseInt(ans, 2)
};