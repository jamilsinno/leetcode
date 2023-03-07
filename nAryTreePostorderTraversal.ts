/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
    let ans = [];    
    traverse(root)
    return ans

    function traverse(root){
        if (!root) return

        for (let c of root.children) {
            traverse(c)
        }
        ans.push(root.val)
    }
};