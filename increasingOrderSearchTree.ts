/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function increasingBST(root: TreeNode | null): TreeNode | null {
    const dummyHead: TreeNode = new TreeNode();
    let temp = dummyHead
    
    function inOrder(root: TreeNode | null) {
        if (!root) return

        // left
        if (root.left) {
            inOrder(root.left)
        }

        temp.right = new TreeNode(root.val)
        temp = temp.right

        // right
        if (root.right) {
            inOrder(root.right)
        }
    }

    inOrder(root)
    console.log(dummyHead)
    return dummyHead.right
};